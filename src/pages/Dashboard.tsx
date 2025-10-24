import React, { useEffect, useState } from 'react';
import Card from '../components/ui/Card';
import Stat from '../components/ui/Stat';
import TransactionList from '../components/dashboard/TransactionList';
import SystemStatusCard from '../components/dashboard/SystemStatusCard';
import PaymentMonitorCard from '../components/dashboard/PaymentMonitorCard';
import Button from '../components/ui/Button';
import { CreditCard, TrendingUp, Users, Activity, AlertTriangle, RefreshCw } from 'lucide-react';
import { getTransactions } from '../utils/data';

const Dashboard: React.FC = () => {
  const [transactions, setTransactions] = useState<any[]>([]);

  useEffect(() => {
    const loadData = async () => {
      const data = await getTransactions();
      setTransactions(data);
    };
    loadData();
  }, []);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
          <p className="mt-1 text-sm text-gray-500">
            Overview of your payment system performance
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <input
              type="date"
              className="block rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
              defaultValue={new Date().toISOString().split('T')[0]}
            />
            <span className="text-gray-500">to</span>
            <input
              type="date"
              className="block rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
              defaultValue={new Date().toISOString().split('T')[0]}
            />
          </div>
          <Button variant="primary" size="sm">
            Apply
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <Stat
          title="Total Revenue"
          value="€339,980.5"
          change={{ value: 12, trend: 'up' }}
          icon={<TrendingUp className="h-5 w-5" />}
          className="shadow-sm"
        />
        <Stat
          title="Transactions"
          value="5,605"
          change={{ value: 8, trend: 'up' }}
          icon={<CreditCard className="h-5 w-5" />}
          className="shadow-sm"
        />
        <Stat
          title="Chargebacks"
          value="€1,327.4"
          change={{ value: 2.5, trend: 'up' }}
          icon={<AlertTriangle className="h-5 w-5" />}
          className="shadow-sm"
        />
        <Stat
          title="Refunds"
          value="€0.0"
          change={{ value: 0.0, trend: 'up' }}
          icon={<RefreshCw className="h-5 w-5" />}
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