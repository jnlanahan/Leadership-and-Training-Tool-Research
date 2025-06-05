import React from 'react';
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend, Tooltip, ResponsiveContainer } from 'recharts';
import { Satisfaction } from '@/lib/reportData';

interface SatisfactionChartProps {
  data: Satisfaction[];
}

const metrics = [
  { key: 'overall', label: 'Overall' },
  { key: 'easeOfUse', label: 'Ease of Use' },
  { key: 'support', label: 'Support' },
  { key: 'value', label: 'Value' },
];

const SatisfactionChart: React.FC<SatisfactionChartProps> = ({ data }) => {
  // Transform data for radar chart: one entry per metric, each with platform values
  const chartData = metrics.map(metric => {
    const entry: any = { metric: metric.label };
    data.forEach(platform => {
      entry[platform.platform] = platform[metric.key as keyof Satisfaction];
    });
    return entry;
  });

  return (
    <div className="w-full h-96">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart data={chartData}>
          <PolarGrid />
          <PolarAngleAxis dataKey="metric" />
          <PolarRadiusAxis angle={30} domain={[0, 5]} />
          {data.map((platform, idx) => (
            <Radar
              key={platform.platform}
              name={platform.platform}
              dataKey={platform.platform}
              stroke={`hsl(${idx * 60}, 70%, 50%)`}
              fill={`hsl(${idx * 60}, 70%, 50%)`}
              fillOpacity={0.2}
            />
          ))}
          <Legend />
          <Tooltip />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SatisfactionChart; 