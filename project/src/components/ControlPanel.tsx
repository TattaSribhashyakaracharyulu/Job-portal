import React, { useState } from 'react';
import { Power, Settings, Zap, Droplets, Sun, Thermometer } from 'lucide-react';

interface ControlItem {
  id: string;
  name: string;
  icon: React.ElementType;
  status: boolean;
  description: string;
  color: string;
}

const ControlPanel: React.FC = () => {
  const [controls, setControls] = useState<ControlItem[]>([
    {
      id: 'pump',
      name: 'Water Pump',
      icon: Droplets,
      status: true,
      description: 'Circulating water between tanks',
      color: 'blue'
    },
    {
      id: 'feeder',
      name: 'Auto Feeder',
      icon: Zap,
      status: true,
      description: 'Scheduled feeding active',
      color: 'yellow'
    },
    {
      id: 'lights',
      name: 'Grow Lights',
      icon: Sun,
      status: true,
      description: 'LED grow lights on',
      color: 'orange'
    },
    {
      id: 'heater',
      name: 'Water Heater',
      icon: Thermometer,
      status: false,
      description: 'Temperature regulation',
      color: 'red'
    }
  ]);

  const toggleControl = (id: string) => {
    setControls(controls.map(control => 
      control.id === id ? { ...control, status: !control.status } : control
    ));
  };

  const getColorClasses = (color: string, active: boolean) => {
    const baseClasses = active ? 'border-2' : 'border border-gray-200';
    
    switch (color) {
      case 'blue':
        return active 
          ? `${baseClasses} border-blue-500 bg-blue-50 text-blue-700`
          : `${baseClasses} bg-white text-gray-400`;
      case 'yellow':
        return active 
          ? `${baseClasses} border-yellow-500 bg-yellow-50 text-yellow-700`
          : `${baseClasses} bg-white text-gray-400`;
      case 'orange':
        return active 
          ? `${baseClasses} border-orange-500 bg-orange-50 text-orange-700`
          : `${baseClasses} bg-white text-gray-400`;
      case 'red':
        return active 
          ? `${baseClasses} border-red-500 bg-red-50 text-red-700`
          : `${baseClasses} bg-white text-gray-400`;
      default:
        return `${baseClasses} bg-white text-gray-400`;
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-900">Control Panel</h2>
        <button className="flex items-center space-x-2 px-3 py-1 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
          <Settings className="h-4 w-4" />
          <span className="text-sm">Settings</span>
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {controls.map((control) => {
          const Icon = control.icon;
          return (
            <div
              key={control.id}
              className={`rounded-lg p-4 transition-all duration-200 hover:shadow-md cursor-pointer ${getColorClasses(control.color, control.status)}`}
              onClick={() => toggleControl(control.id)}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <Icon className="h-6 w-6" />
                  <span className="font-medium">{control.name}</span>
                </div>
                
                <div className="relative">
                  <div className={`w-12 h-6 rounded-full transition-colors ${
                    control.status ? 'bg-green-500' : 'bg-gray-300'
                  }`}>
                    <div className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform ${
                      control.status ? 'translate-x-6' : 'translate-x-0'
                    }`}></div>
                  </div>
                </div>
              </div>
              
              <p className="text-sm opacity-70">{control.description}</p>
              
              <div className="mt-3 flex items-center space-x-2">
                <Power className={`h-3 w-3 ${control.status ? 'text-green-500' : 'text-gray-400'}`} />
                <span className="text-xs">
                  {control.status ? 'Active' : 'Inactive'}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-6 pt-4 border-t border-gray-200">
        <div className="flex items-center justify-between text-sm text-gray-500">
          <span>System Status</span>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span>All systems operational</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ControlPanel;