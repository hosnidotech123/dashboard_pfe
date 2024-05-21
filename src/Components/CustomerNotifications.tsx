import React, { useState } from 'react'
import { useAppSelector } from '../features/store';
import { Customer } from '../model/Customer.model';
import Pagination from './Pagination';
import { Notification } from '../model/Notification.model';


function CustomerNotifications() {

  let notifications = useAppSelector(state => state.notification.notifications)
  let user = useAppSelector(state => state.user.user)
  let myNotifications = notifications?.filter(n => n.customerId === user?.id) as Notification[]


  let [currentPage, setCurrentPage] = useState(1)

  let [postPerPage, setPostPerPage] = useState(6)



  let totalPages: number = Math.ceil(myNotifications.length / postPerPage)

  let lastPostIndex: number = currentPage * postPerPage
  let firstPostIndex: number = lastPostIndex - postPerPage
  let currentNotifications = myNotifications.slice(firstPostIndex, lastPostIndex)


  return (


    <div className='mt-[16px]'>

      <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={totalPages} />

      <div className='mt-[40px]'>
        <table className={`table  bg-gradient-to-r  from-myskyblue to-blue-700`}>
          {/* head */}
          <thead>
            <tr>
            
              <th className='text-white'>Id</th>
              <th className='text-white'>Content</th>
              <th className='text-white'>Created At</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {currentNotifications && currentNotifications.map((notif, index) => {
              return (
                <tr key={notif.id}>
                {/* <th>
                  <label>
                    <input type="checkbox" className="checkbox border-solid border-2 border-white " />
                  </label>
                </th> */}
                <td className='px-[20px]'>
                  <div className="flex items-center gap-3">
                    
                    <div>
                      <div className="font-bold text-white">{notif?.id}</div>
                     
                    </div>
                  </div>
                </td>
                <td className="font-bold text-white">
                  {notif.content}
                </td>
                <td className="font-bold text-white">{notif.createdAt}</td>
              
              </tr>

                
              )
            })}



          </tbody>


        </table>
      </div>

    </div>




  )
}

export default CustomerNotifications