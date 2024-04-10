import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: false,
      text: 'Chart.js Line Chart',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const data2 = labels.map(() => Math.floor(Math.random() * 100));
const data = {
  labels,
  datasets: [
    {
      label: 'Customers',
      data: data2,
      borderColor: '#0080ff',
      backgroundColor: 'white',
      
    },
   
  ],
};

export default function LineChart() {
  return (
    <div >
      <Line height={700} width={950} options={options} data={data} />
    </div>
  )
}
