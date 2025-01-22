import React from 'react';
import './DashboardBlock.css';

const DashboardBlock = ({ title, count }) => {
  return (
    <div className="dashboard">
      <div className="dashboard-block">
      <h2>{title}</h2>
      <p>{count}</p>
      </div>
    </div>
  );
};

export default DashboardBlock;
