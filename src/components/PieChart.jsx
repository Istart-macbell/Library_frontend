import React, { useEffect, useRef } from 'react';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

const PieChart = () => {
  const canvasRef = useRef(null);
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = canvasRef.current.getContext('2d');
    chartRef.current = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ['Staff', 'User'],
        datasets: [
          {
            data: [50, 200],
            backgroundColor: ['#ff6384', '#36a2eb'],
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
      },
    });
    return () => {
      chartRef.current.destroy();
    };
  }, []);

  return <canvas ref={canvasRef} />;
};

export default PieChart;
