import { createSlice } from "@reduxjs/toolkit";

const movieslice=createSlice({
    name:"movies",
    initialState:{
        movieslist:null, 
    },
    reducers:{
        addmovieslist:(state,action)=>{
            state.movieslist=action.payload;
        },
    },
});

export const {addmovieslist}=movieslice.actions;
export default movieslice.reducer;
