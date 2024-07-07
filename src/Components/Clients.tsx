
import Pagination from './Pagination'


import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { IoAdd, IoEllipseSharp, IoNotificationsSharp } from "react-icons/io5";

import { Customer } from "../model/Customer.model"

import Table from "./Table"
import { useAppSelector } from '../features/store';
import { useNavigate } from 'react-router-dom';



function Clients() {




  // let [clients, setClients] = useState<Client[]>([])

  let customers = useAppSelector(state => state.customer.customers) as Customer[]

  useEffect(() => {
    console.log(customers)
  }, [])



  let [currentPage, setCurrentPage] = useState(1)

  let [postPerPage, setPostPerPage] = useState(6)

  let navigate = useNavigate()




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
  let currentCustomers: Customer[] = customers.slice(firstPostIndex, lastPostIndex)


  let totalPages: number = Math.ceil(customers.length / postPerPage)


  const updateCustomerState = (id: number, status: string) => {
    const confirmationMessage = `Êtes-vous sûr que ?`;

    if (window.confirm(confirmationMessage)) {

      status = status === "true" ? "false" : "true";

      axios.patch(`http://localhost:8081/customers/${id}`, { "isActivated": status })
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
      <div className='flex justify-between'>
        <button onClick={() => navigate('/addclient')} className='bg-blue-500 text-white items-center  px-2 rounded-lg flex flex-row font-bold'><span>Add Client</span><span className='font-bold px-1 translate-y-[-4px] text-[30px]'>+</span></button>
        <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={totalPages} />
        <h1></h1>
      </div>
      <div className='mt-[40px]'>
        <table className={`table  bg-gradient-to-r  from-myskyblue to-blue-700`}>
          {/* head */}
          <thead>
            <tr>
              {/* <th>
                <label>
                  <input type="checkbox" className="checkbox border-solid border-2 border-white " />
                </label>
              </th> */}
              <th className='text-white px-[20px]' >Name</th>
              <th className='text-white'>Email</th>
              <th className='text-white'>Contact</th>
              <th className='text-white'>Status</th>
              <th className='text-white'>Details</th>
              <th className='text-white flex items-center'><IoNotificationsSharp style={{ margin: "5px" }} /> Notify</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {currentCustomers && currentCustomers.map((user, index) => {
              return (


                <tr key={user.id}>
                  {/* <th>
                    <label>
                      <input type="checkbox" className="checkbox border-solid border-2 border-white " />
                    </label>
                  </th> */}
                  <td className='px-[20px]'>
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
                  <td className='cursor-pointer' onClick={() => updateCustomerState(user.id, user?.isActivated)}><span className={`font-bold text-[30px] ${user.isActivated === "true" ? "text-green-400" : "text-red-500"}`}><IoEllipseSharp /></span></td>
                  <th>
                    <button onClick={() => navigate(`${user.id}`)} className="bg-white hover:bg-gray-200 text-[#0080ff] font-bold py-2 px-4 rounded-full">
                      details</button>
                  </th>
                  <th>
                    <button onClick={() => navigate(`notifications/${user.id}`)} className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-2 px-4 rounded-full">
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

export default Clients