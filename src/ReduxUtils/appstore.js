import { configureStore } from "@reduxjs/toolkit";
import slicereducer from "./userslice";
import moviereducer from "./movieslice";
import gptreducer from "./Gptslice";
import searchreducer from "./searchslice";
const appstore = configureStore({
  reducer: {
    user: slicereducer,
    movies: moviereducer,
    gptdata: gptreducer,
    searchresult: searchreducer,
  },
});
export default appstore;
