import React from "react";

const DashboardBlock = ({ title, count }) => {
  return (
    <div className="flex justify-center w-full">
      <div className="p-6 border border-gray-300 rounded-lg text-center shadow-md w-full max-w-xs sm:max-w-sm md:max-w-md">
        <h2 className="text-lg md:text-xl font-bold text-gray-700 mb-4">{title}</h2>
        <p className="text-xl md:text-2xl font-bold text-blue-600">{count}</p>
      </div>
    </div>
  );
};

export default DashboardBlock;
