import React from 'react';
import { Fish, Sprout, Zap, Droplets } from 'lucide-react';

const SystemOverview: React.FC = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">System Overview</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Fish Tank */}
        <div className="space-y-4">
          <div className="flex items-center space-x-2 text-blue-600 font-medium">
            <Fish className="h-5 w-5" />
            <span>Fish Tank</span>
          </div>
          
          <div className="relative bg-gradient-to-b from-blue-100 to-blue-300 rounded-lg h-48 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-blue-400/30 to-transparent"></div>
            
            {/* Water level indicator */}
            <div className="absolute bottom-0 left-0 right-0 bg-blue-500/20 h-4/5 transition-all duration-1000">
              <div className="absolute top-2 left-0 right-0 h-px bg-white/30 animate-pulse"></div>
            </div>
            
            {/* Fish */}
            <div className="absolute bottom-8 left-4">
              <div className="w-6 h-3 bg-orange-400 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
            </div>
            <div className="absolute bottom-12 right-6">
              <div className="w-5 h-2 bg-yellow-400 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
            </div>
            <div className="absolute bottom-6 left-1/2">
              <div className="w-4 h-2 bg-red-400 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
            </div>
            
            <div className="absolute top-4 left-4 text-xs text-blue-700 font-medium">
              Water Level: 85%
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-3 text-sm">
            <div className="bg-blue-50 rounded-lg p-3">
              <div className="text-blue-600 font-medium">Fish Count</div>
              <div className="text-lg font-bold text-blue-800">24</div>
            </div>
            <div className="bg-blue-50 rounded-lg p-3">
              <div className="text-blue-600 font-medium">Feed Level</div>
              <div className="text-lg font-bold text-blue-800">78%</div>
            </div>
          </div>
        </div>

        {/* Plant Beds */}
        <div className="space-y-4">
          <div className="flex items-center space-x-2 text-green-600 font-medium">
            <Sprout className="h-5 w-5" />
            <span>Plant Beds</span>
          </div>
          
          <div className="relative bg-gradient-to-b from-green-100 to-brown-200 rounded-lg h-48 overflow-hidden">
            {/* Soil */}
            <div className="absolute bottom-0 left-0 right-0 bg-brown-300 h-1/4"></div>
            
            {/* Plants */}
            <div className="absolute bottom-12 left-6">
              <div className="w-1 h-16 bg-green-500 rounded-t-full"></div>
              <div className="absolute -top-2 -left-1 w-3 h-3 bg-green-400 rounded-full"></div>
              <div className="absolute -top-1 -left-2 w-2 h-2 bg-green-500 rounded-full"></div>
            </div>
            
            <div className="absolute bottom-12 left-16">
              <div className="w-1 h-20 bg-green-600 rounded-t-full"></div>
              <div className="absolute -top-3 -left-1 w-4 h-4 bg-green-400 rounded-full"></div>
              <div className="absolute -top-2 -left-2 w-2 h-2 bg-green-500 rounded-full"></div>
            </div>
            
            <div className="absolute bottom-12 right-12">
              <div className="w-1 h-14 bg-green-500 rounded-t-full"></div>
              <div className="absolute -top-2 -left-1 w-3 h-3 bg-green-400 rounded-full"></div>
            </div>
            
            <div className="absolute bottom-12 right-6">
              <div className="w-1 h-18 bg-green-600 rounded-t-full"></div>
              <div className="absolute -top-2 -left-1 w-3 h-3 bg-green-400 rounded-full"></div>
              <div className="absolute -top-1 -left-2 w-2 h-2 bg-green-500 rounded-full"></div>
            </div>
            
            {/* Water flow indicators */}
            <div className="absolute top-4 left-4 flex space-x-1">
              <div className="w-1 h-1 bg-blue-400 rounded-full animate-ping"></div>
              <div className="w-1 h-1 bg-blue-400 rounded-full animate-ping" style={{ animationDelay: '0.2s' }}></div>
              <div className="w-1 h-1 bg-blue-400 rounded-full animate-ping" style={{ animationDelay: '0.4s' }}></div>
            </div>
            
            <div className="absolute top-4 left-4 text-xs text-green-700 font-medium">
              Nutrient Flow Active
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-3 text-sm">
            <div className="bg-green-50 rounded-lg p-3">
              <div className="text-green-600 font-medium">Plants</div>
              <div className="text-lg font-bold text-green-800">18</div>
            </div>
            <div className="bg-green-50 rounded-lg p-3">
              <div className="text-green-600 font-medium">Growth Rate</div>
              <div className="text-lg font-bold text-green-800">+12%</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* System Status Bar */}
      <div className="mt-6 pt-6 border-t border-gray-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm text-gray-600">Water Circulation</span>
            </div>
            <div className="flex items-center space-x-2">
              <Zap className="h-4 w-4 text-yellow-500" />
              <span className="text-sm text-gray-600">Auto Feeder</span>
            </div>
            <div className="flex items-center space-x-2">
              <Droplets className="h-4 w-4 text-blue-500" />
              <span className="text-sm text-gray-600">pH Balancer</span>
            </div>
          </div>
          
          <div className="text-sm text-gray-500">
            Last updated: 2 minutes ago
          </div>
        </div>
      </div>
    </div>
  );
};

export default SystemOverview;