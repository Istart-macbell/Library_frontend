import React from 'react';
import { Line } from 'react-chartjs-2';

const GrowthGraph = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April'],
    datasets: [
      {
        label: 'Growth',
        data: [30, 40, 50, 70],
        borderColor: '#4caf50',
        fill: false,
      },
    ],
  };

  return <Line data={data} />;
};

export default GrowthGraph;
