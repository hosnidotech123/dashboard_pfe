import { configureStore } from "@reduxjs/toolkit";
import { StatisticsSlice } from "./statisticsSlice";
import { useDispatch,TypedUseSelectorHook, useSelector } from "react-redux";


export const store =configureStore({
    reducer:{
        statistics:StatisticsSlice.reducer
    }
})



export const useAppDispatch:()=>typeof store.dispatch=useDispatch
export const useAppSelector:TypedUseSelectorHook<ReturnType<typeof store.getState>>=useSelector