import React from 'react';
import { Pie } from 'react-chartjs-2';
import '../Style/Card2.css';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({ data }) => {
  const chartData = {
    datasets: [
      {
        data: [data.Positive, data.Neutral, data.Negative],
        backgroundColor: ['#2E8B57', '#FFD700', '#E2252B'],
        hoverBackgroundColor: ['#36a2eb', '#ffcd56', '#ff6384'],
      },
    ],
  };

  return (
    <div className='chart'><Pie data={chartData} />
    </div>
  );
};

export default PieChart;
