import { createSlice, PayloadAction } from "@reduxjs/toolkit";

 interface UIState{
    headerText1:string;
    footerText1:string;
 }
 const initialState : UIState={
    headerText1:"go",
    footerText1:"go", 
 };

 const uiSlice = createSlice({
    name:"ui",
    initialState,
    reducers:{
            setText1:(state,action:PayloadAction<string>)=>{
                const text = action.payload || "go"
                state.footerText1=text
                state.headerText1=text
            }
    }
 })

 export const {setText1} = uiSlice.actions
 export default uiSlice.reducer