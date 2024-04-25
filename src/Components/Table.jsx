import axios from 'axios'
import React, { useState,useEffect } from 'react'

function Table() {



  const [users,setUsers]=useState()

  const getUsers=()=>{
    
  }

   useEffect(()=>{
      getUsers()
  },[])
  



  

  return (
    
    
      <table  className={`table  bg-gradient-to-r  from-myskyblue to-blue-700`}>
            {/* head */}
            <thead>
              <tr>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox border-solid border-2 border-white "/>
                  </label>
                </th>
                <th className='text-white'>Name</th>
                <th className='text-white'>Email</th>
                <th className='text-white'>Contact</th>
                <th className='text-white'>Details</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {users && users.map((user,index)=>{return(

                
                <tr key={user.id}>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox border-solid border-2 border-white " />
                  </label>
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={user.image}  alt="Avatar Tailwind CSS Component" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold text-white">{user.username}</div>
                      <div className="text-sm text-black">{user.company}</div>
                    </div>
                  </div>
                </td>
                <td className="font-bold text-white">
                {user.email}
                </td>
                <td className="font-bold text-white">{user.contact}</td>
                <th>
                <button onClick={()=>alert("id_1")} className="bg-white hover:bg-gray-200 text-[#0080ff] font-bold py-2 px-4 rounded-full">
                    details</button>                
                </th>
              </tr>
              )})}
             
              
              
             
            
              
             
              
            </tbody>
    
            
        </table>
      
  )
}

export default Table