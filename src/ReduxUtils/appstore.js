import { configureStore } from "@reduxjs/toolkit";
import slicereducer from "./userslice";
import moviereducer from "./movieslice";
import gptreducer from "./Gptslice";

const appstore = configureStore({
  reducer: {
    user: slicereducer,
    movies: moviereducer,
    gptdata: gptreducer,
  },
});
export default appstore;
