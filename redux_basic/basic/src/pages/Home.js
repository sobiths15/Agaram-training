import React from 'react'
import axios from 'axios'
import { useState,useEffect } from 'react'
import { useNavigate,Link } from 'react-router-dom'
import { updateUsers } from '../slices/userSlice'
import { useSelector,useDispatch } from 'react-redux'

function Home() {

    let[tab,settable]=useState([])

    const navigate=useNavigate()

    const userTable=useSelector((state)=>state.user.userState)
    const dispatch=useDispatch()

    useEffect(()=>{
      if(localStorage.getItem('login')=='success'){
       
        manageusers()
      }
      else{
        navigate("/Login")
      }
      

    },[])

    const logout = ()=>{
      navigate("/Login")
      localStorage.setItem("login","error")
    }

    const manageusers = ()=>{
        axios.get('http://agaram.academy/api/action.php?request=getAllMembers').then(response=>{
      console.log(response)

      let userdata=response.data.data
      dispatch(updateUsers(settable(userdata)))

    })
    }
    const deleteUser=(id)=>{
      axios.get(`https://agaram.academy/api/action.php?request=removeMember&id=${id}`).then(function(response){
        console.log(response)
        manageusers()
    })

    }

  return (
    <div>
      {JSON.stringify(userTable)}
        <h1>Welcome to Home Page</h1>
        
        <table border={2}>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Password</th>
                <th>Aadhar</th>
                <th>View</th>
                <th>Delete</th>
            </tr>
            <tbody>
                {
                    tab.map((data)=>(
                    <tr>
                    <td>{data.id}</td>
                    <td>{data.name}</td>
                    <td>{data.email}</td>
                    <td>{data.password}</td>
                    <td>{data.aadhar}</td>
                    <td><Link to={(`/users/${data.id}`)}>view</Link></td>
                    <td><button onClick={()=>deleteUser(data.id)}>delete</button></td>
                    </tr>)
                   )
                }
                
            </tbody>
        </table>
        <h1><button onClick={()=>logout()}>Logout</button></h1>
    </div>
  )
}

export default Home