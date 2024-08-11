import { createSlice } from "@reduxjs/toolkit";
const movieslice = createSlice({
  name: "movies",
  initialState: {
    movieslist: null,
    trailerinfo: null,
    popmovie: null,
    topmovie: null,
    keydata: null,
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
    addkeyinfo: (state, action) => {
      state.keydata = action.payload;
    },
    removekeyinfo: (state, action) => {
      return null;
    },
  },
});

export const {
  addmovieslist,
  addmovieinfo,
  addpopinfo,
  addtopinfo,
  addkeyinfo,
  removekeyinfo,
} = movieslice.actions;
export default movieslice.reducer;
