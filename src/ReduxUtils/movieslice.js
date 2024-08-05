import { createSlice } from "@reduxjs/toolkit";

const movieslice = createSlice({
  name: "movies",
  initialState: {
    movieslist: null,
    trailerinfo: null,
  },
  reducers: {
    addmovieslist: (state, action) => {
      state.movieslist = action.payload;
    },
    addmovieinfo: (state, action) => {
      state.trailerinfo = action.payload;
    },
  },
});

export const { addmovieslist, addmovieinfo } = movieslice.actions;
export default movieslice.reducer;
