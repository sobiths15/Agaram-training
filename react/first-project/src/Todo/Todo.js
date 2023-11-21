import { useState,useEffect } from "react"
import axios from 'axios'

// or less ideall
import Form from "./Form";

function Todo(props){

    // let todos=["sobith","shek","ajay","ajil"]  
   
   
    let[todos,settodos]=useState(["sobith","shek","ajay","ajil"])
    console.log(todos[2])
    
    axios({
        method: 'get',
        url: ' https://jsonplaceholder.typicode.com/posts',
        
    
        
      }).then(function(response){
      console.log(response)});
        
       

    const del=(i)=>{
        let newtodo = todos.filter((t)=>t!=todos[i])
        settodos(newtodo)   
    }
    useEffect(()=>{
        alert("2")
    })
 return (
    <>
     {props.isLogged.status?<h1>welcome {props.isLogged.email}</h1>:<h1>guest</h1>}
        <table border={2}>
        <tr>
            <th>index</th>
            <th>value</th>
            <th>Delete</th>
        </tr> 
        {
            todos.map((value,index)=>(
                <tr>
                    <td>{index}</td>
                    <td>{value}</td>
                    <td><button type="button" onClick={()=>del(index)}>Delete</button></td>
                </tr>
            ))
        }
    </table>
       <Form item={todos} setItem={settodos}/>
       

    </>
//    function add(){
//         // document.getElementById("add").value
//         alert(document.getElementById("add").value)
//     }
    

 )

}
export default Todo;
