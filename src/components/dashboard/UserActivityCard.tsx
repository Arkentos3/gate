import React from 'react';
import Card from '../ui/Card';
import { BarChart3 } from 'lucide-react';

interface UserActivityCardProps {
  className?: string;
}

const UserActivityCard: React.FC<UserActivityCardProps> = ({ className = '' }) => {
  const timeLabels = ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00'];
  const activityData = [12, 5, 18, 29, 35, 24];
  
  const maxValue = Math.max(...activityData);

  return (
    <Card
      title="User Activity"
      subtitle="Active users throughout the day"
      className={className}
      headerAction={
        <button className="text-sm text-green-600 hover:text-green-800 flex items-center">
          <BarChart3 className="h-4 w-4 mr-1" />
          Detailed report
        </button>
      }
    >
      <div className="h-60">
        <div className="h-full flex items-end">
          {activityData.map((value, index) => (
            <div key={index} className="flex-1 flex flex-col items-center">
              <div
                className="w-full max-w-[30px] bg-green-600 rounded-t opacity-80 hover:opacity-100 transition-opacity"
                style={{ height: `${(value / maxValue) * 100}%` }}
              ></div>
              <div className="text-xs text-gray-500 mt-1">{timeLabels[index]}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <p className="text-sm font-medium text-gray-500">Current active users</p>
          <p className="text-2xl font-semibold text-gray-900">435</p>
        </div>
        <div>
          <p className="text-sm font-medium text-gray-500">Peak today</p>
          <p className="text-2xl font-semibold text-gray-900">631</p>
        </div>
        <div>
          <p className="text-sm font-medium text-gray-500">24h average</p>
          <p className="text-2xl font-semibold text-gray-900">342</p>
        </div>
      </div>
    </Card>
  );
};

export default UserActivityCard;