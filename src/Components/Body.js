import React from "react";
// import Header from "./Header";
import Login from "./Login";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Browse from "./Browse";
const appRouter=createBrowserRouter([
    {
        path:"/",
        element:<Login/>

    },
    {
        path:"/Browse",
        element:<Browse/>
    }
])

const Body = () => {
  return <div>
    <RouterProvider router={appRouter}/>
  </div>;
};

export default Body;
