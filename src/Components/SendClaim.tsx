import React, { useState } from 'react';
import { ClaimRequest } from '../model/ClaimRequest.model';
import axios from 'axios';

function SendClaim() {
    let [claimRequest, setClaimRequest] = useState<ClaimRequest>({
        content: "",
        status: "pending",
        customerId: 0
    });

    const handleForm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        axios.post('http://localhost:8082/claims', claimRequest)
            .then(response => {
                console.log('Claim sent successfully:', response.data);
                setClaimRequest({
                    content: "",
                    status: "pending",
                    customerId: 0
                })
                // handle success
            })
            .catch(error => {
                console.error('Error sending claim:', error);
                // handle error
            });
    };

    return (
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-lg text-center">
                <h1 className="text-2xl font-bold text-blue-500 sm:text-3xl">Get started today!</h1>
                <p className='text-gray-400  font-bold py-1'>
                    Nous nous engageons à traiter votre réclamation rapidement et à vous tenir informé de sa résolution.
                    Merci pour votre contribution à l'amélioration de notre service !
                </p>
            </div>

            <form onSubmit={handleForm} className="mx-auto mb-0 mt-8 max-w-md space-y-4">
                <div>
                    <label htmlFor="content" className="sr-only">Content</label>
                    <input
                        required
                        type="text"
                        className="w-full text-black font-bold rounded-lg border-solid border-[2px] border-blue-300 bg-white  p-4 pe-12 text-sm shadow-sm"
                        placeholder="Set your Claim"
                        value={claimRequest.content}
                        onChange={(e) => setClaimRequest({ ...claimRequest, content: e.target.value })}
                    />
                </div>

                <div>
                    <label htmlFor="status" className="sr-only">Status</label>
                    <input
                        required
                        type="text"
                        className="w-full text-black font-bold  rounded-lg border-solid border-[2px] border-blue-300 bg-white  p-4 pe-12 text-sm shadow-sm"
                        placeholder="status"
                        value={claimRequest.status}
                        onChange={(e) => setClaimRequest({ ...claimRequest, status: e.target.value })}
                    />
                </div>

                <div>
                    <label htmlFor="customerId" className="sr-only">customerId</label>
                    <input
                        required
                        type="text"
                        className="hover:appearance-none text-black font-bold  w-full rounded-lg border-solid border-[2px] border-blue-300 bg-white  p-4 pe-12 text-sm shadow-sm"
                        placeholder="customerId"
                        value={claimRequest.customerId}
                        onChange={(e) => setClaimRequest({ ...claimRequest, customerId: parseInt(e.target.value) })}
                    />
                </div>

                <div className="flex items-center justify-between">
                    <button
                        type="submit"
                        className="inline-block rounded-lg w-full bg-blue-500 px-5 py-3 text-sm font-medium text-white"
                    >
                        Send Claim
                    </button>
                </div>
            </form>
        </div>
    );
}

export default SendClaim;
