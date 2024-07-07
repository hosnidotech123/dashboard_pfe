import React, { useEffect, useState } from 'react'
import { useAppSelector } from '../features/store'
import axios from 'axios';
import { Customer } from '../model/Customer.model';

function AddClient() {

    let customers = useAppSelector(state => state.customer.customers) as Customer []

    let length:number=customers.length+1

    let [customerRequest, setCustomerRequest] = useState<Customer>({
        id: length,
        username: "",
        company: "",
        contact: "",
        email: "",
        image: "",
        isActivated: "true"
    })

    let handleForm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        axios.post('http://localhost:8081/customers', customerRequest)
            .then(response => {
                console.log('Customer is created sent successfully:', response.data);
                setCustomerRequest({
                    id:length,
                    username: "",
                    company: "",
                    contact: "",
                    email: "",
                    image: "",
                    isActivated: ""
                })
                // handle success
            })
            .catch(error => {
                console.error('Error sending claim:', error);
                // handle error
            });
    };


    useEffect(()=>{
        
    },[customers])
    
    return (
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-lg text-center">
                <h1 className="text-2xl font-bold text-blue-500 sm:text-3xl">Get started today!</h1>
                <p className='text-gray-400  font-bold py-1'>
                    envoyer une notification au client pour lui dire que le problème est résolu
                </p>
            </div>

            <form onSubmit={handleForm} className="mx-auto mb-0 mt-8 max-w-md space-y-4 translate-y-[-17px]">


                <div>
                    <label htmlFor="id" className="sr-only">Id</label>
                    <input
                        required
                        disabled
                        type="text"
                        className="w-full text-black font-bold rounded-lg border-solid border-[2px] border-blue-300 bg-white  p-4 pe-12 text-sm shadow-sm"
                        placeholder="Username"
                        value={customerRequest?.id}
                        
                    />
                </div>

                <div>
                    <label htmlFor="username" className="sr-only">Username</label>
                    <input
                        required
                        
                        type="text"
                        className="w-full text-black font-bold rounded-lg border-solid border-[2px] border-blue-300 bg-white  p-4 pe-12 text-sm shadow-sm"
                        placeholder="Username"
                        value={customerRequest?.username}
                        onChange={(e)=>setCustomerRequest({...customerRequest,username:e.target.value})}
                    />
                </div>

                <div>
                    <label htmlFor="company" className="sr-only">Company</label>
                    <input
                        required
                        type="text"
                        className="w-full text-black font-bold rounded-lg border-solid border-[2px] border-blue-300 bg-white  p-4 pe-12 text-sm shadow-sm"
                        placeholder="Company name"
                        value={customerRequest?.company}
                        onChange={(e)=>setCustomerRequest({...customerRequest,company:e.target.value})}
                    />
                </div>

                <div>
                    <label htmlFor="contact" className="sr-only">Contact</label>
                    <input
                        required
                        type="text"
                        className="w-full text-black font-bold rounded-lg border-solid border-[2px] border-blue-300 bg-white  p-4 pe-12 text-sm shadow-sm"
                        placeholder="Client's Contact"
                        value={customerRequest?.contact}
                        onChange={(e)=>setCustomerRequest({...customerRequest,contact:e.target.value})}
                    />
                </div>



                <div>
                    <label htmlFor="email" className="sr-only">Email</label>
                    <input
                        required
                        type="email"
                        className="w-full text-black font-bold rounded-lg border-solid border-[2px] border-blue-300 bg-white  p-4 pe-12 text-sm shadow-sm"
                        placeholder="Client's email"
                        value={customerRequest.email}
                        onChange={(e) => setCustomerRequest({ ...customerRequest, email: e.target.value })}

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

export default AddClient
