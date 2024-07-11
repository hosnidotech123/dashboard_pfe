import React from 'react'
import Logo from "../assets/psps.png"
import { MdAdminPanelSettings } from 'react-icons/md'

function LoginPage() {
  return (
    <div className='h-[100%] w-[100%]  grid grid-cols-2'>
      <div className='h-[100%] w-[100%] bg-black'><img className='h-[582px] w-[547px]' src={Logo} alt="" /></div>
      <div className='h-[100%] w-[100%] flex justify-center'>
        <div className="flex justify-center items-center">
          <div className="h-[500px] w-[400px] bg-purple-800 rounded-xl flex flex-col justify-center items-center">
            <span className='text-white text-[90px]'><MdAdminPanelSettings /></span>
            <h1 className="font-bold text-white mb-7 text-[40px]">Log in</h1>
            <input required className="m-2 h-10 rounded-md p-2 bg-white text-black" type="text" placeholder="Username or Email"/>
              <input required className="m-2 mb-8 h-10 rounded-md p-2 bg-white text-black" type="password" placeholder="Password"/>
                <button className="text-white bg-blue-700 w-[200px] rounded-md h-10" type="submit">Log in</button>
              </div>
          </div>


        </div>

      </div>
      )
}

      export default LoginPage