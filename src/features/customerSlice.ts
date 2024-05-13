import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

import {Customer} from "../model/Customer.model"

interface CustomerState {
  customers: Customer []|null,
  isLoading:boolean,
  hasError:String|null
}

let url:string="http://localhost:8888/CUSTOMER-SERVICE/customers"

export let getCustomers = createAsyncThunk(
  "customer", async () => {
   return fetch(url)
              .then(res=>res.json())
    
});

const initialState: CustomerState = {
  customers: [],
  isLoading:false,
  hasError:""
}

export const customerSlice = createSlice({
  name: 'customer',
  initialState,
  reducers:{}
  ,
  extraReducers: (builder) => {
    builder
      .addCase(getCustomers.pending, (state) => {
      state.isLoading = true;
      
    })
      .addCase(getCustomers.fulfilled, (state, action:PayloadAction<Customer[]>) => {
        state.customers = action.payload ;
        state.isLoading = false;
        state.hasError = null
      })
      .addCase(getCustomers.rejected, (state, action:PayloadAction<any>) => {
        state.hasError = action.payload
        state.isLoading = false;
        state.customers=[]
      })
  }
})



export default customerSlice.reducer

