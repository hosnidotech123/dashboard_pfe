import React from 'react'
import { useAppSelector } from '../features/store'

function Cards() {



  let done:number =useAppSelector(state=>state.statistics.done)
  let pending:number =useAppSelector(state=>state.statistics.pending) 

  return (
    <div>
        <div style={{columns: 4}}>
                    <div>
                        <div style={{width: "100%" }} className="stats shadow bg-white drop-shadow-lg">
                            <div className="stat">
                            <div className="stat-figure text-secondary">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
                            </div>
                              <div className="stat-title text-black font-bold">New Clients</div>
                              <div className="stat-value text-black">+40</div>
                              <div className="stat-desc text-black">Jan 1st - Feb 1st</div>
                            </div>
                          </div>
                          
                    </div>
                    <div>
                        <div style={{width: "100%" }} className="stats shadow bg-white drop-shadow-lg">
                            <div className="stat">
                              <div className="stat-figure text-secondary">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                              </div>
                              <div className="stat-title text-black font-bold">Notifications</div>
                              <div className="stat-value text-black">30</div>
                              <div className="stat-desc text-black">Jan 1st - Feb 1st</div>
                            </div>
                          </div>
                          
                    </div>
                    <div >
                        <div style={{width: "100%" }}  className="stats shadow bg-white drop-shadow-lg">
                            <div className="stat">
                            <div className="stat-figure text-secondary">
                                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                            </div>
                              <div className="stat-title text-black font-bold">Claims</div>
                              <div className="stat-value text-black">{pending+done}</div>
                              <div className="stat-desc text-black">Jan 1st - Feb 1st</div>
                            </div>
                          </div>
                          
                    </div>
                    <div >
                        <div style={{width: "100%" }}  className="stats shadow bg-white drop-shadow-lg">
                            <div className="stat">
                            <div className="stat-figure text-secondary">
                                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                            </div>
                              <div className="stat-title text-black font-bold">Visitors</div>
                              <div className="stat-value text-black">+10k</div>
                              <div className="stat-desc text-black">Jan 1st - Feb 1st</div>
                            </div>
                          </div>
                          
                    </div>
                    

    
    </div>
    </div>
  )
}

export default Cards