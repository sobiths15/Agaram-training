import { useState } from "react"

// or less ideally

import Form from "./Form";

function User(){



    // let todos=["sobith","shek","ajay","ajil"]
   
    let[users,setUsers]=useState(["sobith","shek","ajay"])
    
     
    const del=(i)=>{
        let newUsers = users.filter((t)=>t!=users[i])
        setUsers(newUsers)   
    }
 return (
    <>
        <table border={2}>
        <tr>
            <th>index</th>
            <th>value</th>
            <th>Delete</th>
        </tr>
        {
            users.map((value,index)=>(
                <tr>
                    <td>{index}</td>
                    <td>{value}</td>
                    <td><button type="button" onClick={()=>del(index)}>Delete</button></td>
                </tr>
            ))
        }
    </table>

        <Form item={users} setItem={setUsers}/>


    </>
//    function add(){
//         // document.getElementById("add").value
//         alert(document.getElementById("add").value)
//     }
    

 )

}
export default User;
