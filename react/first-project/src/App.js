// import logo from './logo.svg';
import './App.css';
// import { useState,useEffect } from 'react';
// import Header from './Header';
// import Todo from './Todo/Todo';
// import User from './Todo/User';
import Login from './Login';
import {
  createBrowserRouter,
  // RouterProvider,
} from "react-router-dom";
// import Timer from './Timer';
// import Submit from './Submit';

import Log from './Todo/Log';
import Profile from './Profile';
import User from './Todo/User';




 function App(props){

  // let [isLogged,setisLogged]=useState({

  //   status:false,
  //   email:""
  // });
  // useEffect(()=>{
  //   alert("1")
  // })

  // const router = createBrowserRouter([
      // {
      //   path: "/Login",
      //   element: <Login isLogged={isLogged}  setisLogged={setisLogged}/>,
      // },
      // {
      //   path: "/Todo",
      //   element: <Todo isLogged={isLogged}  setisLogged={setisLogged}/>,
      // },
      // {
      //   path: "/User",
      //   element: <User isLogged={isLogged} setisLogged={setisLogged}/>,
      // },
      // {
      //   path: "/Timer",
      //   element: <Timer/>,
      // },
      // {
      //   path: "/Submit",
      //   element: <Submit/>,
      // }
    // ]);

    return(
      
      <>
    
      <Profile/>
      <User/>
      {/* <RouterProvider router={router} /> */}
      </>
    
    )
  
}

export default App; 
