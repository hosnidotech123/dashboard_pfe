import React from 'react'
import { BrowserRouter ,Routes,Route, useNavigate} from 'react-router-dom'
import Dashboard from './Dashboard'
import Clients from './Clients'
import Notifications from './Notifications'
import Claims from './Claims'
import Statistics from './Statistics'
import { TbLogout } from "react-icons/tb";
import { useAppSelector } from '../features/store'



function Main() {

  const navigate=useNavigate()

  let claims=useAppSelector(state=>state.claim.claims)

  const  handleLogOut=()=>{
    alert("Log Out")
  }
  
  return (
    <div className="main" >
      <div className="board" style={{padding: "20px"}}>
          <div className="x_header" >
              <h1 style={{fontSize:30}} className="text-black font-bold">Dashboard</h1>
              <div style={{display: "flex",alignItems: "center"}}>
                  <button onClick={()=>navigate("/notifications")} className="btn btn-ghost btn-circle ">
                      <div className="indicator">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                        <span className="badge badge-xs badge-primary indicator-item">{claims.length}</span>
                      </div>
                    </button>
                    <div  className="avatar online ml-2">
                        <div className="w-10 rounded-full">
                          <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                        </div>
                    </div>
                    <TbLogout onClick={handleLogOut} className='w-[30px] ml-2 h-[30px] cursor-pointer text-black' />

                      
              </div>
          </div>
          
           <div className='h-[100%]' >
              <Routes>
                <Route path='/' element={<Dashboard/>}/>
                <Route path='*' element={<Dashboard/>}/>
                <Route path='/clients' element={<Clients/>}/>
                <Route path='/notifications' element={<Notifications/>}/>
                <Route path='/claims' element={<Claims/>}/>
                <Route path='/statistics' element={<Statistics/>}/>
              </Routes>
            
              </div>
      </div>
      
    
    </div>
    
  )
}

export default Main