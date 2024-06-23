import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ['Linkedin', 'Facebook', 'Google', 'Instagram'],
  datasets: [
    {
      label: 'Traffic',
      data: [12, 19, 3, 5],
      backgroundColor: [

        '#0080ff',
        '#4267B2',
        '#DB4437',
        '#a358e8',
        
      ],
      borderColor: [
        'rgba(0, 0, 0, 0)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        '#a358e8',
       
      ],
      borderWidth: 1,
    },
  ],
};

export default function PieChart() {
  return <Pie data={data} />;
}
