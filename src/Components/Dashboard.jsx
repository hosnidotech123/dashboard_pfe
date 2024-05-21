import React from 'react'
import Cards from './Cards'
import LineChart from "./LineChart"
import SmallTable from './SmallTable'
import { useAppSelector } from '../features/store'
import CustomerClaims from './CustomerClaims'

function Dashboard() {

  let user = useAppSelector(state => state.user.user)




  return (
    <>
      {user.roles.includes("admin") ? <div style={{ height: "100%", display: "flex", flexDirection: "column" }}>
        <Cards />
        <div style={{ width: "100%", columns: 2, marginTop: "30px" }}>
          <LineChart />
          <div className='bg-[#0080ff] overflow-y-hidden rounded-[10px] shadow-2xl  shadow-blue-500/50 pt-[20px]  w-[100%] h-[100%]' >
            <h1 className='text-white text-2xl font-bold h-[10%] mb-2 pl-[15px]'>Recent Clients</h1>
            <div className='h-[90%] mb-[-3px]' >
              <SmallTable />
            </div>

          </div>
        </div>

      </div> : <CustomerClaims/>}
    </>
  )
}

export default Dashboard