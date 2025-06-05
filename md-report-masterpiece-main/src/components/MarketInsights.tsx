import React from 'react';

// Data models for each section (to be defined in reportData.ts)
export interface EmployeeImpactItem {
  value: string;
  description: string;
  source: string;
}

export interface RetentionImpactItem {
  value: string;
  description: string;
  source: string;
}

export interface CriticalInsightCategory {
  title: string;
  items: { text: string; source: string }[];
}

interface MarketInsightsProps {
  employeeImpact: EmployeeImpactItem[];
  retentionImpact: RetentionImpactItem[];
  criticalInsights: CriticalInsightCategory[];
}

const MarketInsights: React.FC<MarketInsightsProps> = ({ employeeImpact, retentionImpact, criticalInsights }) => (
  <div className="space-y-12">
    {/* Employee Impact Section */}
    <section>
      <h2 className="text-3xl font-bold text-cyan-400 mb-2">Employee Impact</h2>
      <p className="text-lg text-gray-300 mb-8">How leadership quality affects workforce engagement and retention</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {employeeImpact.map((item, idx) => (
          <div key={idx} className="bg-[#2a2545] rounded-xl p-8 text-center shadow-md">
            <div className="text-4xl font-bold text-purple-200 mb-2">{item.value}</div>
            <div className="text-base text-gray-200 mb-4">{item.description}</div>
            <div className="inline-block bg-purple-800 text-purple-200 px-4 py-1 rounded-full text-xs font-semibold">{item.source}</div>
          </div>
        ))}
      </div>
    </section>

    {/* Retention & Development Impact Section */}
    <section>
      <h3 className="text-2xl font-bold text-cyan-400 mb-4">Retention & Development Impact</h3>
      <div className="space-y-4">
        {retentionImpact.map((item, idx) => (
          <div key={idx} className="flex items-center justify-between bg-[#23203a] rounded-xl p-6">
            <span className="text-2xl font-bold text-green-300">{item.value}</span>
            <span className="text-base text-gray-200 flex-1 mx-6">{item.description}</span>
            <span className="bg-green-800 text-green-200 px-4 py-1 rounded-full text-xs font-semibold">{item.source}</span>
          </div>
        ))}
      </div>
    </section>

    {/* Critical Insights Section */}
    <section>
      <h2 className="text-3xl font-bold text-cyan-400 mb-2">Critical Insights</h2>
      <p className="text-lg text-gray-300 mb-8">Key findings organized by impact category - sources linked below</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {criticalInsights.map((cat, idx) => (
          <div key={idx} className="bg-[#23203a] rounded-xl p-6 shadow-md">
            <h4 className="text-xl font-semibold text-green-300 mb-4">{cat.title}</h4>
            <ul className="space-y-4">
              {cat.items.map((item, i) => (
                <li key={i} className="flex items-center justify-between bg-[#18162a] rounded-lg p-4">
                  <span className="text-gray-200">{item.text}</span>
                  <span className="bg-emerald-800 text-emerald-200 px-3 py-1 rounded-full text-xs font-semibold ml-4">{item.source}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  </div>
);

export default MarketInsights; 