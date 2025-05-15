import React from 'react';
import Card from '../ui/Card';
import Button from '../ui/Button';
import { Plus, Download, RefreshCw, Search, Filter, Settings } from 'lucide-react';

interface QuickActionsCardProps {
  className?: string;
}

const QuickActionsCard: React.FC<QuickActionsCardProps> = ({ className = '' }) => {
  return (
    <Card title="Quick Actions" className={className}>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <Button
          variant="primary"
          size="md"
          fullWidth
          icon={<Plus className="h-4 w-4" />}
        >
          New Payment
        </Button>
        <Button
          variant="outline"
          size="md"
          fullWidth
          icon={<Download className="h-4 w-4" />}
        >
          Export Data
        </Button>
        <Button
          variant="outline"
          size="md"
          fullWidth
          icon={<RefreshCw className="h-4 w-4" />}
        >
          Sync Account
        </Button>
        <Button
          variant="outline"
          size="md"
          fullWidth
          icon={<Search className="h-4 w-4" />}
        >
          Find Transaction
        </Button>
        <Button
          variant="outline"
          size="md"
          fullWidth
          icon={<Filter className="h-4 w-4" />}
        >
          Filter Payments
        </Button>
        <Button
          variant="outline"
          size="md"
          fullWidth
          icon={<Settings className="h-4 w-4" />}
        >
          Settings
        </Button>
      </div>
    </Card>
  );
};

export default QuickActionsCard;