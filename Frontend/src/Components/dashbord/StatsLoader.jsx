// src/SkeletonLoader.js

import React from 'react';

const StatsLoader = () => {
  return (
    <div className="flex min-h-screen bg-gray-100 animate-pulse">
      {/* Left Menu */}
      <div className="w-1/4 p-4 space-y-4 bg-gray-200">
        <div className="h-6 bg-gray-300 rounded w-3/4"></div>
        <div className="h-6 bg-gray-300 rounded w-2/4"></div>
        <div className="h-6 bg-gray-300 rounded w-3/4"></div>
        <div className="h-6 bg-gray-300 rounded w-2/4"></div>
        <div className="h-6 bg-gray-300 rounded w-3/4"></div>
        <div className="h-6 bg-gray-300 rounded w-2/4"></div>
      </div>

      {/* Right Content */}
      <div className="w-3/4 p-6 space-y-6">
        {/* Top Stats */}
        <div className="grid grid-cols-4 gap-4">
          <div className="h-24 bg-gray-300 rounded"></div>
          <div className="h-24 bg-gray-300 rounded"></div>
          <div className="h-24 bg-gray-300 rounded"></div>
          <div className="h-24 bg-gray-300 rounded"></div>
        </div>

        {/* Chart and Inventory */}
        <div className="flex space-x-4 w-full">
          {/* Chart */}
          <div className="w-4/5 h-80 bg-gray-300 rounded"></div>  

          {/* Inventory Section */}
          <div className="w-1/5 space-y-4"> 
            <div className="h-10 bg-gray-300 rounded"></div>
            <div className="h-10 bg-gray-300 rounded"></div>
            <div className="h-10 bg-gray-300 rounded"></div>
            <div className="h-10 bg-gray-300 rounded"></div>
            <div className="h-10 bg-gray-300 rounded"></div>
            <div className="h-10 bg-gray-300 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StatsLoader;
