import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { FaCircle } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { Client } from '../model/Client.model';
import { Claim } from '../model/Claim.model';



function ClaimTable({ backgroundColor,claims,clients,currentPage }) {

  const navigate=useNavigate()



  const users = [
    {
      id: 1,
      name: "Hart Hagerty",
      company: "Company name",
      email: "user_123@gmail.com",
      contact: "0607080904",
      image: "https://daisyui.com/tailwind-css-component-profile-2@56w.png",
      status:"pending"
    },
    {
      id: 2,
      name: "Hart Hagerty",
      company: "Company name",
      email: "user_123@gmail.com",
      contact: "0607080902",
      image: "https://daisyui.com/tailwind-css-component-profile-2@56w.png",
      status:"pending"
    }, {
      id: 3,
      name: "Hart Hagerty",
      company: "Company name",
      email: "user_123@gmail.com",
      contact: "0607080905",
      image: "https://daisyui.com/tailwind-css-component-profile-2@56w.png",
      status:"done"
    }, {
      id: 4,
      name: "Hart Hagerty",
      company: "Company name",
      email: "user_123@gmail.com",
      contact: "0607080909",
      image: "https://daisyui.com/tailwind-css-component-profile-2@56w.png",
      status:"pending"
    }, {
      id: 5,
      name: "Hart Hagerty",
      company: "Company name",
      email: "user_123@gmail.com",
      contact: "0607080907",
      image: "https://daisyui.com/tailwind-css-component-profile-2@56w.png",
      status:"done"
    }, {
      id: 6,
      name: "Hart Hagerty",
      company: "Company name",
      email: "user_123@gmail.com",
      contact: "0607080901",
      image: "https://daisyui.com/tailwind-css-component-profile-2@56w.png",
      status:"pending"
    },
  ]

  let [claimsItems,setClaimsItems]=useState<Claim[]>([])



   function getClaimById(id:number):Claim|undefined{
      return claimsItems.find(item=>item.id===id)
   }





  



   

 


  return (
      
    <table className={`table  ${backgroundColor}`}>
      {/* head */}
      
      <thead>
        <tr >
          <th>
            <label>
              <input type="checkbox" className="checkbox border-solid border-2 border-white " />
            </label>
          </th>
          <th className='text-white'>Creator</th>
          <th className='text-white'>Content</th>
          <th className='text-white'>Contact</th>
          <th className='text-white'>Status</th>
        </tr>
      </thead>
      <tbody>
        {/* row 1 */}

        {clients && clients.map((user, index) => {
          const {id,username,company,image,contact}=user
          
          return (
            <tr key={id}>
              <th>
                <label>
                  <input type="checkbox" className="checkbox border-solid border-2 border-white " />
                </label>
              </th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={image} alt="Avatar Tailwind CSS Component" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold text-white">{username}</div>
                    <div className="text-sm text-black">{company}</div>
                  </div>
                </div>
              </td>
              <td className="font-bold text-white">
                {getClaimById(id)?.content}
              </td>

              <td className="font-bold text-white">{contact}</td>

              <th >
                <span onClick={()=>alert(getClaimById(id)?.id)} className={`badge w-[100px] h-[30px] cursor-pointer ${getClaimById(id)?.status==="pending"?"text-yellow-400":"text-green-400"} `}>
                  <span className={`pr-1 ${getClaimById(id)?.status==="pending"?"text-yellow-400":"text-green-400"} `}>
                    <FaCircle />
                  </span>
                  {getClaimById(id)?.status}
                </span>

              </th>
            </tr>
          )
        })}







      </tbody>


    </table>

  )
}

export default ClaimTable