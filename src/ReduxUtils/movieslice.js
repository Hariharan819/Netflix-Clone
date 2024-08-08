import { createSlice } from "@reduxjs/toolkit";

const movieslice = createSlice({
  name: "movies",
  initialState: {
    movieslist: null,
    trailerinfo: null,
    popmovie: null,
    topmovie: null,
    ytkeys:[],
  },
  reducers: {
    addmovieslist: (state, action) => {
      state.movieslist = action.payload;
    },
    addmovieinfo: (state, action) => {
      state.trailerinfo = action.payload;
    },
    addpopinfo: (state, action) => {
      state.popmovie = action.payload;
    },
    addtopinfo: (state, action) => {
      state.topmovie = action.payload;
    },
    addidinfo: (state, action) => {
      state.ytkeys = action.payload;
    },
  },
});

export const {
  addmovieslist,
  addmovieinfo,
  addpopinfo,
  addtopinfo,
  addidinfo,
} = movieslice.actions;
export default movieslice.reducer;
