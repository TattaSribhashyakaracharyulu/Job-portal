import { useState, useEffect } from 'react';

interface SensorReading {
  time: string;
  value: number;
}

interface SensorData {
  ph: {
    current: number;
    status: 'good' | 'warning' | 'critical';
    history: SensorReading[];
  };
  temperature: {
    current: number;
    status: 'good' | 'warning' | 'critical';
    history: SensorReading[];
  };
  waterLevel: {
    current: number;
    status: 'good' | 'warning' | 'critical';
    history: SensorReading[];
  };
  nutrients: {
    current: number;
    status: 'good' | 'warning' | 'critical';
    history: SensorReading[];
  };
}

export const useSensorData = () => {
  const [data, setData] = useState<SensorData>({
    ph: {
      current: 6.8,
      status: 'good',
      history: []
    },
    temperature: {
      current: 24.5,
      status: 'good',
      history: []
    },
    waterLevel: {
      current: 85,
      status: 'good',
      history: []
    },
    nutrients: {
      current: 420,
      status: 'good',
      history: []
    }
  });

  // Generate initial historical data
  useEffect(() => {
    const generateHistory = (baseValue: number, variance: number, count: number = 12) => {
      const history: SensorReading[] = [];
      const now = new Date();
      
      for (let i = count - 1; i >= 0; i--) {
        const time = new Date(now.getTime() - i * 5 * 60000); // 5-minute intervals
        const variation = (Math.random() - 0.5) * variance;
        const value = Math.max(0, baseValue + variation);
        
        history.push({
          time: time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          value: Math.round(value * 10) / 10
        });
      }
      
      return history;
    };

    setData({
      ph: {
        current: 6.8,
        status: 'good',
        history: generateHistory(6.8, 0.4)
      },
      temperature: {
        current: 24.5,
        status: 'good',
        history: generateHistory(24.5, 2)
      },
      waterLevel: {
        current: 85,
        status: 'good',
        history: generateHistory(85, 5)
      },
      nutrients: {
        current: 420,
        status: 'good',
        history: generateHistory(420, 30)
      }
    });
  }, []);

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setData(prevData => {
        const updateSensor = (sensor: typeof prevData.ph, baseValue: number, variance: number) => {
          const variation = (Math.random() - 0.5) * variance;
          const newValue = Math.max(0, baseValue + variation);
          const roundedValue = Math.round(newValue * 10) / 10;
          
          // Determine status based on value ranges
          let status: 'good' | 'warning' | 'critical' = 'good';
          if (sensor === prevData.ph) {
            if (roundedValue < 6.0 || roundedValue > 8.0) status = 'critical';
            else if (roundedValue < 6.5 || roundedValue > 7.5) status = 'warning';
          } else if (sensor === prevData.temperature) {
            if (roundedValue < 20 || roundedValue > 30) status = 'critical';
            else if (roundedValue < 22 || roundedValue > 28) status = 'warning';
          } else if (sensor === prevData.waterLevel) {
            if (roundedValue < 70) status = 'critical';
            else if (roundedValue < 80) status = 'warning';
          } else if (sensor === prevData.nutrients) {
            if (roundedValue < 300 || roundedValue > 600) status = 'critical';
            else if (roundedValue < 350 || roundedValue > 500) status = 'warning';
          }
          
          const newHistory = [...sensor.history];
          newHistory.shift(); // Remove oldest
          newHistory.push({
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            value: roundedValue
          });
          
          return {
            current: roundedValue,
            status,
            history: newHistory
          };
        };

        return {
          ph: updateSensor(prevData.ph, 6.8, 0.4),
          temperature: updateSensor(prevData.temperature, 24.5, 2),
          waterLevel: updateSensor(prevData.waterLevel, 85, 5),
          nutrients: updateSensor(prevData.nutrients, 420, 30)
        };
      });
    }, 30000); // Update every 30 seconds

    return () => clearInterval(interval);
  }, []);

  return data;
};