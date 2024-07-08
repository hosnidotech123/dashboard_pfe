
import Pagination from './Pagination'

import React, { useEffect, useState } from 'react'
import { Claim } from "../model/Claim.model"
import { Customer } from "../model/Customer.model"


import { FaCircle, FaRegTrashAlt } from "react-icons/fa";
// import { addDonestatistics, addPendingstatistics } from '../features/statisticsSlice';
import { useAppSelector } from '../features/store';
import axios from 'axios';
import { GrUpdate } from 'react-icons/gr';
import { useNavigate } from 'react-router-dom';




function CustomerClaims() {


  let claims = useAppSelector(state => state.claim.claims) as Claim[]

  let user = useAppSelector(state => state.user.user)

  let claimsperClient = claims.filter(c => c.customerId === user?.id) as Claim[]


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





 let deleteClaimById=(id:number)=>{
    if(confirm("are you sure you wanna delete this claim")){
      axios.delete(`http://localhost:8082/claims/${id}`)
  .then(response => {
    console.log(`Deleted post with ID ${id}`);
  })
  .catch(error => {
    console.error(error);
  });
    }

    else{
      return null
    }
 }

 let navigate=useNavigate()

  useEffect(()=>{

  },[claims])








  return (
    <div className='mt-[16px]'>

      <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={totalPages} />

      <div className='mt-[40px]'>
        <table className={`table  bg-gradient-to-r  from-myskyblue to-blue-700`}>
          {/* head */}

          <thead>
            <tr >
              <th className='text-white px-[20px]'>Id</th>
              <th className='text-white'>Content</th>
              <th className='text-white'>Created At</th>
              <th className='text-white'>Status</th>
              <th className='text-white'>Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}

            {currentClaims && currentClaims.map((claim, index) => {
              // let client = getClientById(claim) as Client
              let customer = claim.customer

              return (
                <tr key={index}>
                  <td className='px-[20px]'>
                    <div className="flex items-center gap-3">
                      <div className="font-bold text-white">{claim?.id}</div>
                    </div>
                  </td>
                  <td className="font-bold text-white">
                    {claim?.content}
                  </td>

                  <td className="font-bold text-white">{claim?.createdAt}</td>

                  <th >
                    <span className={`badge w-[105px] h-[30px]  ${claim?.status === "pending" ? "text-yellow-400" : "text-green-400"} `}>
                      <span className={`pr-1 ${claim?.status === "pending" ? "text-yellow-400" : "text-green-400"} `}>
                        <FaCircle />
                      </span>
                      {claim?.status==="done"?"résolue":"en attente"}
                    </span>

                  </th>


                  <td className='grid grid-flow-col'>
                    <button className='bg-gradient-to-r from-violet-500 to-fuchsia-500 w-[35px] h-[35px] rounded-md flex justify-center items-center' onClick={() => navigate(`myclaims/${claim?.id}`)}>
                      <GrUpdate className='cursor-pointer text-white' />
                    </button>

                    <button className='bg-red-500 w-[35px] h-[35px] rounded-md flex justify-center items-center' onClick={() => deleteClaimById(claim?.id)}>
                      <FaRegTrashAlt className='cursor-pointer text-white' />
                      
                    </button>
                    
                  </td>
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