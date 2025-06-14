
import React from 'react';
import { ComposedChart, Bar, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { ChartDataPoint } from '../types';

interface ClimographProps {
  data: ChartDataPoint[];
  title?: string;
}

const Climograph: React.FC<ClimographProps> = ({ data, title }) => {
  if (!data || data.length !== 12) {
    return <div className="text-center text-red-500 p-4">Invalid climate data for chart.</div>;
  }
  
  // Find min/max for Y axes to ensure visibility
  const temperatures = data.map(d => d.temperature);
  const precipitations = data.map(d => d.precipitation);

  const minTemp = Math.min(...temperatures);
  const maxTemp = Math.max(...temperatures);
  const maxPrecip = Math.max(...precipitations);

  // Adjust domain to give some padding
  const tempDomain = [Math.floor(minTemp / 5) * 5 - 5, Math.ceil(maxTemp / 5) * 5 + 5];
  const precipDomain = [0, Math.ceil(maxPrecip / 50) * 50 + 50];


  return (
    <div className="bg-white p-4 rounded-lg shadow-lg h-80 md:h-96 w-full">
      {title && <h3 className="text-xl font-semibold mb-4 text-center text-gray-700">{title}</h3>}
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart data={data} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
          <XAxis dataKey="month" tick={{ fontSize: 12, fill: '#333' }} />
          <YAxis 
            yAxisId="left" 
            orientation="left" 
            stroke="#ef4444" 
            label={{ value: 'Temperature (°C)', angle: -90, position: 'insideLeft', fill: '#ef4444', dx: -5 }}
            tick={{ fontSize: 12, fill: '#ef4444' }}
            domain={tempDomain}
            allowDataOverflow={true}
          />
          <YAxis 
            yAxisId="right" 
            orientation="right" 
            stroke="#3b82f6" 
            label={{ value: 'Precipitation (mm)', angle: 90, position: 'insideRight', fill: '#3b82f6', dx: 10 }}
            tick={{ fontSize: 12, fill: '#3b82f6' }}
            domain={precipDomain}
            allowDataOverflow={true}
          />
          <Tooltip
            contentStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.9)', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}
            itemStyle={{ color: '#333' }}
            labelStyle={{ color: '#000', fontWeight: 'bold' }}
          />
          <Legend wrapperStyle={{ paddingTop: '20px' }} />
          <Bar yAxisId="right" dataKey="precipitation" name="Precipitation" fill="#3b82f6" barSize={20} />
          <Line yAxisId="left" type="monotone" dataKey="temperature" name="Temperature" stroke="#ef4444" strokeWidth={2.5} dot={{ r: 4, fill: '#ef4444' }} activeDot={{ r: 6 }} />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Climograph;
    