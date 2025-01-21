import React from 'react';
import Sidebar from './Sidebar.jsx';
import Navbar from './Navbar.jsx';
import DashboardBlock from './DashboardBlock.jsx';
import PieChart from './PieChart.jsx';
import GrowthGraph from './GrowthGraph.jsx';
import './Admin.css';

const Admin = () => {
  return (
    <div className="app">
      <Navbar />
      <div className="dashboard">
        <Sidebar />
        <div className="content">
          <div className="dashboard-blocks">
            <DashboardBlock title="Staff" count={50} />
            <DashboardBlock title="User" count={200} />
          </div>
          <div className="charts">
            <PieChart />
            <GrowthGraph />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
