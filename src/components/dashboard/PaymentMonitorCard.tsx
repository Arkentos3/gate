import React from 'react';
import Card from '../ui/Card';
import Badge from '../ui/Badge';
import { ArrowUpRight, Clock, CheckCircle, XCircle } from 'lucide-react';

interface PaymentMonitorCardProps {
  className?: string;
}

const PaymentMonitorCard: React.FC<PaymentMonitorCardProps> = ({ className = '' }) => {
  const recentPayments = [
    {
      id: 'pay_2309823',
      customer: 'Joao Pereira',
      time: '2 minutes ago',
      amount: 16.05,
      status: 'completed'
    },
    {
      id: 'pay_2309822',
      customer: 'Vanessa Cosandey',
      time: '15 minutes ago',
      amount: 59.99,
      status: 'pending'
    },
    {
      id: 'pay_2309821',
      customer: 'Charlotte Ruel',
      time: '32 minutes ago',
      amount: 20.00,
      status: 'completed'
    },
    {
      id: 'pay_2309820',
      customer: 'Michel Bekas',
      time: '1 hour ago',
      amount: 50.00,
      status: 'failed'
    },
    {
      id: 'pay_2309819',
      customer: 'ANTONIOS CHRISTOFIS',
      time: '2 hours ago',
      amount: 200.00,
      status: 'completed'
    }
  ];

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('de-DE', {
      style: 'currency',
      currency: 'EUR',
    }).format(amount);
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'pending':
        return <Clock className="h-5 w-5 text-yellow-500" />;
      case 'failed':
        return <XCircle className="h-5 w-5 text-red-500" />;
      default:
        return null;
    }
  };

  return (
    <Card
      title="Payment Monitor"
      subtitle="Real-time payment activity"
      className={className}
      headerAction={
        <Badge variant="success" className="animate-pulse">Live</Badge>
      }
    >
      <div className="space-y-4">
        {recentPayments.map((payment) => (
          <div key={payment.id} className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg transition-colors">
            <div className="flex items-center">
              <div className="mr-3">
                {getStatusIcon(payment.status)}
              </div>
              <div>
                <div className="font-medium">{payment.customer}</div>
                <div className="text-sm text-gray-500 flex items-center">
                  <span>{payment.time}</span>
                  <span className="mx-1">•</span>
                  <span>{payment.id}</span>
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="font-medium">{formatCurrency(payment.amount)}</div>
              <a href="#" className="text-sm text-green-600 hover:text-green-800 flex items-center justify-end">
                Details
                <ArrowUpRight className="h-3 w-3 ml-1" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default PaymentMonitorCard;