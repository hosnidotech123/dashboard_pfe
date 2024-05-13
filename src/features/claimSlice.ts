import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

import {Claim} from "../model/Claim.model"
import axios from 'axios';

interface ClaimState {
  claims: Claim []|null,
  isLoading:boolean,
  hasError:String|null
}

let url:string="http://localhost:8888/CLAIM-SERVICE/claims"

export let getClaims = createAsyncThunk(
  "claim", async () => {
   return fetch(url)
              .then(res=>res.json())
    
});

const initialState: ClaimState = {
  claims: [],
  isLoading:false,
  hasError:""
}

export const claimSlice = createSlice({
  name: 'claim',
  initialState,
  reducers:{}
  ,
  extraReducers: (builder) => {
    builder
      .addCase(getClaims.pending, (state) => {
      state.isLoading = true;
      
    })
      .addCase(getClaims.fulfilled, (state, action:PayloadAction<Claim[]>) => {
        state.claims = action.payload ;
        state.isLoading = false;
        state.hasError = null
      })
      .addCase(getClaims.rejected, (state, action:PayloadAction<any>) => {
        state.hasError = action.payload
        state.isLoading = false;
        state.claims=[]
      })
  }
})



export default claimSlice.reducer

