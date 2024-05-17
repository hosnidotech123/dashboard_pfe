


import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

import {Notification} from "../model/Notification.model"

interface NotificationState {
  notifications: Notification[]|null,
  isLoading:boolean,
  hasError:String|null
}

let url:string="http://localhost:8888/NOTIFICATION-SERVICE/notifications"

export let getNotifications = createAsyncThunk(
  "notification", async () => {
   return fetch(url)
              .then(res=>res.json())
    
});

const initialState: NotificationState = {
  notifications: [],
  isLoading:false,
  hasError:""
}

export const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers:{}
  ,
  extraReducers: (builder) => {
    builder
      .addCase(getNotifications.pending, (state) => {
      state.isLoading = true;
      
    })
      .addCase(getNotifications.fulfilled, (state, action:PayloadAction<Notification[]>) => {
        state.notifications = action.payload ;
        state.isLoading = false;
        state.hasError = null
      })
      .addCase(getNotifications.rejected, (state, action:PayloadAction<any>) => {
        state.hasError = action.payload
        state.isLoading = false;
        state.notifications = action.payload ;
      })
  }
})



export default notificationSlice.reducer

