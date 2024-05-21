import { Customer } from "./Customer.model";

export interface Claim{
    id:number
    content:string
    customerId:number
    status:string
    customer:Customer
    createdAt:string
    
 }







