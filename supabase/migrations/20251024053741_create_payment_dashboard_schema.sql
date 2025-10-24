/*
  # Create Payment Dashboard Schema

  1. New Tables
    - `transactions`
      - `id` (uuid, primary key)
      - `transaction_id` (text, unique) - External transaction reference
      - `date` (timestamptz) - Transaction date
      - `customer_name` (text) - Customer name
      - `amount` (decimal) - Transaction amount
      - `status` (text) - Transaction status (completed, pending, failed)
      - `payment_method` (text) - Payment method used
      - `created_at` (timestamptz) - Record creation timestamp
      - `updated_at` (timestamptz) - Record update timestamp

    - `revenue_data`
      - `id` (uuid, primary key)
      - `month` (text) - Month name
      - `revenue` (decimal) - Monthly revenue
      - `year` (integer) - Year
      - `created_at` (timestamptz) - Record creation timestamp

    - `system_status`
      - `id` (uuid, primary key)
      - `service_name` (text) - Name of the service
      - `status` (text) - Service status (operational, degraded, down)
      - `uptime` (decimal) - Uptime percentage
      - `updated_at` (timestamptz) - Last update timestamp

  2. Security
    - Enable RLS on all tables
    - Add policies for public read access (since this is a demo dashboard)
    - In production, these would be restricted to authenticated users
*/

CREATE TABLE IF NOT EXISTS transactions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  transaction_id text UNIQUE NOT NULL,
  date timestamptz NOT NULL DEFAULT now(),
  customer_name text NOT NULL,
  amount decimal(10, 2) NOT NULL,
  status text NOT NULL CHECK (status IN ('completed', 'pending', 'failed')),
  payment_method text NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS revenue_data (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  month text NOT NULL,
  revenue decimal(12, 2) NOT NULL,
  year integer NOT NULL DEFAULT EXTRACT(YEAR FROM now()),
  created_at timestamptz DEFAULT now(),
  UNIQUE (month, year)
);

CREATE TABLE IF NOT EXISTS system_status (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  service_name text UNIQUE NOT NULL,
  status text NOT NULL CHECK (status IN ('operational', 'degraded', 'down')),
  uptime decimal(5, 2) NOT NULL CHECK (uptime >= 0 AND uptime <= 100),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE transactions ENABLE ROW LEVEL SECURITY;
ALTER TABLE revenue_data ENABLE ROW LEVEL SECURITY;
ALTER TABLE system_status ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public read access to transactions"
  ON transactions
  FOR SELECT
  TO anon
  USING (true);

CREATE POLICY "Allow public read access to revenue data"
  ON revenue_data
  FOR SELECT
  TO anon
  USING (true);

CREATE POLICY "Allow public read access to system status"
  ON system_status
  FOR SELECT
  TO anon
  USING (true);

CREATE INDEX IF NOT EXISTS idx_transactions_date ON transactions(date DESC);
CREATE INDEX IF NOT EXISTS idx_transactions_status ON transactions(status);
CREATE INDEX IF NOT EXISTS idx_revenue_data_year_month ON revenue_data(year, month);