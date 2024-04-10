import React from 'react'
import { BrowserRouter ,Routes,Route} from 'react-router-dom'
import Dashboard from './Dashboard'
import Clients from './Clients'
import Notifications from './Notifications'
import Claims from './Claims'
import Faq from './Faq'



function Main() {
  return (
    <div className="main">
      <div className="board" style={{padding: "20px"}}>
          <div className="x_header" >
              <h1 style={{fontSize:30}} className="text-black font-bold">Dashboard</h1>
              <div style={{display: "flex",alignItems: "center"}}>
                  <button  className="btn btn-ghost btn-circle ">
                      <div className="indicator">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                        <span className="badge badge-xs badge-primary indicator-item">30</span>
                      </div>
                    </button>
                    <div  className="avatar online ml-2">
                        <div className="w-10 rounded-full">
                          <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                      </div>
              </div>
          </div>
          
          
              <Routes>
                <Route path='/' element={<Dashboard/>}/>
                <Route path='*' element={<Dashboard/>}/>
                <Route path='/clients' element={<Clients/>}/>
                <Route path='/notifications' element={<Notifications/>}/>
                <Route path='/claims' element={<Claims/>}/>
                <Route path='/faq' element={<Faq/>}/>
              </Routes>
          
            
      </div>
      
    
    </div>
    
  )
}

export default Main