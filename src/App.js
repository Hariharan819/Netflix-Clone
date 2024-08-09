import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Components/Login";
import Browse from "./Components/Browse";
import Videoplayground from "./Components/Videoplayground";
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/Browse",
    element: <Browse />,
  },
  {
    path: "/videoplayground",
    element: <Videoplayground/>,
  },
]);
function App() {
  return <RouterProvider router={appRouter} />;
}

export default App;
