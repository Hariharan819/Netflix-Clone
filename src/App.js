import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Components/Login";
import Browse from "./Components/Browse";
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/Browse",
    element: <Browse />,
  },
]);
function App() {
  return <RouterProvider router={appRouter} />;
}

export default App;
