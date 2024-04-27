import { createSlice,PayloadAction } from "@reduxjs/toolkit";

interface Claimstatistics{
    pending:number,
    done:number

}


let initialState:Claimstatistics={
    pending: 0,
    done: 0,
}


export const StatisticsSlice=createSlice({
    name: "statistics",
    initialState,
    reducers:{
        addPendingstatistics:(state,action:PayloadAction<{p:number}>)=>{
            state.pending=action.payload.p
        },

        addDonestatistics:(state,action:PayloadAction<{d:number}>)=>{
            state.done=action.payload.d
        }
    }
})


export default StatisticsSlice.reducer

export const {addDonestatistics,addPendingstatistics}=StatisticsSlice.actions