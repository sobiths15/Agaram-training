import React from 'react';
// import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { updateRegister } from '../slices/userSlice';

function Register() {

    // let[registerData,setRegister]=useState({
    //     name:'',
    //     email:'',
    //     password:'',
    //     phone:''
    // })

    const navigate=useNavigate();

    const registerDetails=useSelector((state)=>state.user.registerState)
    const dispatch=useDispatch()
    
   
      const  saveData=async()=>{

        axios({
            method:'post',
            url:'http://agaram.academy/api/action.php',
            request:'create_candidate',
            Data:registerDetails
        }) 
        // axios.post('https://agaram.academy/api/action.php?request=create_candidate',registerData)
        .then( function(response){
          console.log(response)
            // dispatch(updateRegister(registerData))
            // console.log(registerDetails)
            
            // console.log(response)
            // dispatch(updateRegister())
            // console.log(registerDetails)
            
        },
        await navigate("/Login")
        
        )
    }

    
  return (
    <div>
        {/* {JSON.stringify(registerData)} */}

        {JSON.stringify(registerDetails)}
    
        <h1>Register</h1>
        <h3>Name:<input type='text' onKeyUp={(e)=>dispatch(updateRegister({...registerDetails,name:e.target.value}))}></input></h3>
        <h3>Email:<input type='email' onKeyUp={(e)=>dispatch(updateRegister({...registerDetails,email:e.target.value}))}></input></h3>
        <h3>Password:<input type='text' onKeyUp={(e)=>dispatch(updateRegister({...registerDetails,password:e.target.value}))}></input></h3>
        <h3>Phone:<input type='number' onKeyUp={(e)=>dispatch(updateRegister({...registerDetails,phone:e.target.value}))}></input></h3>
        <button type='button' onClick={()=>saveData()}>Submit</button>
    </div>
  )
}

export default Register;