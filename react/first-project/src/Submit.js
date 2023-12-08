// import axios from 'axios';
import { useState } from "react";


function Submit(){
    let loginCheck=()=>{

        axios({
            method:'get',
            url:'https://346ecf18-5094-4743-aa32-8c7c55e73246.mock.pstmn.io/GetEmployees',
            data:{
                request:"Get_All_Employee",
                name:"beni",
                email:"beni@gmail.com"
            }
        }).then(function(response){
            
            console.log(response.data[0])
            let datas= response.data;
            console.log(datas)
            let loopdata = datas.map((s,i)=>{
                
                if (s.email==='chrish@gmail.com'){
                    alert("success")
                }
            })
        })}


function Submit(){
let[loginData,setLogin]=useState({
    email:"",
    password:""
})
const checkLogin=()=>{
  if (loginData.email=="sobith@gmail.com" && loginData.password==1234){
   alert("sucess")
  }
  else{
    alert("false")
  }
        
    };
    return(  
        <>
          <from>
        <h1>LogIn</h1>
        <label> Email: <input type="email" id="email" onKeyUp={(e)=>setLogin({
            ...loginData,
            email:e.target.value
         })}/></label>
          <label>Password:<input type="password" id="password" onKeyUp={(e)=>setLogin({
            ...loginData,
            password:e.target.value
          })}/></label>
          <button type="button" onClick={()=>checkLogin()}>Login</button>
          </from>
        
        </>
    )
}
export default Submit;