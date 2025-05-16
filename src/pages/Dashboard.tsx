import React from 'react';
import Card from '../components/ui/Card';
import Stat from '../components/ui/Stat';
import TransactionList from '../components/dashboard/TransactionList';
import SystemStatusCard from '../components/dashboard/SystemStatusCard';
import PaymentMonitorCard from '../components/dashboard/PaymentMonitorCard';
import { CreditCard, TrendingUp, Users, Activity } from 'lucide-react';

const Dashboard: React.FC = () => {
  // Mock data for transactions
  const transactions = [
    {
      id: 'TX123456789',
      date: 'May 26, 2025',
      name: 'John Smith',
      amount: 120.50,
      status: 'completed' as const,
      paymentMethod: 'Visa **** 4242',
    },
    {
      id: 'TX123456788',
      date: 'May 26, 2025',
      name: 'Alice Johnson',
      amount: 75.20,
      status: 'pending' as const,
      paymentMethod: 'Mastercard **** 5555',
    },
    {
      id: 'TX123456787',
      date: 'May 25, 2025',
      name: 'Bob Williams',
      amount: 250.00,
      status: 'completed' as const,
      paymentMethod: 'PayPal',
    },
    {
      id: 'TX123456786',
      date: 'May 25, 2025',
      name: 'Carol Davis',
      amount: 30.99,
      status: 'failed' as const,
      paymentMethod: 'Visa **** 1234',
    },
    {
      id: 'TX123456785',
      date: 'May 24, 2025',
      name: 'David Miller',
      amount: 149.99,
      status: 'completed' as const,
      paymentMethod: 'American Express **** 9876',
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="mt-1 text-sm text-gray-500">
          Overview of your payment system performance
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <Stat
          title="Total Revenue"
          value="$12,875.35"
          change={{ value: 12, trend: 'up' }}
          icon={<TrendingUp className="h-5 w-5" />}
          className="shadow-sm"
        />
        <Stat
          title="Transactions"
          value="1,234"
          change={{ value: 8, trend: 'up' }}
          icon={<CreditCard className="h-5 w-5" />}
          className="shadow-sm"
        />
        <Stat
          title="Active Users"
          value="435"
          change={{ value: 4, trend: 'up' }}
          icon={<Users className="h-5 w-5" />}
          className="shadow-sm"
        />
        <Stat
          title="Conversion Rate"
          value="3.6%"
          change={{ value: 0.8, trend: 'down' }}
          icon={<Activity className="h-5 w-5" />}
          className="shadow-sm"
        />
      </div>

      {/* Main Dashboard Content */}
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
        <PaymentMonitorCard />
        <SystemStatusCard />
      </div>

      {/* Recent Transactions */}
      <Card title="Recent Transactions" subtitle="Your most recent payment transactions">
        <TransactionList transactions={transactions} />
      </Card>
    </div>
  );
};

export default Dashboard;