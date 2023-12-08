import { useState,useEffect} from "react"
import {useNavigate} from "react-router-dom"
import { useSelector,useDispatch } from "react-redux";
import { updateLogin } from "../slices/userSlice";
import axios from 'axios';



function Login(){

    const loginDetails=useSelector((state)=>state.user.loginState)
    const dispatch=useDispatch()

    const navigate = useNavigate();

    useEffect(()=>{
      if(localStorage.getItem("login")=="success"){
        navigate("/Home")
      }

    })

 
    let[loginData,setLogin]=useState({
        email:'',
        password:''
    })

    dispatch(updateLogin(loginData))
    

    const checkLogin=()=>{
   

    axios.post('http://agaram.academy/api/action.php?request=candidate_login')
  //   axios({
  //     method:'post',
  //     url:'http://agaram.academy/api/action.php',
  //     request:'candidate_login',
  //     Data:loginData
  // })
    .then(response=>{
      console.log(response)
      let checkLog=response.data.status
      if(checkLog=='success'){

    localStorage.setItem('login','success')
    console.log(localStorage.getItem('login'))
    
    navigate("/Home")}
  }
  )

    }

    return(
       
        <>

        {/* {JSON.stringify(userDetails)} */}
        <h1>Login</h1>
        {JSON.stringify(loginData)}
        {JSON.stringify(loginDetails)}

         <h3> Email: <input type="email" id="email" onKeyUp={(e)=>setLogin({
            ...loginData,
            email:e.target.value
         })}/></h3>
          <h3>Password:<input type="password" id="password" onKeyUp={(e)=>setLogin({
            ...loginData,
            password:e.target.value
          })}/></h3>
          <button type="button" onClick={()=>checkLogin()}>Login</button>
          

          {/* <button onClick={()=>dispatch(changeName("sobith"))}>name</button> */}
        {/* {()=>dispatch(changeN("sobith"))} */}
        </>
    )
    
}

export default Login;