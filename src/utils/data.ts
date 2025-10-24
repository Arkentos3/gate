import { supabase } from '../lib/supabase';

export const getRevenueData = async () => {
  const { data, error } = await supabase
    .from('revenue_data')
    .select('month, revenue')
    .order('id', { ascending: true });

  if (error) {
    console.error('Error fetching revenue data:', error);
    return [];
  }

  return data || [];
};

export const getUserActivityData = () => {
  return [
    { time: '00:00', activeUsers: 120 },
    { time: '04:00', activeUsers: 50 },
    { time: '08:00', activeUsers: 180 },
    { time: '12:00', activeUsers: 290 },
    { time: '16:00', activeUsers: 350 },
    { time: '20:00', activeUsers: 240 },
  ];
};

export const getSystemStatus = async () => {
  const { data, error } = await supabase
    .from('system_status')
    .select('service_name, status, uptime')
    .order('service_name');

  if (error) {
    console.error('Error fetching system status:', error);
    return [];
  }

  return (data || []).map(item => ({
    name: item.service_name,
    status: item.status,
    uptime: item.uptime
  }));
};

export const getRecentPayments = async () => {
  const { data, error } = await supabase
    .from('transactions')
    .select('transaction_id, customer_name, amount, status, date')
    .order('date', { ascending: false })
    .limit(5);

  if (error) {
    console.error('Error fetching recent payments:', error);
    return [];
  }

  return (data || []).map(item => ({
    id: item.transaction_id,
    customer: item.customer_name,
    time: formatTimeAgo(new Date(item.date)),
    amount: parseFloat(item.amount),
    status: item.status
  }));
};

export const getTransactions = async () => {
  const { data, error } = await supabase
    .from('transactions')
    .select('transaction_id, date, customer_name, amount, status, payment_method')
    .order('date', { ascending: false });

  if (error) {
    console.error('Error fetching transactions:', error);
    return [];
  }

  return (data || []).map(item => ({
    id: item.transaction_id,
    date: formatDate(new Date(item.date)),
    name: item.customer_name,
    amount: parseFloat(item.amount),
    status: item.status,
    paymentMethod: item.payment_method
  }));
};

function formatTimeAgo(date: Date): string {
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffMins = Math.floor(diffMs / 60000);
  const diffHours = Math.floor(diffMs / 3600000);
  const diffDays = Math.floor(diffMs / 86400000);

  if (diffMins < 1) return 'just now';
  if (diffMins < 60) return `${diffMins} minute${diffMins !== 1 ? 's' : ''} ago`;
  if (diffHours < 24) return `${diffHours} hour${diffHours !== 1 ? 's' : ''} ago`;
  return `${diffDays} day${diffDays !== 1 ? 's' : ''} ago`;
}

function formatDate(date: Date): string {
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
}