import { configureStore } from "@reduxjs/toolkit";
import slicereducer from "./userslice";

const appstore = configureStore({
  reducer: {
    user: slicereducer,
  },
});
export default appstore;
