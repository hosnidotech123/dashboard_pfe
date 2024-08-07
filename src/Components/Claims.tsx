
import Pagination from './Pagination'

import React, { useState } from 'react'
import { Claim } from "../model/Claim.model"
import { Customer } from "../model/Customer.model"


import { FaCircle } from "react-icons/fa";
// import { addDonestatistics, addPendingstatistics } from '../features/statisticsSlice';
import { useAppSelector } from '../features/store';
import axios from 'axios';




function Claims() {




  // const [customers, setClients] = useState<Client[]>([])

  let claims=useAppSelector(state=>state.claim.claims) as Claim[]
  // let clients=useAppSelector(state=>state.client.clients) as Client []

  // const [claims, setClaims] = useState<Claim[]>([])


  

  // let dispatch=useAppDispatch()



  // let done: number = 0
  // let pending: number = 0

  // for (let claim of claims) {
  //   if (claim.status === "done") {
  //     done = done + 1
  //   }
  //   else {
  //     pending = pending + 1
  //   }
  // }


  // dispatch(addDonestatistics({d:done}))
  // dispatch(addPendingstatistics({p:pending}))







  let [currentPage, setCurrentPage] = useState(1)

  let [postPerPage, setPostPerPage] = useState(6)




  // function getClients(): void {
  //   axios.get("http://localhost:3000/clients")
  //     .then((response) => {
  //       setClients(response.data)


  //     })
  //     .catch((err) => {
  //       console.log(err)
  //     }
  //     )
  // }

  // function getClaims(): void {
  //   axios.get(`http://localhost:3000/claims`)
  //     .then((response) => {
  //       setClaims(response.data)




  //     })
  //     .catch((err) => {
  //       console.log(err)
  //     }
  //     )

  // }


  // function getClientById(claim:Claim):Client{
  //   return clients.find(client => client.id === claim.clientId) as Client
  // }






  let lastPostIndex: number = currentPage * postPerPage
  let firstPostIndex: number = lastPostIndex - postPerPage
  let currentClaims: Claim[] = claims.slice(firstPostIndex, lastPostIndex)


  let totalPages: number = Math.ceil(claims.length / postPerPage)


  const updateClaimState = (id: number, newStatus: string) => {
    const confirmationMessage = `Êtes-vous sûr que le problème est résolu ?`;

    if (window.confirm(confirmationMessage)) {
        newStatus = newStatus === "pending" ? "done" : "pending";

        axios.patch(`http://localhost:8082/claims/${id}`, { "status": newStatus })
            .then(response => {
                console.log("Claim status updated successfully:", response.data);
                // Optionally, you can handle the updated claim data here
            })
            .catch(err => {
                console.error("Error updating claim status:", err);
            });
    }
};












  return (
    <div className='mt-[16px]'>
      
      <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={totalPages} />

      <div className='mt-[40px]'>
        <table className={`table  bg-gradient-to-r  from-myskyblue to-blue-700`}>
          {/* head */}

          <thead>
            <tr >
              <th className='text-white px-[20px]'>Creator</th>
              <th className='text-white'>Réclamation</th>
              <th className='text-white'>Contact</th>
              <th className='text-white'>Statut</th>
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

                  <td className="font-bold text-white">{customer?.contact}</td>

                  <th >
                    <span onClick={() => updateClaimState(claim.id,claim.status)} className={`badge w-[105px] h-[30px] cursor-pointer ${claim.status.toLowerCase() === "pending" ? "text-yellow-400" : "text-green-400"} `}>
                      <span className={`pr-1 ${claim.status.toLowerCase() === "pending" ? "text-yellow-400" : "text-green-400"} `}>
                        <FaCircle />
                      </span>
                      {claim.status.toLowerCase()==="done"?"résolue":"en attente"}
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

export default Claims