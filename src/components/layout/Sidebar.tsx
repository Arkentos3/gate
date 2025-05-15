import React from 'react';
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
  const navigation = [
    { name: 'Dashboard', icon: Home, current: true },
    { name: 'Transactions', icon: CreditCard, current: false },
    { name: 'Analytics', icon: BarChart3, current: false },
    { name: 'Customers', icon: Users, current: false },
    { name: 'Activity', icon: Activity, current: false },
    { name: 'System Status', icon: AlertTriangle, current: false },
  ];

  const secondaryNavigation = [
    { name: 'Settings', icon: Settings },
    { name: 'Help', icon: HelpCircle },
    { name: 'Logout', icon: LogOut },
  ];

  return (
    <div className="flex flex-col flex-1">
      <div className="flex items-center h-16 flex-shrink-0 px-4 bg-green-800">
        <div className="flex items-center space-x-2">
          <CreditCard className="h-8 w-8 text-white" />
          <span className="text-white font-semibold text-lg">PayDash</span>
        </div>
      </div>
      <div className="mt-5 flex-1 flex flex-col overflow-y-auto">
        <nav className="flex-1 px-2 space-y-1">
          {navigation.map((item) => (
            <a
              key={item.name}
              href="#"
              className={`${
                item.current
                  ? 'bg-green-100 text-green-900'
                  : 'text-gray-600 hover:bg-green-50 hover:text-green-900'
              } group flex items-center px-2 py-2 text-sm font-medium rounded-md transition-colors duration-150`}
            >
              <item.icon
                className={`${
                  item.current ? 'text-green-800' : 'text-gray-400 group-hover:text-green-600'
                } mr-3 flex-shrink-0 h-6 w-6 transition-colors duration-150`}
                aria-hidden="true"
              />
              {item.name}
            </a>
          ))}
        </nav>
        <div className="mt-6 pt-6">
          <div className="px-2 space-y-1">
            {secondaryNavigation.map((item) => (
              <a
                key={item.name}
                href="#"
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