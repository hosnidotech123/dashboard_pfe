import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

import {Client} from "../model/Client.model"

interface ClientState {
  clients: Client []|null,
  isLoading:boolean,
  hasError:String|null
}

export let getClients = createAsyncThunk(
  "client", async () => {
   return fetch("http://localhost:3000/clients")
              .then(res=>res.json())
    
});

const initialState: ClientState = {
  clients: [],
  isLoading:false,
  hasError:""
}

export const clientSlice = createSlice({
  name: 'client',
  initialState,
  reducers:{}
  ,
  extraReducers: (builder) => {
    builder
      .addCase(getClients.pending, (state) => {
      state.isLoading = true;
      
    })
      .addCase(getClients.fulfilled, (state, action:PayloadAction<Client[]>) => {
        state.clients = action.payload ;
        state.isLoading = false;
        state.hasError = null
      })
      .addCase(getClients.rejected, (state, action:PayloadAction<any>) => {
        state.hasError = action.payload
        state.isLoading = false;
        state.clients=[]
      })
  }
})



export default clientSlice.reducer

