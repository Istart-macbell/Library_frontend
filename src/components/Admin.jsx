import React from 'react';
import Sidebar from './Sidebar.jsx';
import Navbar from './Navbar.jsx';
import DashboardBlock from './DashboardBlock.jsx';
import './Admin.css';
import Graph from './Graph.jsx';

const Admin = () => {
  return (
    <div className="app">
      <Navbar />
      <div className="dashboard">
        <Sidebar />
        <div className="content">
          <div className="dashboard-blocks">
            <DashboardBlock title="Staff" count={50} />
            <DashboardBlock title="Student User" count={200} />
            <DashboardBlock title="Books" count={500} />
            <DashboardBlock title="Total Income" count={2200} />
          </div>
          <div className="charts">
            <Graph />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
