import React,{useState} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { login } from './Global';
import axios from 'axios';


function Login() {

  //   const dispatch=useDispatch(login)
  // const [email,setEmail]=useState('');
  // const [name,setPass]=useState('');
  //   console.log(name)
  return (
    <div>Login
          
      
      {/* <h3>Email: <input type='text' onKeyUp={(e)=>setEmail(e.target.value)}/></h3>

      <h3>Password : <input type='text'onKeyUp={(e)=>setPass(e.target.value)}/></h3> */}
      
        <button type='button' onClick={()=>{
          axios.get('http://127.0.0.1:5000/about/sobith') .then(response=>{
            console.log(response)
          })}}>Login</button>
    </div>
  )
}

export default Login;