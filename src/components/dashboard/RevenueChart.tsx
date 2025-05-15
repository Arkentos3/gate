import React from 'react';
import Card from '../ui/Card';

// This is a simplified chart component
// In a real application, you would use a charting library like Chart.js, Recharts, etc.
const RevenueChart: React.FC = () => {
  return (
    <Card
      title="Revenue Overview"
      subtitle="Monthly revenue breakdown"
      headerAction={
        <select className="text-sm border-gray-300 rounded-md">
          <option>Last 30 days</option>
          <option>Last 90 days</option>
          <option>This year</option>
          <option>All time</option>
        </select>
      }
    >
      <div className="h-80">
        {/* In a real app, replace this with an actual chart component */}
        <div className="relative h-full flex items-end">
          {/* Sample bar chart */}
          {[65, 40, 80, 75, 45, 55, 70, 60, 90, 80, 75, 65].map((value, index) => (
            <div key={index} className="flex-1 mx-1">
              <div
                className="bg-green-600 rounded-t relative group"
                style={{ height: `${value}%` }}
              >
                <div className="hidden group-hover:block absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-2 py-1 rounded text-xs">
                  ${Math.round(value * 120)}
                </div>
              </div>
              <div className="text-xs text-center mt-1 text-gray-500">
                {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][index]}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default RevenueChart;