import React, { useEffect, useState } from 'react';
import Card from '../ui/Card';
import Badge from '../ui/Badge';
import ProgressBar from '../ui/ProgressBar';
import { CheckCircle, AlertTriangle, XCircle } from 'lucide-react';
import { getSystemStatus } from '../../utils/data';

interface SystemStatusCardProps {
  className?: string;
}

const SystemStatusCard: React.FC<SystemStatusCardProps> = ({ className = '' }) => {
  const [systems, setSystems] = useState<any[]>([]);

  useEffect(() => {
    const loadData = async () => {
      const data = await getSystemStatus();
      setSystems(data);
    };
    loadData();
  }, []);

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'operational':
        return (
          <Badge variant="success" className="flex items-center">
            <CheckCircle className="h-3 w-3 mr-1" /> Operational
          </Badge>
        );
      case 'degraded':
        return (
          <Badge variant="warning" className="flex items-center">
            <AlertTriangle className="h-3 w-3 mr-1" /> Degraded
          </Badge>
        );
      case 'down':
        return (
          <Badge variant="error" className="flex items-center">
            <XCircle className="h-3 w-3 mr-1" /> Down
          </Badge>
        );
      default:
        return null;
    }
  };

  return (
    <Card
      title="System Status"
      subtitle="Real-time status of all systems"
      className={className}
    >
      <div className="space-y-4">
        {systems.map((system) => (
          <div key={system.name} className="flex items-center justify-between">
            <div className="flex flex-col">
              <span className="text-sm font-medium">{system.name}</span>
              <ProgressBar
                value={system.uptime}
                max={100}
                size="sm"
                color={
                  system.uptime > 99
                    ? 'success'
                    : system.uptime > 95
                    ? 'warning'
                    : 'error'
                }
                className="w-32 mt-1"
              />
            </div>
            <div className="flex items-center">
              <span className="text-sm text-gray-500 mr-2">{system.uptime}%</span>
              {getStatusBadge(system.status)}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default SystemStatusCard;