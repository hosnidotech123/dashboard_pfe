import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useAppSelector } from '../features/store'
import axios from 'axios'
import { Notification } from '../model/Notification.model'





function UpdateNotification() {

  let {notifId}= useParams()

  

  let notifications=useAppSelector(state=>state.notification.notifications)

  let notifById=notifications?.find(c=>c.id===parseInt(notifId||"")) as Notification

  let [notifUpdate,setNotifUpdate]=useState<Notification>(notifById)


  let navigate=useNavigate()

  const handleForm = (e: React.FormEvent<HTMLFormElement>) => {
    const confirmationMessage = `Êtes-vous sûr que le problème est résolu ?`;

    if (window.confirm(confirmationMessage)) {
        

        axios.patch(`http://localhost:8083/notifications/${notifUpdate?.id}`, { "content": notifUpdate?.content })
            .then(response => {
                console.log("Claim status updated successfully:", response.data);
                navigate(-1)
                // Optionally, you can handle the updated claim data here
            })
            .catch(err => {
                console.error("Error updating claim status:", err);
            });
    }
  };



 




  return (
    
    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-lg text-center">
                <h1 className="text-2xl font-bold text-blue-500 sm:text-3xl">Get started today!</h1>
                <p className='text-gray-400  font-bold py-1'>
                    envoyer une notification au client pour lui dire que le problème est résolu
                </p>
            </div>

            <form onSubmit={handleForm} className="mx-auto mb-0 mt-8 max-w-md space-y-4">


                <div>
                    <label htmlFor="id" className="sr-only">Id</label>
                    <input
                        required
                        disabled
                        type="text"
                        className="w-full text-black font-bold rounded-lg border-solid border-[2px] border-blue-300 bg-white  p-4 pe-12 text-sm shadow-sm"
                        placeholder="Username"
                        value={notifUpdate?.id}
                        
                    />
                </div>

                <div>
                    <label htmlFor="username" className="sr-only">Username</label>
                    <input
                        required
                        
                        type="text"
                        className="w-full text-black font-bold rounded-lg border-solid border-[2px] border-blue-300 bg-white  p-4 pe-12 text-sm shadow-sm"
                        placeholder="Username"
                        value={notifUpdate?.content}
                        onChange={(e)=>setNotifUpdate({...notifById,content:e.target.value})}

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
                        value={notifUpdate?.createdAt}

                    />
                </div>



                <div>
                    <label htmlFor="content" className="sr-only">Content</label>
                    <input
                        required
                        disabled
                        type="text"
                        className="w-full text-black font-bold rounded-lg border-solid border-[2px] border-blue-300 bg-white  p-4 pe-12 text-sm shadow-sm"
                        placeholder="Set Notification to Client"
                        value={notifUpdate?.customer.username}
                       

                    />
                </div>



                <div className="flex items-center justify-between">
                    <button
                        type="submit"
                        className="inline-block rounded-lg w-full bg-blue-500 px-5 py-3 text-sm font-medium text-white"
                    >
                        Update Notification
                    </button>
                </div>
            </form>
        </div>
  )
}

export default UpdateNotification