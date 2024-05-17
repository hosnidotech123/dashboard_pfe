import React from 'react'
import { useAppSelector } from '../features/store';


function CustomerNotifications() {

  let notifications=useAppSelector(state=>state.notification.notifications)
  let user=useAppSelector(state=>state.user.user)
  let myNotifications=notifications?.filter(n=>n.customerId===user?.id)


  return (
  

<div className="overflow-x-auto">
  <table  className="min-w-full divide-y-2 mt-3 divide-gray-200 bg-white text-sm">
    <thead >
      <tr>
        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-left">Id</th>
        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-left">Content</th>
        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-left">Created At</th>
      </tr>
    </thead>

    <tbody className="divide-y divide-gray-200">
      {myNotifications?.map(n=>{return(
        <tr key={n.id}>
        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">{n.id}</td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700">{n.content}</td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700">{n.createdAt}</td>
       
      </tr>
      )})}

     
    </tbody>
  </table>
</div>
  )
}

export default CustomerNotifications