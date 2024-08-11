import { createSlice } from "@reduxjs/toolkit";
const searchslice = createSlice({
  name: "searchresult",
  initialState: {
    searchmovieinfo: null,
  },
  reducers: {
    addsearchmovieinfo: (state, action) => {
      state.searchmovieinfo = action.payload;
    },
    removesearchresult: (state, action) => {
      state.searchmovieinfo=null
    },
  },
});
export const { addsearchmovieinfo, removesearchresult } = searchslice.actions;
export default searchslice.reducer;
