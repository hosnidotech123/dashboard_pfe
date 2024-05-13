import { Customer } from "./Customer.model";

export interface Claim{
    id:number
    content:string;
    clientId:number;
    status:string;
    customer:Customer
    
 }







