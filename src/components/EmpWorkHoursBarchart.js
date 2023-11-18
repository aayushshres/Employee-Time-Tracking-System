import React from "react";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip);

export default function EmpWorkHoursBarchart() {
  const data = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri"],
    datasets: [
      {
        label: "MTWTF",
        data: [7, 6, 8, 9, 7],
        backgroundColor: "rgba(90, 191, 231, 0.658)",
        borderWidth: 1,
        barThickness: 30,
      },
    ],
  };
  const options = {
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          drawOnChartArea: false,
        },
      },
      x: {
        grid: {
          drawOnChartArea: false,
          offset: false
        },
      },
    },
  };
  return (
    <div className="empWorkHoursBarchart">
      <Bar data={data} options={options}></Bar>
    </div>
  );
}
