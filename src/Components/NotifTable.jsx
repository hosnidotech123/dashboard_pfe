import React from 'react'

function NotifTable({backgroundColor}) {
  return (
    
      <table  className={`table  ${backgroundColor}`}>
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
                <th className='text-white'>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox border-solid border-2 border-white " />
                  </label>
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src="https://daisyui.com/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold text-white">Hart Hagerty</div>
                      <div className="text-sm text-black">Company name</div>
                    </div>
                  </div>
                </td>
                <td className="font-bold text-white">
                 user_123@gmail.com
                </td>
                
                <td className="font-bold text-white">0607080905</td>
                
                <th>
                <button onClick={()=>alert("id_1")} class="bg-white hover:bg-gray-200 text-[#0080ff] font-bold py-2 px-4 rounded-full">
                    Send</button>                
                </th>
              </tr>
              <tr>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox border-solid border-2 border-white " />
                  </label>
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src="https://daisyui.com/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold text-white">Hart Hagerty</div>
                      <div className="text-sm text-black">Company name</div>
                    </div>
                  </div>
                </td>
                <td className="font-bold text-white">
                 user_123@gmail.com
                 
                </td>
                <td className="font-bold text-white">0607080905</td>
                <th>
                <button onClick={()=>alert("ed")} class="bg-white hover:bg-gray-200 text-[#0080ff] font-bold py-2 px-4 rounded-full">
                    Send</button>                
                </th>
              </tr>

              <tr>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox border-solid border-2 border-white " />
                  </label>
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src="https://daisyui.com/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold text-white">Hart Hagerty</div>
                      <div className="text-sm text-black">Company name</div>
                    </div>
                  </div>
                </td>
                <td className="font-bold text-white">
                 user_123@gmail.com
                 
                </td>
                <td className="font-bold text-white">0607080905</td>
                <th>
                <button onClick={()=>alert("ed")} class="bg-white hover:bg-gray-200 text-[#0080ff] font-bold py-2 px-4 rounded-full">
                    Send</button>                
                </th>
              </tr>
              <tr>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox border-solid border-2 border-white " />
                  </label>
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src="https://daisyui.com/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold text-white">Hart Hagerty</div>
                      <div className="text-sm text-black">Company name</div>
                    </div>
                  </div>
                </td>
                <td className="font-bold text-white">
                 user_123@gmail.com
                 
                </td>
                <td className="font-bold text-white">0607080905</td>
                <th>
                <button onClick={()=>alert("ed")} class="bg-white hover:bg-gray-200 text-[#0080ff] font-bold py-2 px-4 rounded-full">
                    Send</button>                
                </th>
              </tr>
              <tr>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox border-solid border-2 border-white " />
                  </label>
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src="https://daisyui.com/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold text-white">Hart Hagerty</div>
                      <div className="text-sm text-black">Company name</div>
                    </div>
                  </div>
                </td>
                <td className="font-bold text-white">
                 user_123@gmail.com
                 
                </td>
                <td className="font-bold text-white">0607080905</td>
                <th>
                <button onClick={()=>alert("ed")} class="bg-white hover:bg-gray-200 text-[#0080ff] font-bold py-2 px-4 rounded-full">
                    Send</button>                
                </th>
              </tr>
              <tr>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox border-solid border-2 border-white " />
                  </label>
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src="https://daisyui.com/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold text-white">Hart Hagerty</div>
                      <div className="text-sm text-black">Company name</div>
                    </div>
                  </div>
                </td>
                <td className="font-bold text-white">
                 user_123@gmail.com
                 
                </td>
                <td className="font-bold text-white">0607080905</td>
                <th>
                <button onClick={()=>alert("ed")} class="bg-white hover:bg-gray-200 text-[#0080ff] font-bold py-2 px-4 rounded-full">
                    Send</button>                
                </th>
              </tr>
              
              
             
            
              
             
              
            </tbody>
    
            
        </table>
      
  )
}

export default NotifTable