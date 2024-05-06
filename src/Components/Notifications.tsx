
import Pagination from './Pagination'


import axios from 'axios';
import React, { useEffect, useState } from 'react'

import { Client } from "../model/Client.model"
import { useAppSelector } from '../features/store';





function Notification() {




  // let [clients, setClients] = useState<Client[]>([])

  let clients=useAppSelector(state=>state.client.clients) as Client[]







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


  let lastPostIndex: number = currentPage * postPerPage
  let firstPostIndex: number = lastPostIndex - postPerPage
  let currentClients: Client[] = clients.slice(firstPostIndex, lastPostIndex)


  let totalPages: number = Math.ceil(clients.length / postPerPage)




  useEffect(() => {
    // getClients()






  }, [])











  return (
    <div className='mt-[16px]'>

      <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={totalPages} />

      <div className='mt-[40px]'>
        <table className={`table  bg-gradient-to-r  from-myskyblue to-blue-700`}>
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox border-solid border-2 border-white " />
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
            {currentClients && currentClients.map((user, index) => {
              return (


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
                          <img src={user.image} alt="Avatar Tailwind CSS Component" />
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
                    <button onClick={() => alert(user.id)} className="bg-white hover:bg-gray-200 text-[#0080ff] font-bold py-2 px-4 rounded-full">
                      Send</button>
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

export default Notification