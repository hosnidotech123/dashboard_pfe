import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useAppSelector } from '../features/store'
import axios from 'axios'
import { Claim } from '../model/Claim.model'





function UpdateClaim() {

  let {claimId}= useParams()

  

  let claims=useAppSelector(state=>state.claim.claims)

  let claimById=claims?.find(c=>c.id===parseInt(claimId||"")) as Claim

  let [claimUpdate,setClaimUpdate]=useState<Claim>(claimById)


  let navigate=useNavigate()

  const handleForm = (e: React.FormEvent<HTMLFormElement>) => {
    const confirmationMessage = `Êtes-vous sûr que le problème est résolu ?`;

    if (window.confirm(confirmationMessage)) {
        

        axios.patch(`http://localhost:8082/claims/${claimUpdate?.id}`, { "content": claimUpdate?.content })
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
                        value={claimUpdate?.id}
                        
                    />
                </div>

                <div>
                    <label htmlFor="username" className="sr-only">Username</label>
                    <input
                        required
                        
                        type="text"
                        className="w-full text-black font-bold rounded-lg border-solid border-[2px] border-blue-300 bg-white  p-4 pe-12 text-sm shadow-sm"
                        placeholder="Username"
                        value={claimUpdate?.content}
                        onChange={(e)=>setClaimUpdate({...claimById,content:e.target.value})}

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
                        value={claimUpdate?.createdAt}

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
                        value={claimUpdate?.customer.username}
                       

                    />
                </div>



                <div className="flex items-center justify-between">
                    <button
                        type="submit"
                        className="inline-block rounded-lg w-full bg-blue-500 px-5 py-3 text-sm font-medium text-white"
                    >
                        Update Claim
                    </button>
                </div>
            </form>
        </div>
  )
}

export default UpdateClaim