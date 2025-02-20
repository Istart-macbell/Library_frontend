import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Graph = () => {
  const data = {
    labels: ["Books", "Borrowed", "Available"],
    datasets: [
      {
        label: "Books",
        data: [500, 120, 380],
        backgroundColor: ["#4caf50", "#f44336", "#2196f3"],
        borderColor: ["#388e3c", "#d32f2f", "#1976d2"],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Books Statistics",
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Categories",
        },
      },
      y: {
        title: {
          display: true,
          text: "Count",
        },
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="w-full h-64 sm:h-80 lg:h-[400px] xl:h-[500px] p-4">
      <Bar data={data} options={options} />
    </div>
  );
};

export default Graph;
