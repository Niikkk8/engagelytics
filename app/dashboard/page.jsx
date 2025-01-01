'use client'

import React, { useState } from 'react';
import { BarChart2, TrendingUp, Users, AlertCircle } from 'lucide-react';
import { statePaths } from '@/svgData';

const StateMap = ({ data }) => {
  const [tooltip, setTooltip] = useState({ visible: false, content: '', x: 0, y: 0 });

  const getColor = (value) => {
    const maxValue = Math.max(...Object.values(data));
    const intensity = value ? (value / maxValue) * 0.8 : 0;
    return `rgba(80, 24, 196, ${intensity + 0.1})`;
  };

  const handleMouseEnter = (e, state) => {
    setTooltip({
      visible: true,
      content: `${state}: ${data[state] || 0} posts`,
      x: e.clientX,
      y: e.clientY
    });
  };

  const handleMouseLeave = () => {
    setTooltip({ ...tooltip, visible: false });
  };

  return (
    <div className="relative">
      <div className="p-6 bg-gray-800 rounded-xl border border-gray-700">
        <h2 className="text-xl font-bold text-white mb-4">Engagement Distribution</h2>
        <div className="relative">
          <svg viewBox="0 0 612 696" className="w-full h-full">
            {Object.entries(statePaths).map(([state, path]) => (
              <path
                key={state}
                d={path}
                fill={getColor(data[state])}
                stroke="rgb(55, 65, 81)"
                strokeWidth="0.5"
                onMouseEnter={(e) => handleMouseEnter(e, state)}
                onMouseLeave={handleMouseLeave}
                className="transition-colors duration-200 hover:opacity-80 cursor-pointer"
              />
            ))}
          </svg>
          {tooltip.visible && (
            <p
              className="absolute z-10 bottom-0 right-0 bg-gray-900 text-white px-3 py-1 rounded-lg text-sm min-w-fit"
              // style={{ left: tooltip.x, top: tooltip.y }}
            >
              {tooltip.content}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

const MetricCard = ({ title, value, icon: Icon, trend }) => (
  <div className="p-6 bg-gray-800 rounded-xl border border-gray-700">
    <div className="flex justify-between items-start">
      <div>
        <p className="text-gray-400 text-sm">{title}</p>
        <h3 className="text-2xl font-bold text-white mt-1">{value}</h3>
      </div>
      <div className="p-2 bg-gray-700/50 rounded-lg">
        <Icon className="w-5 h-5 text-teal-500" />
      </div>
    </div>
    {trend && (
      <div className="flex items-center mt-4">
        <TrendingUp className="w-4 h-4 text-teal-500 mr-1" />
        <span className="text-sm text-teal-500">{trend}% increase</span>
      </div>
    )}
  </div>
);

export default function Dashboard() {
  const [stateData] = useState({
    'IN-AP': 1500, // Andhra Pradesh
    'IN-AR': 200,  // Arunachal Pradesh
    'IN-AS': 1200, // Assam
    'IN-BR': 1800, // Bihar
    'IN-CT': 900,  // Chhattisgarh
    'IN-GA': 500,  // Goa
    'IN-GJ': 1300, // Gujarat
    'IN-HR': 1100, // Haryana
    'IN-HP': 600,  // Himachal Pradesh
    'IN-JK': 700,  // Jammu & Kashmir
    'IN-JH': 1000, // Jharkhand
    'IN-KA': 1600, // Karnataka
    'IN-KL': 1400, // Kerala
    'IN-MP': 2000, // Madhya Pradesh
    'IN-MH': 2500, // Maharashtra
    'IN-MN': 300,  // Manipur
    'IN-ML': 400,  // Meghalaya
    'IN-MZ': 250,  // Mizoram
    'IN-NL': 350,  // Nagaland
    'IN-OR': 1500, // Odisha
    'IN-PB': 1200, // Punjab
    'IN-RJ': 1900, // Rajasthan
    'IN-SK': 150,  // Sikkim
    'IN-TN': 1700, // Tamil Nadu
    'IN-TG': 1300, // Telangana
    'IN-TR': 600,  // Tripura
    'IN-UP': 3000, // Uttar Pradesh
    'IN-UT': 400,  // Uttarakhand
    'IN-WB': 2200, // West Bengal
    'IN-AN': 250,  // Andaman & Nicobar Islands
    'IN-CH': 350,  // Chandigarh
    'IN-DN': 200,  // Dadra & Nagar Haveli and Daman & Diu
    'IN-DL': 1800, // Delhi
    'IN-LD': 100,  // Lakshadweep
    'IN-PY': 500   // Puducherry
  });
  

  return (
    <div className="min-h-screen bg-gray-900 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Metrics Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          <MetricCard
            title="Total Posts"
            value="12,458"
            icon={BarChart2}
            trend="8.2"
          />
          <MetricCard
            title="Active Users"
            value="2,847"
            icon={Users}
            trend="12.5"
          />
          <MetricCard
            title="Engagement Rate"
            value="24.3%"
            icon={TrendingUp}
            trend="5.7"
          />
          <MetricCard
            title="Alert Status"
            value="Normal"
            icon={AlertCircle}
          />
        </div>

        {/* Map and Analytics */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <StateMap data={stateData} />
          <div className="space-y-6">
            {/* Additional analytics components can go here */}
          </div>
        </div>
      </div>
    </div>
  );
}