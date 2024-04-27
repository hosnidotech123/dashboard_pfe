import React from 'react'


import BarChart from "./BarChart"
import LineChartt from "./LineChartt"
import PieChart from './PieChart'
import Doughnutt from "./Doughnutt"



function Faq() {

  

  return (
    <div   className='w-[100%] h-[100%] flex flex-col' >
      <div  className='h-[50%] flex flex-row'>
          <div className='w-[50%] p-1'>
            <BarChart />
          </div>
          <div className='w-[50%] p-1'>
            <LineChartt/>
          </div>
          
      </div>

      <div  className='h-[50%] flex flex-row'>
          <div className='w-[50%]  flex items-center justify-center'>
             <PieChart/>
          </div>
          <div className='w-[50%]  flex items-center justify-center'>
            <Doughnutt pending={20} done={80}/>
          </div>
          
      </div>
      


      </div>


      


  )
}

export default Faq