import { createSlice } from "@reduxjs/toolkit";
const Gptslice=createSlice({
    name:"gptdata",
    initialState:{
        gptinfos:false,
    },
    reducers:{
        addgptinfo:(state,action)=>{
            state.gptinfos=!state.gptinfos;
        }
    }
})
export const {addgptinfo}=Gptslice.actions;
export default Gptslice.reducer;