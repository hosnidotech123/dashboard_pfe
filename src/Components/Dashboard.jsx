import React from 'react'
import Cards from './Cards'
import LineChart from "./LineChart"

function Dashboard() {
  return (
      <div style={{height:"100%",display:"flex",flexDirection:"column"}}>
        <Cards/>
        <div style={{width:"100%",columns:2,marginTop:"30px"}}>
         <LineChart/>
         <div className='bg-[#0080ff] rounded-[10px] shadow-2xl shadow-blue-500/50 p-[20px]' style={{width:"100%",height:"100%"}}>
              <h1 className='text-white text-2xl font-bold'>Recent claims</h1>
         </div>
        </div>
        
      </div>
  )
}

export default Dashboard