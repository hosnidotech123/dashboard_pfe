// import { configureStore } from "@reduxjs/toolkit";
// import { StatisticsSlice } from "./statisticsSlice";

// import {claimSlice} from "./claimSlice";


// export const store =configureStore({
//     reducer:{
//         statistics:StatisticsSlice.reducer,
//         claim:claimSlice.reducer
        
//     }
// })






import { configureStore } from '@reduxjs/toolkit'
import { useDispatch,TypedUseSelectorHook, useSelector } from "react-redux";

import claimReducer from "./claimSlice"
import statisticsReducer from "./statisticsSlice"
import customerReducer from "./customerSlice"
import UserReducer from "./UserSlice"
import NotificationReducer from "./notificationSlice"


export const store = configureStore({
  reducer: {
    statistics:statisticsReducer,
    claim:claimReducer,
    customer:customerReducer,
    user:UserReducer,
    notification:NotificationReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// export type AppDispatch = typeof store.dispatch



export const useAppDispatch:()=>typeof store.dispatch=useDispatch
export const useAppSelector:TypedUseSelectorHook<ReturnType<typeof store.getState>>=useSelector