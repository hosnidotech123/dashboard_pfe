import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);


const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Claims statistics',
    },
  },
};

export const data = {
  labels: [ 'Done', 'Pending'],
  datasets: [
    {
      label: 'Claims',
      data: [80,20],
      backgroundColor: [
        '#0080ff',
        'rgb(250 204 21)',
      ],
  
      borderWidth: 1,
    },
  ],
};

export default function Doughnutt() {
  return <Doughnut data={data} options={options} />;
}
