import React, { useEffect, useState } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { Claim } from '../model/Claim.model';

// import axios from 'axios';
// import { useAppSelector } from '../features/store';




ChartJS.register(ArcElement, Tooltip, Legend);



export default function Doughnutt({pending,done}) {

  let [claims, setClaims] = useState<Claim[]>([])

  // let done:number=useAppSelector(state=>state.statistics.done)
  // let pending:number=useAppSelector(state=>state.statistics.pending)


// function getClaims(): void {
//   axios.get(`http://localhost:3000/claims`)
//     .then((response) => {
//       setClaims(response.data)
//       // setTotalPages(Math.ceil(response.data.items / postPerPage))

      

//     })
//     .catch((err) => {
//       console.log(err)
//     }
//     )

// }

// useEffect(()=>{
//     getClaims()

//     console.log(done)
//     console.log(pending)
    
  

// },[])









const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Statistiques des réclamations',
    },
  },
};

const data = {
  labels: [ 'Résolue', 'En attente'],
  datasets: [
    {
      label: 'Réclamations',
      data: [done,pending],
      backgroundColor: [
        '#2be28a',
        'rgb(250 204 21)',
      ],
  
      borderWidth: 1,
    },
  ],
};






  return <Doughnut data={data} options={options} />;
}
