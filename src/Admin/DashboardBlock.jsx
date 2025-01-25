import React from "react";

const DashboardBlock = ({ title, count }) => {
  return (
    <div className="flex justify-center">
      <div className="p-6 border border-gray-300 rounded-lg text-center shadow-md w-64 sm:w-80">
        <h2 className="text-lg sm:text-xl font-bold text-gray-700 mb-4">{title}</h2>
        <p className="text-xl sm:text-2xl font-bold text-blue-600">{count}</p>
      </div>
    </div>
  );
};

export default DashboardBlock;
