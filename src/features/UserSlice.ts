import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
// import type { PayloadAction } from '@reduxjs/toolkit'

import {User} from "../model/User.model"
// import axios from 'axios';

interface UserState {
  user: User |null,
  isLoading:boolean,
  hasError:String|null
}

// let url:string="http://localhost:8888/CLAIM-SERVICE/claims"

// export let getClaims = createAsyncThunk(
//   "claim", async () => {
//    return fetch(url)
//               .then(res=>res.json())
    
// });

const initialState: UserState = {
  user: {id:1,username:"admin",password:"1234",roles:["user"]},
  isLoading:false,
  hasError:""
}

export const UserSlice = createSlice({
  name: 'user',
  initialState,
  reducers:{}
})



export default UserSlice.reducer

