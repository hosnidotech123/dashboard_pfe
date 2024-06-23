import React from 'react'
import { BrowserRouter ,Routes,Route, useNavigate} from 'react-router-dom'
import Dashboard from './Dashboard'
import Clients from './Clients'
import Notifications from './Notifications'
import Claims from './Claims'
import Statistics from './Statistics'
import { TbLogout } from "react-icons/tb";
import { useAppSelector } from '../features/store'
import ClientDetails from './ClientDetails'
import SendClaim from './SendClaim'
import SendNotification from './SendNotification'
import CustomerNotifications from './CustomerNotifications'
import UpdateClaim from './UpdateClaim'
import UpdateNotification from './UpdateNotification'

import adminP from '../assets/admin.png'



function Main() {

  const navigate=useNavigate()

  let claims=useAppSelector(state=>state.claim.claims)

  let user=useAppSelector(state=>state.user.user)

  let notifications=useAppSelector(state=>state.notification.notifications)

  let notificationsperCustomer=notifications.filter(n=>n.customerId===user.id)

  // let customers=useAppSelector(state=>state.customer.customers)

  // let customerbyID=customers.find(c=>c.id===user.id)

  let navigationByRole=()=>{
    if(user.roles.includes("admin")){
      navigate("/claims")
    }
    else{
      navigate("/mynotifications")
    }
  }

  const  handleLogOut=()=>{
    alert("Log Out")
  }
  
  return (
    <div className="main" >
      <div className="board" style={{padding: "20px"}}>
          <div className="x_header" >
              <h1 style={{fontSize:30}} className="text-black font-bold">Dashboard</h1>
              <div style={{display: "flex",alignItems: "center"}}>
                  <button onClick={()=>navigationByRole()} className="btn btn-ghost btn-circle ">
                      <div className="indicator">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                        <span className="badge badge-xs badge-primary indicator-item">{user.roles.includes("admin")?claims.length:notificationsperCustomer.length}</span>
                      </div>
                    </button>
                    <div  className="avatar online ml-2">
                        <div className="w-10 rounded-full">
                          <img src={adminP} />
                        </div>
                    </div>
                    <h2 className='mx-2 text-black font-bold'>hello, User !</h2>
                    <TbLogout onClick={handleLogOut} className='w-[30px] ml-2 h-[30px] cursor-pointer text-black' />

                      
              </div>
          </div>
          
           <div className='h-[100%]' >
              <Routes>
                <Route path='/'  element={<Dashboard/>}/>
                <Route path='*' element={<Dashboard/>}/>
                <Route path='/clients' element={<Clients/>}/>
                <Route path='/notifications' element={<Notifications/>}/>
                <Route path='/notifications/:notifId' element={<UpdateNotification/>}/>
                <Route path='/claims' element={<Claims/>}/>
                <Route path='/statistics' element={<Statistics/>}/>
                <Route path='/clients/:customerId' element={<ClientDetails/>} />
                <Route path='/sendclaim' element={<SendClaim/>}/>
                <Route path='clients/notifications/:customerId' element={<SendNotification/>}/>
                <Route path='mynotifications' element={<CustomerNotifications/>}/>
                <Route path='myclaims/:claimId' element={<UpdateClaim/>}/>
                
              </Routes>
            
              </div>
      </div>
      
    
    </div>
    
  )
}

export default Main