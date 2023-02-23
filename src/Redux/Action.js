import { createSlice } from "@reduxjs/toolkit";

const initialState={
    data:[]
}
export const ObjectData=createSlice({
    name:"reducing",
    initialState,
    reducers:{

        sending:(state,action)=>{
            state.data=action.payload

        }
       
    }
})
export const{sending}=ObjectData.actions
export default ObjectData.reducer