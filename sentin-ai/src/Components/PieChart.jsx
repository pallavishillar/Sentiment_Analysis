import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({ data }) => {
  const chartData = {
   //labels: ['Positive', 'Neutral', 'Negative'],
    datasets: [
      {
        //label: 'Sentiment Analysis',
        data: [data.Positive, data.Neutral, data.Negative],
        backgroundColor: ['green', 'yellow', 'red'],
        hoverBackgroundColor: ['#36a2eb', '#ffcd56', '#ff6384'],
      },
    ],
  };

  return (
    <div style={{height: '540px',width: '300px', marginLeft: '140px' }}>
      <Pie data={chartData} />
    </div>
  );
};

export default PieChart;
