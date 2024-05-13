import React, { useEffect, useState } from 'react'
import { Customer } from "../model/Customer.model"
import axios from 'axios';
import { useAppSelector } from '../features/store';


function SmallTable() {

  // let [clients, setClients] = useState<Client[]>([])


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

  let customers=useAppSelector(state=>state.customer.customers) as Customer []

  
  useEffect(()=>{
      // getClients()
  },[])


  let latestCustomers: Customer[] = customers.slice(-4)




  return (
    <div >
      <div style={{ overflowX: "hidden" }} className="overflow-x-auto bg-[#0080ff]">
        <table className="table w-[100%] h-[100%]" >
          {/* head */}
          <thead>
            <tr>
              <th className='text-white'>Name</th>
              <th className='text-white'>Email</th>
              <th className='text-white'>Contact</th>
              <th className='text-white'>Details</th>
            </tr>
          </thead>
          <tbody >
            {/* row 1 */}

            {latestCustomers.map(client => {
              return (
                <tr key={client.id}>

                  <td >
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img src={client.image} alt="Avatar Tailwind CSS Component" />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold text-white">{client.username}</div>
                      </div>
                    </div>
                  </td>
                  <td className="font-bold text-white">
                    {client.company}

                  </td>
                  <td className="font-bold text-white">{client.contact}</td>
                  <th>
                    <button onClick={() => alert(client.id)} className="bg-white hover:bg-gray-200 text-[#0080ff] font-bold py-2 px-2 rounded-full">
                      details</button>
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

export default SmallTable