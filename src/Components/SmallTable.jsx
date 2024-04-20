import React from 'react'


function SmallTable() {
  return (
    <div >
        <div style={{overflowX:"hidden"}} className="overflow-x-auto bg-[#0080ff]">
          <table className="table w-[100%] h-[100%]" >
            {/* head */}
            <thead>
              <tr>
                <th className='text-white'>Name</th>
                <th className='text-white'>Email</th>
                <th className='text-white'>Contact</th>
                <th className='text-white'>Details</th>
              </tr>
            </thead>
            <tbody >
              {/* row 1 */}
              <tr >
               
                <td >
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src="https://daisyui.com/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold text-white">Hart Hagerty</div>
                    </div>
                  </div>
                </td>
                <td className="font-bold text-white">
                  user_123@gmail.com
                 
                </td>
                <td className="font-bold text-white">0607080905</td>
                <th>
                <button onClick={()=>alert("ed")} className="bg-white hover:bg-gray-200 text-[#0080ff] font-bold py-2 px-2 rounded-full">
                    details</button>                
                </th>
              </tr>
              <tr >
               
                <td >
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src="https://daisyui.com/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold text-white">Hart Hagerty</div>
                    </div>
                  </div>
                </td>
                <td className="font-bold text-white">
                  user_123@gmail.com
                 
                </td>
                <td className="font-bold text-white">0607080905</td>
                <th>
                <button onClick={()=>alert("ed")} className="bg-white hover:bg-gray-200 text-[#0080ff] font-bold py-2 px-2 rounded-full">
                    details</button>                
                </th>
              </tr>
              <tr >
               
                <td >
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src="https://daisyui.com/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold text-white">Hart Hagerty</div>
                    </div>
                  </div>
                </td>
                <td className="font-bold text-white">
                  user_123@gmail.com
                 
                </td>
                <td className="font-bold text-white">0607080905</td>
                <th>
                <button onClick={()=>alert("ed")} className="bg-white hover:bg-gray-200 text-[#0080ff] font-bold py-2 px-2 rounded-full">
                    details</button>                
                </th>
              </tr>
              <tr >
               
                <td >
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src="https://daisyui.com/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold text-white">Hart Hagerty</div>
                    </div>
                  </div>
                </td>
                <td className="font-bold text-white">
                  user_123@gmail.com
                 
                </td>
                <td className="font-bold text-white">0607080905</td>
                <th>
                <button onClick={()=>alert("ed")} className="bg-white hover:bg-gray-200 text-[#0080ff] font-bold py-2 px-2 rounded-full">
                    details</button>                
                </th>
              </tr>
              
              
              
              
              
             
      
            </tbody>
    
            
          </table>
        </div>
    </div>
  )
}

export default SmallTable