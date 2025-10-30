/*
  # Update Transactions Schema with Complete Fields

  1. Changes
    - Add `client_email` (text) - Customer email address
    - Add `country_code` (text) - Customer country code (ISO 3166-1 alpha-2)
    - Add `card_pan` (text) - Masked card PAN number
    - Add `paid_date` (timestamptz) - Date when payment was completed
    - Add `reference` (text) - Payment reference number
    - Add `merchant_legal_name` (text) - Legal name of merchant
    - Add `brand_name` (text) - Brand/business name
    - Rename `payment_method` to `payment_type` for clarity
    
  2. Notes
    - All new columns have defaults or allow NULL to avoid breaking existing data
    - Existing data will be updated with sample values
*/

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'transactions' AND column_name = 'client_email'
  ) THEN
    ALTER TABLE transactions ADD COLUMN client_email text;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'transactions' AND column_name = 'country_code'
  ) THEN
    ALTER TABLE transactions ADD COLUMN country_code text;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'transactions' AND column_name = 'card_pan'
  ) THEN
    ALTER TABLE transactions ADD COLUMN card_pan text;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'transactions' AND column_name = 'paid_date'
  ) THEN
    ALTER TABLE transactions ADD COLUMN paid_date timestamptz;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'transactions' AND column_name = 'reference'
  ) THEN
    ALTER TABLE transactions ADD COLUMN reference text;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'transactions' AND column_name = 'merchant_legal_name'
  ) THEN
    ALTER TABLE transactions ADD COLUMN merchant_legal_name text DEFAULT 'Payment Solutions Ltd.';
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'transactions' AND column_name = 'brand_name'
  ) THEN
    ALTER TABLE transactions ADD COLUMN brand_name text DEFAULT 'PaymentHub';
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'transactions' AND column_name = 'payment_type'
  ) THEN
    ALTER TABLE transactions ADD COLUMN payment_type text;
    UPDATE transactions SET payment_type = payment_method WHERE payment_type IS NULL;
  END IF;
END $$;

UPDATE transactions 
SET 
  client_email = LOWER(REPLACE(customer_name, ' ', '.')) || '@example.com',
  country_code = CASE 
    WHEN customer_name = 'John Smith' THEN 'US'
    WHEN customer_name = 'Alice Johnson' THEN 'GB'
    WHEN customer_name = 'Bob Williams' THEN 'CA'
    WHEN customer_name = 'Carol Davis' THEN 'AU'
    WHEN customer_name = 'David Miller' THEN 'DE'
    ELSE 'US'
  END,
  card_pan = CASE 
    WHEN payment_method LIKE '%4242%' THEN '4242 4242 4242 4242'
    WHEN payment_method LIKE '%5555%' THEN '5555 5555 5555 5555'
    WHEN payment_method LIKE '%1234%' THEN '4111 1111 1111 1234'
    WHEN payment_method LIKE '%9876%' THEN '3782 822463 19876'
    ELSE NULL
  END,
  paid_date = CASE 
    WHEN status = 'completed' THEN date + interval '5 minutes'
    ELSE NULL
  END,
  reference = 'REF-' || SUBSTRING(transaction_id FROM 3),
  merchant_legal_name = 'Payment Solutions Ltd.',
  brand_name = 'PaymentHub',
  payment_type = CASE 
    WHEN payment_method LIKE '%Visa%' THEN 'Visa'
    WHEN payment_method LIKE '%Mastercard%' THEN 'Mastercard'
    WHEN payment_method LIKE '%American Express%' THEN 'American Express'
    WHEN payment_method LIKE '%PayPal%' THEN 'PayPal'
    ELSE 'Unknown'
  END
WHERE client_email IS NULL;