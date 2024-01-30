import React from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useEffect,useState } from 'react'
import Home from './Home'
import UserList from '../components/UserList'

function UserDetails() {

    let[userIdData,setIdData]=useState([])
  

    const userId=useParams()
    console.log("useparms",userId)

    const getUserData=()=>{

        axios.get(`https://agaram.academy/api/action.php?request=getMemberDetail&id=${userId.userId}`)
        
        .then(function(response){
             const userdata=response.data.data
             setIdData(userdata)

        })
    
       }
       useEffect(()=>{
        getUserData()
       },[])

  return (
    <div>
        <h1>UserDetails</h1>
        {JSON.stringify(userIdData)}
        {/* {userIdData} */}
       {/* {JSON.stringify (useParams())}
       {id} */}

{JSON.stringify (useParams())}

  <UserList isDeleteVisible={true} logOut={true}/>
       
        </div>
  )
}

export default 
UserDetails