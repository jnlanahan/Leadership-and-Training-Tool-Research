import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { PricingTier } from '@/lib/reportData';

interface PricingChartProps {
  data: PricingTier[];
}

const PricingChart: React.FC<PricingChartProps> = ({ data }) => (
  <div className="w-full h-96">
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 40 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="platform" angle={-30} textAnchor="end" interval={0} height={60} />
        <YAxis />
        <Tooltip />
        <Bar dataKey="price" fill="#6366F1" />
      </BarChart>
    </ResponsiveContainer>
  </div>
);

export default PricingChart; 