import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useAppSelector } from '../features/store'
import { notificationRequest } from '../model/notificationRequest.model'
import axios from 'axios'

function SendNotification() {

    let {customerId}=useParams()

    let customers=useAppSelector(state=>state.customer.customers)
    let customer=customers?.find(c=>c.id===parseInt(customerId||""))

    let [notificationRequest,setNotificationRequest]=useState<notificationRequest>(
        {
            content: "",
            customerId: parseInt(customerId||"")
        }
    )

    // let handleForm=(e: React.FormEvent<HTMLFormElement>)=>{

    //     e.preventDefault();
    //     alert(JSON.stringify(notificationRequest))

    // }

    const handleForm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        axios.post('http://localhost:8083/notifications', notificationRequest)
            .then(response => {
                console.log('Claim sent successfully:', response.data);
                setNotificationRequest({
                    content: "",
                    customerId: parseInt(customerId||"")
                })
                
            })
            .catch(error => {
                console.error('Error sending claim:', error);
              
            });
    };

    // useEffect(()=>{
    //     axios.get("http://localhost:8888/NOTIFICATION-SERVICE/notifications")
    //     .then(res=>console.log(res.data))
    //     .catch(err=>console.log(err))
    // },[])






  return (
    <div  className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-lg text-center">
                <h1 className="text-2xl font-bold text-blue-500 sm:text-3xl">Get started today!</h1>
                <p className='text-gray-400  font-bold py-1'>
                    send notification to client to telling it that probelem is solved
                </p>
            </div>

            <form  onSubmit={handleForm} className="mx-auto mb-0 mt-8 max-w-md space-y-4">


                <div>
                    <label htmlFor="id" className="sr-only">Id</label>
                    <input
                        required
                        disabled
                        type="text"
                        className="w-full text-black font-bold rounded-lg border-solid border-[2px] border-blue-300 bg-white  p-4 pe-12 text-sm shadow-sm"
                        placeholder="Username"
                        value={customer?.id}
                     
                    />
                </div>

                <div>
                    <label htmlFor="username" className="sr-only">Username</label>
                    <input
                        required
                        disabled
                        type="text"
                        className="w-full text-black font-bold rounded-lg border-solid border-[2px] border-blue-300 bg-white  p-4 pe-12 text-sm shadow-sm"
                        placeholder="Username"
                        value={customer?.username}
                     
                    />
                </div>
            
                <div>
                    <label htmlFor="company" className="sr-only">Company</label>
                    <input
                        required
                        disabled
                        type="text"
                        className="w-full text-black font-bold rounded-lg border-solid border-[2px] border-blue-300 bg-white  p-4 pe-12 text-sm shadow-sm"
                        placeholder="Company name"
                        value={customer?.company}
                     
                    />
                </div>



                <div>
                    <label htmlFor="content" className="sr-only">Content</label>
                    <input
                        required
                        type="text"
                        className="w-full text-black font-bold rounded-lg border-solid border-[2px] border-blue-300 bg-white  p-4 pe-12 text-sm shadow-sm"
                        placeholder="Set Notification to Client"
                        value={notificationRequest.content}
                        onChange={(e) => setNotificationRequest({ ...notificationRequest, content: e.target.value })}
                     
                    />
                </div>

              

                <div className="flex items-center justify-between">
                    <button
                        type="submit"
                        className="inline-block rounded-lg w-full bg-blue-500 px-5 py-3 text-sm font-medium text-white"
                    >
                        Send Notification
                    </button>
                </div>
            </form>
        </div>
  )
}

export default SendNotification