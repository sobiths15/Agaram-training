import React from 'react'
import {useSelector} from 'react-redux'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'


function Profile() {

  const user= useSelector(state=>state.user.value)

  // useEffect(()=>{
    
  if(!user.name){
    
    return
      
  }
 
  // })

  return (
    <div>
      <h1>Welcome {user.name}</h1>
      <h2>Name:{user.name}</h2>
      <h2>Age:{user.age}</h2>
      <h2>Email:{user.email}</h2>
    </div>
  )
}

export default Profile