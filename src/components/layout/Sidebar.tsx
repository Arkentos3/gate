import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  BarChart3,
  CreditCard,
  Activity,
  Users,
  Settings,
  HelpCircle,
  Home,
  AlertTriangle,
  LogOut
} from 'lucide-react';

interface SidebarProps {
  mobile: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ mobile }) => {
  const location = useLocation();

  const navigation = [
    { name: 'Dashboard', icon: Home, path: '/' },
    { name: 'Transactions', icon: CreditCard, path: '/transactions' },
    { name: 'Analytics', icon: BarChart3, path: '#' },
    { name: 'Customers', icon: Users, path: '#' },
    { name: 'Activity', icon: Activity, path: '#' },
    { name: 'System Status', icon: AlertTriangle, path: '#' },
  ];

  const secondaryNavigation = [
    { name: 'Settings', icon: Settings, path: '#' },
    { name: 'Help', icon: HelpCircle, path: '#' },
    { name: 'Logout', icon: LogOut, path: '#' },
  ];

  return (
    <div className="flex flex-col flex-1">
      <div className="flex items-center h-16 flex-shrink-0 px-4 bg-green-800">
        <div className="flex items-center space-x-2">
          <CreditCard className="h-8 w-8 text-white" />
          <span className="text-white font-semibold text-lg">OkPay Finance LTD</span>
        </div>
      </div>
      <div className="mt-5 flex-1 flex flex-col overflow-y-auto">
        <nav className="flex-1 px-2 space-y-1">
          {navigation.map((item) => {
            const isCurrent = location.pathname === item.path;
            const Component = item.path === '#' ? 'a' : Link;

            return (
              <Component
                key={item.name}
                to={item.path === '#' ? undefined : item.path}
                href={item.path === '#' ? '#' : undefined}
                className={`${
                  isCurrent
                    ? 'bg-green-100 text-green-900'
                    : 'text-gray-600 hover:bg-green-50 hover:text-green-900'
                } group flex items-center px-2 py-2 text-sm font-medium rounded-md transition-colors duration-150`}
              >
                <item.icon
                  className={`${
                    isCurrent ? 'text-green-800' : 'text-gray-400 group-hover:text-green-600'
                  } mr-3 flex-shrink-0 h-6 w-6 transition-colors duration-150`}
                  aria-hidden="true"
                />
                {item.name}
              </Component>
            );
          })}
        </nav>

        {/* Merchant Info */}
        <div className="mx-2 mt-6 mb-4">
          <div className="bg-gray-100 rounded-[13px] p-4">
            <div className="space-y-2">
              <div className="flex flex-col">
                <span className="text-sm font-medium text-gray-700">Merchant:</span>
                <span className="text-sm text-gray-900">Bergistus sp.z.o.o.</span>
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-medium text-gray-700">Website URL:</span>
                <a 
                  href="https://strynix.io/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-sm text-green-600 hover:text-green-800 truncate"
                >
                  www.artifium.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-6">
          <div className="px-2 space-y-1">
            {secondaryNavigation.map((item) => (
              <a
                key={item.name}
                href={item.path}
                className="group flex items-center px-2 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              >
                <item.icon
                  className="text-gray-400 group-hover:text-gray-500 mr-3 flex-shrink-0 h-5 w-5"
                  aria-hidden="true"
                />
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;