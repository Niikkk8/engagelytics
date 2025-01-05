"use client";

import { postData } from '@/svgData';
import React, { useState } from 'react';
import { PieChart, Pie, Cell, Legend, Tooltip } from 'recharts';

const sampleData = postData.posts;

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#FF6699'];

const PieChartComponent = () => {
  const [selectedType, setSelectedType] = useState(['reel','carousel','static']);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const getClusteredData = (key) => {
    const clusteredData = selectedType.map((type) => {
      const totalValue = sampleData
        .filter((post) => post.post_type.toLowerCase() === type)
        .reduce((acc, post) => acc + (post[key] || 0), 0);

      return {
        name: type.charAt(0).toUpperCase() + type.slice(1),
        value: totalValue,
      };
    });

    return clusteredData;
  };

  const handleCheckboxChange = (value) => {
    setSelectedType((prev) =>
      prev.includes(value) ? prev.filter((t) => t !== value) : [...prev, value]
    );
  };

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700 mb-10">
      {/* Dropdown for Post Types */}
      <div className="flex items-center p-4 pb-6">
        <h2 className="text-gray-300 text-lg font-bold mb-0">Post Type:</h2>
        <div className="relative mb-0 ml-4">
          <button
            className="bg-gray-700 text-gray-300 p-2 rounded-lg focus:outline-none"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            Selected: {selectedType.join(', ')}
          </button>
          {dropdownOpen && (
            <div className="absolute z-10 bg-gray-900 rounded-lg shadow-lg mt-2">
              {['reel', 'carousel', 'static'].map((type) => (
                <label key={type} className="flex items-center p-2 hover:bg-gray-700 cursor-pointer">
                  <input
                    type="checkbox"
                    value={type}
                    checked={selectedType.includes(type)}
                    onChange={() => handleCheckboxChange(type)}
                    className="mr-2"
                  />
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </label>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="flex flex-wrap">
        {['likes', 'comments', 'shares', 'reach', 'impressions'].map((metric) => (
          <div key={metric} className="flex flex-col items-center mb-6 w-1/2 md:w-1/3">
            <h3 className="text-lg font-semibold text-white mb-2">{metric.charAt(0).toUpperCase() + metric.slice(1)}</h3>
            <PieChart width={300} height={300}>
              <Pie
                data={getClusteredData(metric)}
                cx="50%"
                cy="50%"
                innerRadius={50}
                outerRadius={70}
                fill="#8884d8"
                dataKey="value"
                label
                animationEasing='ease'
              >
                {getClusteredData(metric).map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PieChartComponent;
