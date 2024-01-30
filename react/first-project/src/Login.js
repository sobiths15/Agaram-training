import { useState,} from "react"
import {useNavigate} from "react-router-dom"


function Login(props){

  




  const navigate = useNavigate();
    let[loginData,setLogin]=useState({
        email:"a@gmail.com",
        password:1234
    })
    const checkLogin=()=>{
      if (loginData.email=="a@gmail.com" && loginData.password==1234){
      props.setisLogged({status:true,
                         email: loginData.email
      })
      
      navigate("/Todo")}
      
      else{
        alert("false")}

    }

    return(
       
        <>
        {JSON.stringify(loginData)}
         <label> Email: <input type="email" id="email" onKeyUp={(e)=>setLogin({
            ...loginData,
            email:e.target.value
         })}/></label>
          <label>Password:<input type="password" id="password" onKeyUp={(e)=>setLogin({
            ...loginData,
            password:e.target.value
          })}/></label>
          <button type="button" onClick={()=>checkLogin()}>Login</button>
        
        </>
    )
    
}

export default Login