
import Pagination from './Pagination'

import React, { useEffect, useState } from 'react'
import { Claim } from "../model/Claim.model"
import { Customer } from "../model/Customer.model"


import { FaCircle } from "react-icons/fa";
// import { addDonestatistics, addPendingstatistics } from '../features/statisticsSlice';
import { useAppSelector } from '../features/store';
import axios from 'axios';




function CustomerClaims() {


  let claims=useAppSelector(state=>state.claim.claims) as Claim[]

  let user=useAppSelector(state=>state.user.user)

  let claimsperClient=claims.filter(c=>c.customerId===user?.id) as Claim[]


  // useEffect(()=>{
  //   console.log(claimsperClient)
  // },[])

  
  
  





  let [currentPage, setCurrentPage] = useState(1)

  let [postPerPage, setPostPerPage] = useState(6)










  let lastPostIndex: number = currentPage * postPerPage
  let firstPostIndex: number = lastPostIndex - postPerPage
  let currentClaims: Claim[] = claimsperClient.slice(firstPostIndex, lastPostIndex)


  let totalPages: number = Math.ceil(claimsperClient.length / postPerPage)


//   const updateClaimState = (id: number, newStatus: string) => {
//     const confirmationMessage = `Êtes-vous sûr que le problème est résolu ?`;

//     if (window.confirm(confirmationMessage)) {
//         newStatus = newStatus === "pending" ? "done" : "pending";

//         axios.patch(`http://localhost:8082/claims/${id}`, { "status": newStatus })
//             .then(response => {
//                 console.log("Claim status updated successfully:", response.data);
//                 // Optionally, you can handle the updated claim data here
//             })
//             .catch(err => {
//                 console.error("Error updating claim status:", err);
//             });
//     }
// };












  return (
    <div className='mt-[16px]'>
      
      <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={totalPages} />

      <div className='mt-[40px]'>
        <table className={`table  bg-gradient-to-r  from-myskyblue to-blue-700`}>
          {/* head */}

          <thead>
            <tr >
              <th className='text-white px-[20px]'>Creator</th>
              <th className='text-white'>Content</th>
              <th className='text-white'>Created At</th>
              <th className='text-white'>Status</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}

            {currentClaims && currentClaims.map((claim, index) => {
              // let client = getClientById(claim) as Client
              let customer=claim.customer

              return (
                <tr key={customer?.id}>
                  <td className='px-[20px]'>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img src={customer?.image} alt="Avatar Tailwind CSS Component" />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold text-white">{customer?.username}</div>
                        <div className="text-sm text-black">{customer?.company}</div>
                      </div>
                    </div>
                  </td>
                  <td className="font-bold text-white">
                    {claim.content}
                  </td>

                  <td className="font-bold text-white">{claim?.createdAt}</td>

                  <th >
                    <span  className={`badge w-[100px] h-[30px]  ${claim.status.toLowerCase() === "pending" ? "text-yellow-400" : "text-green-400"} `}>
                      <span className={`pr-1 ${claim.status.toLowerCase() === "pending" ? "text-yellow-400" : "text-green-400"} `}>
                        <FaCircle />
                      </span>
                      {claim.status.toLowerCase()}
                    </span>

                  </th>
                </tr>
              )
            })}







          </tbody>


        </table>
      </div>

    </div>

  )
}

export default CustomerClaims