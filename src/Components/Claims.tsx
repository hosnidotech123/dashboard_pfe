
import Pagination from './Pagination'


import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Claim } from "../model/Claim.model"
import { Client } from "../model/Client.model"


import { FaCircle } from "react-icons/fa";



function Claims() {




  let [clients, setClients] = useState<Client[]>([])

  let [claims, setClaims] = useState<Claim[]>([])





  let [currentPage, setCurrentPage] = useState(1)

  let [postPerPage, setPostPerPage] = useState(6)




  function getClients(): void {
    axios.get("http://localhost:3000/clients")
      .then((response) => {
        setClients(response.data)


      })
      .catch((err) => {
        console.log(err)
      }
      )
  }

  function getClaims(): void {
    axios.get(`http://localhost:3000/claims`)
      .then((response) => {
        setClaims(response.data)
        // setTotalPages(Math.ceil(response.data.items / postPerPage))


      })
      .catch((err) => {
        console.log(err)
      }
      )

  }

  let lastPostIndex: number = currentPage * postPerPage
  let firstPostIndex: number = lastPostIndex - postPerPage
  let currentClaims: Claim[] = claims.slice(firstPostIndex, lastPostIndex)


  let totalPages: number = Math.ceil(claims.length / postPerPage)




  useEffect(() => {
    getClients()

    getClaims()




  }, [])





  





  return (
    <div className='mt-[16px]'>

      <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={totalPages} />
      
      <div className='mt-[40px]'>
        <table className={`table  bg-blue-500`}>
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

            {clients && clients.map((client, index) => {
              const { id, username, company, image, contact } = client

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
                    {currentClaims.find(claim=>claim.clientId===id)?.content}
                  </td>

                  <td className="font-bold text-white">{contact}</td>

                  <th >
                    <span onClick={() => alert(currentClaims.find(claim=>claim.clientId===id)?.id)} className={`badge w-[100px] h-[30px] cursor-pointer ${currentClaims.find(claim=>claim.clientId===id)?.status === "pending" ? "text-yellow-400" : "text-green-400"} `}>
                      <span className={`pr-1 ${currentClaims.find(claim=>claim.clientId===id)?.status === "pending" ? "text-yellow-400" : "text-green-400"} `}>
                        <FaCircle />
                      </span>
                      {currentClaims.find(claim=>claim.clientId===id)?.status}
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