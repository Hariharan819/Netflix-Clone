import { configureStore } from "@reduxjs/toolkit";
import slicereducer from "./userslice";
import moviereducer from "./movieslice"

const appstore = configureStore({
  reducer: {
    user: slicereducer,
    movies:moviereducer,
  },
});
export default appstore;
  