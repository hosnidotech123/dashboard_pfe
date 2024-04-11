import React from 'react'
import Cards from './Cards'
import LineChart from "./LineChart"
import SmallTable from './SmallTable'

function Dashboard() {
  return (
      <div style={{height:"100%",display:"flex",flexDirection:"column"}}>
        <Cards/>
        <div style={{width:"100%",columns:2,marginTop:"30px"}}>
         <LineChart/>
         <div  className='bg-[#0080ff] overflow-y-hidden rounded-[10px] shadow-2xl  shadow-blue-500/50 pt-[20px]  w-[100%] h-[100%]' >
              <h1  className='text-white text-2xl font-bold h-[10%] mb-2 pl-[15px]'>Recent Notifications</h1>
              <div className='h-[90%] mb-[-3px]' >
                <SmallTable/>
              </div>
              
         </div>
        </div>
        
      </div>
  )
}

export default Dashboard