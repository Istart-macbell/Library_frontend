import React from "react";
import { FaRupeeSign, FaUserTie } from "react-icons/fa";
import { PiStudent } from "react-icons/pi";
import { TbBooks } from "react-icons/tb";


const DashboardBlock = ({ icon, title, count }) => {
  const icons={
    staff:<FaUserTie />,
    studentUser:<PiStudent />,
    books:<TbBooks />,
    totalIncome:<FaRupeeSign />
  }
  return (
    <div className="flex justify-center w-full">
      <div className="p-6 border border-gray-300 rounded-lg text-center shadow-md w-full max-w-xs sm:max-w-sm md:max-w-md">
        <div className="flex items-center justify-center w-full text-4xl">
            {icons[icon]}
        </div>
        
        <h2 className="text-lg md:text-xl font-bold text-gray-700 mb-4">{title}</h2>
        <p className="text-xl md:text-2xl font-bold text-blue-600">{count}</p>
      </div>
    </div>
  );
};

export default DashboardBlock;
