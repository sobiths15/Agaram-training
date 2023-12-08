import Show from "./Show";
import User from "./User";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import UserDetails from "./pages/UserDetails";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";



function App() {

  const router = createBrowserRouter([
    {
      path: "/login",
      element: <Login/>
    },
    {
      path: "/register",
      element: <Register/>
    },
    {
      path: "/home",
      element: <Home/>
    },
    {
      path: "/users/:userId",
      element: <UserDetails/>
    }
  ])

  return (
    <>
      {/* <Show/>
      <User/> */}
      {/* <Login/> */}
      
      <RouterProvider router={router} />
    </>
  );
}

export default App;
