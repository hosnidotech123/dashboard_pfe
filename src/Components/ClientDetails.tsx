import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useAppSelector } from '../features/store'
import { Customer } from '../model/Customer.model'

function ClientDetails() {

    let { customerId } = useParams() 
    let customers=useAppSelector(state=>state.customer.customers) as Customer []

    let customer=customers.find(customer=>customer.id===parseInt(customerId||"")) as Customer

    let claims=useAppSelector(state=>state.claim.claims)

    let claimsperClient=claims?.filter(claim=>claim.customer.id===parseInt(customerId||""))

    let notifications=useAppSelector(state=>state.notification.notifications)

    let notificationsperClient=notifications?.filter(n=>n.customerId===parseInt(customerId||""))


   





   

    


    return (
        
        <div className="flow-root rounded-lg border border-gray-100 py-3 shadow-sm">
            <dl className="-my-3 divide-y divide-gray-100 text-sm">
                <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                    <dt className="font-medium text-gray-900">Id</dt>
                    <dd className="text-gray-700 sm:col-span-2">{customer?.id}</dd>
                </div>

                <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                    <dt className="font-medium text-gray-900">Username</dt>
                    <dd className="text-gray-700 sm:col-span-2">{customer?.username}</dd>
                </div>

                <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                    <dt className="font-medium text-gray-900">Contact</dt>
                    <dd className="text-gray-700 sm:col-span-2">{customer?.contact}</dd>
                </div>

                <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                    <dt className="font-medium text-gray-900">Company</dt>
                    <dd className="text-gray-700 sm:col-span-2">{customer?.company}</dd>
                </div>

                <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                    <dt className="font-medium text-gray-900">Image</dt>
                    <dd className=" sm:col-span-2">
                        <img className='w-[150px] h-[150px] rounded-full' src={`${customer?.image}`} alt="" />
                    </dd>
                </div>


                <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                    <dt className="font-medium text-gray-900">Claims</dt>
                    <dd className="text-gray-700 sm:col-span-2">{claimsperClient?.length}</dd>
                </div>

                <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                    <dt className="font-medium text-gray-900">Notifications</dt>
                    <dd className="text-gray-700 sm:col-span-2">{notificationsperClient?.length}</dd>
                </div>
                
            </dl>
        </div>
    )
}

export default ClientDetails