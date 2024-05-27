
import Pagination from './Pagination'


import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Notification } from '../model/Notification.model';

import { Customer } from "../model/Customer.model"
import { useAppSelector } from '../features/store';
import { useNavigate } from 'react-router-dom';
import { IoNotificationsSharp } from 'react-icons/io5';
import { GrUpdate } from 'react-icons/gr';
import { FaRegTrashAlt } from 'react-icons/fa';







function Notifications() {




  // let [clients, setClients] = useState<Client[]>([])

  let customers=useAppSelector(state=>state.customer.customers) as Customer[]







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

  let notifications=useAppSelector(state=>state.notification.notifications) 
  
  let lastPostIndex: number = currentPage * postPerPage
  let firstPostIndex: number = lastPostIndex - postPerPage
  let currentNotifications: Notification [] = notifications?.slice(firstPostIndex, lastPostIndex) as unknown as Notification [] 


  let totalPages: number = Math.ceil((notifications as unknown as Notification []).length / postPerPage)

  




  useEffect(() => {
    // getClients()






  }, [notifications,customers])





  let deleteNotifById=(id:number)=>{
    if(confirm("are you sure you wanna delete this claim")){
      axios.delete(`http://localhost:8083/notifications/${id}`)
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





  return (
    <div className='mt-[16px]'>

      <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={totalPages} />

      <div className='mt-[40px]'>
        <table className={`table  bg-gradient-to-r  from-myskyblue to-blue-700`}>
          {/* head */}
          <thead>
            <tr>
             
              <th className='text-white'>Name</th>
              <th className='text-white'>Email</th>
              <th className='text-white'>Contact</th>
              <th className='text-white flex items-center'><IoNotificationsSharp style={{ marginRight: "5px" }} />Notification</th>
              <th className='text-white'>Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {currentNotifications && currentNotifications.map((notif, index) => {
              return (


                <tr key={notif?.id}>
                 
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img src={`${customers.find(c=>c.id===notif.customerId)?.image}`} alt="Avatar Tailwind CSS Component" />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold text-white">{customers.find(c=>c.id===notif.customerId)?.username}</div>
                        <div className="text-sm text-black">{customers.find(c=>c.id===notif.customerId)?.company}</div>
                      </div>
                    </div>
                  </td>
                  <td className="font-bold text-white">
                    {customers.find(c=>c.id===notif.customerId)?.email}
                  </td>
                  <td className="font-bold text-white">{customers.find(c=>c.id===notif.customerId)?.contact}</td>
                 <td className='text-white font-bold'>{notif.content}</td>
                 <td className='grid grid-flow-col'>
                    <button className='bg-gradient-to-r from-violet-500 to-fuchsia-500 w-[35px] h-[35px] rounded-md flex justify-center items-center' onClick={() => alert(notif.id)}>
                      <GrUpdate className='cursor-pointer text-white' />
                    </button>

                    <button className='bg-red-500 w-[35px] h-[35px] rounded-md flex justify-center items-center' onClick={() => deleteNotifById(notif?.id)}>
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

export default Notifications