import React, { useEffect } from 'react';

import {
  Chart as ChartJS,
  LineElement,
  LineController,
  BarController,
  BarElement,
  Title,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement // Add PointElement
} from 'chart.js';
import { Chart } from 'react-chartjs-2';
import 'tailwindcss/tailwind.css';

// Register all necessary elements
ChartJS.register(BarController,LineController,LineElement, BarElement, Title, Tooltip, Legend, CategoryScale, LinearScale, PointElement);

const Chartcom = () => {
  useEffect(() => {
    // You can add more initialization here if needed
    return () => {
      // Cleanup code if needed
    };
  }, []);

  const buyersData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        type: 'line',
        label: 'Dataset 1',
        backgroundColor: "rgba(99,179,237,0.4)",
        borderColor: "#63b3ed",
        data: [203, 156, 99, 251, 305, 247, 256],
        fill: true,
      },
      {
        type: 'line',
        label: 'Dataset 2',
        backgroundColor: "rgba(198,198,198,0.4)",
        borderColor: "#f7fafc",
        data: [86, 97, 144, 114, 94, 108, 156],
        fill: true,
      }
    ],
  };

  const reviewsData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        type: 'bar',
        label: 'Reviews',
        backgroundColor: "rgba(99,179,237,0.4)",
        borderColor: "#63b3ed",
        data: [203, 156, 99, 251, 305, 247, 256],
      }
    ],
  };

  return (
   
    <div id="dashboard" className="p-6">
            <div className="grid gap-6 mb-8  md:grid-cols-2 lg:grid-cols-2">
        {/* Chart 1: Recent Sales */}
        <div className="bg-white border rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-4">Recent Sales</h3>
          <div className="chart-container">
            <Chart type="line" data={buyersData} />
          </div>
        </div>

        {/* Chart 2: Product Reviews */}
        <div className="bg-white border rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-4">Product Reviews</h3>
          <div className="chart-container">
            <Chart type="bar" data={reviewsData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chartcom;
