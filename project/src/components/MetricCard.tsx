import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface MetricCardProps {
  title: string;
  value: string;
  unit: string;
  icon: LucideIcon;
  status: 'good' | 'warning' | 'critical';
  trend?: 'up' | 'down' | 'stable';
  change?: string;
}

const MetricCard: React.FC<MetricCardProps> = ({
  title,
  value,
  unit,
  icon: Icon,
  status,
  trend,
  change
}) => {
  const getStatusColor = () => {
    switch (status) {
      case 'good':
        return 'text-green-600 bg-green-50 border-green-200';
      case 'warning':
        return 'text-yellow-600 bg-yellow-50 border-yellow-200';
      case 'critical':
        return 'text-red-600 bg-red-50 border-red-200';
    }
  };

  const getTrendIcon = () => {
    if (trend === 'up') return '↗';
    if (trend === 'down') return '↘';
    return '→';
  };

  return (
    <div className={`rounded-xl border-2 p-6 transition-all duration-200 hover:shadow-lg ${getStatusColor()}`}>
      <div className="flex items-center justify-between mb-4">
        <Icon className="h-8 w-8" />
        <div className={`px-2 py-1 rounded-full text-xs font-medium ${
          status === 'good' ? 'bg-green-100 text-green-800' :
          status === 'warning' ? 'bg-yellow-100 text-yellow-800' :
          'bg-red-100 text-red-800'
        }`}>
          {status.toUpperCase()}
        </div>
      </div>
      
      <div className="space-y-2">
        <h3 className="text-sm font-medium opacity-70">{title}</h3>
        <div className="flex items-baseline space-x-2">
          <span className="text-3xl font-bold">{value}</span>
          <span className="text-sm opacity-70">{unit}</span>
        </div>
        
        {change && (
          <div className="flex items-center space-x-1 text-sm">
            <span>{getTrendIcon()}</span>
            <span className="opacity-70">{change} from last hour</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default MetricCard;