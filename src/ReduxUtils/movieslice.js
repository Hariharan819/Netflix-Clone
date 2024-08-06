import { createSlice } from "@reduxjs/toolkit";

const movieslice = createSlice({
  name: "movies",
  initialState: {
    movieslist: null,
    trailerinfo: null,
    popmovie: null,
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
  },
});

export const { addmovieslist, addmovieinfo, addpopinfo } = movieslice.actions;
export default movieslice.reducer;
