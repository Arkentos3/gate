// This file contains mock data functions for the dashboard
// In a real application, this would be replaced with API calls

export const getRevenueData = () => {
  // Return mock revenue data for the last 12 months
  return [
    { month: 'Jan', revenue: 7800 },
    { month: 'Feb', revenue: 4800 },
    { month: 'Mar', revenue: 9600 },
    { month: 'Apr', revenue: 9000 },
    { month: 'May', revenue: 5400 },
    { month: 'Jun', revenue: 6600 },
    { month: 'Jul', revenue: 8400 },
    { month: 'Aug', revenue: 7200 },
    { month: 'Sep', revenue: 10800 },
    { month: 'Oct', revenue: 9600 },
    { month: 'Nov', revenue: 9000 },
    { month: 'Dec', revenue: 7800 },
  ];
};

export const getUserActivityData = () => {
  // Return mock user activity data for the past 24 hours
  return [
    { time: '00:00', activeUsers: 120 },
    { time: '04:00', activeUsers: 50 },
    { time: '08:00', activeUsers: 180 },
    { time: '12:00', activeUsers: 290 },
    { time: '16:00', activeUsers: 350 },
    { time: '20:00', activeUsers: 240 },
  ];
};

export const getSystemStatus = () => {
  // Return mock system status data
  return [
    { name: 'Payment Processing', status: 'operational', uptime: 99.9 },
    { name: 'Authentication', status: 'operational', uptime: 100 },
    { name: 'Analytics', status: 'degraded', uptime: 95.5 },
    { name: 'Customer Portal', status: 'operational', uptime: 99.7 },
    { name: 'Reporting API', status: 'operational', uptime: 99.8 },
  ];
};

export const getRecentPayments = () => {
  // Return mock recent payments data
  return [
    {
      id: 'pay_2309823',
      customer: 'Alex Johnson',
      time: '2 minutes ago',
      amount: 129.99,
      status: 'completed'
    },
    {
      id: 'pay_2309822',
      customer: 'Sarah Williams',
      time: '15 minutes ago',
      amount: 59.99,
      status: 'pending'
    },
    {
      id: 'pay_2309821',
      customer: 'Michael Brown',
      time: '32 minutes ago',
      amount: 299.99,
      status: 'completed'
    },
    {
      id: 'pay_2309820',
      customer: 'Emily Davis',
      time: '1 hour ago',
      amount: 19.99,
      status: 'failed'
    },
    {
      id: 'pay_2309819',
      customer: 'Chris Miller',
      time: '2 hours ago',
      amount: 89.99,
      status: 'completed'
    }
  ];
};

export const getTransactions = () => {
  // Return mock transactions data
  return [
    {
      id: 'TX123456789',
      date: 'May 26, 2025',
      name: 'John Smith',
      amount: 120.50,
      status: 'completed',
      paymentMethod: 'Visa **** 4242',
    },
    {
      id: 'TX123456788',
      date: 'May 26, 2025',
      name: 'Alice Johnson',
      amount: 75.20,
      status: 'pending',
      paymentMethod: 'Mastercard **** 5555',
    },
    {
      id: 'TX123456787',
      date: 'May 25, 2025',
      name: 'Bob Williams',
      amount: 250.00,
      status: 'completed',
      paymentMethod: 'PayPal',
    },
    {
      id: 'TX123456786',
      date: 'May 25, 2025',
      name: 'Carol Davis',
      amount: 30.99,
      status: 'failed',
      paymentMethod: 'Visa **** 1234',
    },
    {
      id: 'TX123456785',
      date: 'May 24, 2025',
      name: 'David Miller',
      amount: 149.99,
      status: 'completed',
      paymentMethod: 'American Express **** 9876',
    },
  ];
};