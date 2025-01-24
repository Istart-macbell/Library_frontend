import React from "react";
import Sidebar from "./Sidebar.jsx";
import Navbar from "./Navbar.jsx";
import DashboardBlock from "./DashboardBlock.jsx";
import Graph from "./Graph.jsx";

const Admin = () => {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        <div className="flex-1 p-4 flex flex-col gap-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <DashboardBlock title="Staff" count={50} />
            <DashboardBlock title="Student User" count={200} />
            <DashboardBlock title="Books" count={500} />
            <DashboardBlock title="Total Income" count={2200} />
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
