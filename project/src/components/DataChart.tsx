import React from 'react';
import { TrendingUp } from 'lucide-react';

interface DataPoint {
  time: string;
  value: number;
}

interface DataChartProps {
  title: string;
  data: DataPoint[];
  color: 'blue' | 'green' | 'yellow' | 'red';
  unit: string;
}

const DataChart: React.FC<DataChartProps> = ({ title, data, color, unit }) => {
  const maxValue = Math.max(...data.map(d => d.value));
  const minValue = Math.min(...data.map(d => d.value));
  const range = maxValue - minValue || 1;

  const getColorClasses = () => {
    switch (color) {
      case 'blue':
        return {
          stroke: 'stroke-blue-500',
          fill: 'fill-blue-500/10',
          dot: 'fill-blue-500'
        };
      case 'green':
        return {
          stroke: 'stroke-green-500',
          fill: 'fill-green-500/10',
          dot: 'fill-green-500'
        };
      case 'yellow':
        return {
          stroke: 'stroke-yellow-500',
          fill: 'fill-yellow-500/10',
          dot: 'fill-yellow-500'
        };
      case 'red':
        return {
          stroke: 'stroke-red-500',
          fill: 'fill-red-500/10',
          dot: 'fill-red-500'
        };
    }
  };

  const colors = getColorClasses();

  const createPath = () => {
    const width = 300;
    const height = 100;
    const padding = 10;
    
    const points = data.map((point, index) => {
      const x = padding + (index / (data.length - 1)) * (width - 2 * padding);
      const y = padding + (1 - (point.value - minValue) / range) * (height - 2 * padding);
      return `${x},${y}`;
    });

    const pathData = `M ${points.join(' L ')}`;
    const areaData = `${pathData} L ${width - padding},${height - padding} L ${padding},${height - padding} Z`;

    return { pathData, areaData, points: points.map(p => p.split(',').map(Number)) };
  };

  const { pathData, areaData, points } = createPath();

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <TrendingUp className="h-5 w-5 text-gray-400" />
      </div>

      <div className="mb-4">
        <div className="text-2xl font-bold text-gray-900">
          {data[data.length - 1]?.value}{unit}
        </div>
        <div className="text-sm text-gray-500">Current reading</div>
      </div>

      <div className="h-32 mb-4">
        <svg viewBox="0 0 300 100" className="w-full h-full">
          {/* Area fill */}
          <path
            d={areaData}
            className={`${colors.fill} transition-all duration-300`}
          />
          
          {/* Line */}
          <path
            d={pathData}
            className={`${colors.stroke} fill-none stroke-2 transition-all duration-300`}
          />
          
          {/* Data points */}
          {points.map((point, index) => (
            <circle
              key={index}
              cx={point[0]}
              cy={point[1]}
              r="3"
              className={`${colors.dot} transition-all duration-300 hover:r-4 cursor-pointer`}
            />
          ))}
        </svg>
      </div>

      <div className="flex justify-between text-xs text-gray-500">
        <span>{data[0]?.time}</span>
        <span>{data[data.length - 1]?.time}</span>
      </div>
    </div>
  );
};

export default DataChart;