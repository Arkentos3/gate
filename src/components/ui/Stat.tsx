import React, { ReactNode } from 'react';

interface StatProps {
  title: string;
  value: string | number;
  change?: {
    value: number;
    trend: 'up' | 'down' | 'neutral';
  };
  icon?: ReactNode;
  className?: string;
}

const Stat: React.FC<StatProps> = ({
  title,
  value,
  change,
  icon,
  className = '',
}) => {
  const getTrendColor = (trend: 'up' | 'down' | 'neutral') => {
    switch (trend) {
      case 'up':
        return 'text-green-600';
      case 'down':
        return 'text-red-600';
      case 'neutral':
      default:
        return 'text-gray-500';
    }
  };

  const getTrendIcon = (trend: 'up' | 'down' | 'neutral') => {
    switch (trend) {
      case 'up':
        return '↑';
      case 'down':
        return '↓';
      case 'neutral':
      default:
        return '→';
    }
  };

  return (
    <div className={`bg-white overflow-hidden rounded-lg ${className}`}>
      <div className="p-5">
        <div className="flex items-center">
          {icon && (
            <div className="flex-shrink-0 rounded-md bg-green-100 p-3 text-green-600">
              {icon}
            </div>
          )}
          <div className={icon ? 'ml-5 w-0 flex-1' : 'w-full'}>
            <dl>
              <dt className="text-sm font-medium text-gray-500 truncate">
                {title}
              </dt>
              <dd>
                <div className="text-lg font-medium text-gray-900">{value}</div>
              </dd>
              {change && (
                <dd className="flex items-baseline">
                  <p
                    className={`text-sm font-semibold ${getTrendColor(
                      change.trend
                    )}`}
                  >
                    <span className="mr-0.5">{getTrendIcon(change.trend)}</span>
                    {Math.abs(change.value)}%
                  </p>
                  <p className="ml-2 text-sm text-gray-500">from last period</p>
                </dd>
              )}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stat;