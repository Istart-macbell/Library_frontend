import React from "react";
import Sidebar from "./Sidebar.jsx";
import Navbar from "./Navbar.jsx";
import DashboardBlock from "./DashboardBlock.jsx";
import Graph from "./Graph.jsx";

const Admin = () => {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex flex-1">
        <Sidebar />
        <div className="flex-1 p-4 flex flex-col gap-6 mt-[12vh] lg:mt-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <DashboardBlock icon={"staff"} title="Staff" count={50} />
            <DashboardBlock icon={"studentUser"} title="Student User" count={200} />
            <DashboardBlock icon={"books"} title="Books" count={500} />
            <DashboardBlock icon={"totalIncome"} title="Total Income" count={2200} />
          </div>
          <div className="flex-1 flex justify-center items-center bg-gray-100 rounded-lg shadow-md p-6">
            <Graph />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
