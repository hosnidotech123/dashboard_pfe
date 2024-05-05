import React, { useEffect } from 'react'


import BarChart from "./BarChart"
import LineChartt from "./LineChartt"
import PieChart from './PieChart'
import Doughnutt from "./Doughnutt"
import { useAppDispatch, useAppSelector } from '../features/store'
import { getClaims } from '../features/claimSlice'



function Faq() {


  let done:number =useAppSelector(state=>state.statistics.done)
  let pending:number =useAppSelector(state=>state.statistics.pending)

  let disptach=useAppDispatch()

  let claims=useAppSelector(state=>state.claim.claims)



  useEffect(()=>{

    console.log(claims)
    disptach(getClaims())

  },[])



  

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
            
            <Doughnutt pending={pending} done={done}/>
          </div>
          
      </div>
      


      </div>


      


  )
}

export default Faq