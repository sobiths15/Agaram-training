import React from 'react'
import axios from 'axios'
import { useState,useEffect } from 'react'
import { useNavigate,Link } from 'react-router-dom'
import { updateUsers,updateisUserLogged,updateuserPreference} from '../slices/userSlice'
import { useSelector,useDispatch } from 'react-redux'
import Home from '../pages/Home'
import { Table } from 'react-bootstrap';
import Container from 'react-bootstrap/Container'

function UserList(props) {

    let[tab,settable]=useState([])

    const navigate=useNavigate()

    const userTable=useSelector((state)=>state.user.userState)
    const dispatch=useDispatch()

    const userPreference=useSelector((state)=>state.user.userPreference)

    const isUserLogged=useSelector((state)=>state.user.isUserLogged)

    useEffect(()=>{
    //   if(localStorage.getItem('login')=='success'){
       
        manageusers()
    //   }
    //   else{
    //     navigate("/Login")
    //   }

     if (localStorage.getItem('login')=='true'){
      dispatch(updateisUserLogged(true))
     }
      

    },[])

    const logout = ()=>{
      navigate("/Login")
      localStorage.removeItem("login")
      dispatch(updateisUserLogged(false))
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
    const check =(id)=>{
      if( localStorage.getItem("login")=="true"){
        
        navigate(`/users/${id}`)
      }
      else{
        dispatch(updateuserPreference(id))
        localStorage.setItem("guest","true")
        navigate("/login")
      }
     
    }

    const isLogged=useSelector((state)=>state.user.isUserLogged)
    console.log(isLogged)

   


  return (
    <div>
      {JSON.stringify(userTable)}
        {/* <h1>Welcome to Home Page</h1> */}
        {JSON.stringify(isUserLogged)}
        
        <Container>
        <Table striped bordered hover variant="dark">
           <thead>
           <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Password</th>
                <th>Aadhar</th>
                <th>View</th>
                {props.isDeleteVisible?<th>Delete</th>:null}
            </tr>
           </thead>
            <tbody>
                {
                    tab.map((data)=>(
                    <tr>
                    <td>{data.id}</td>
                    <td>{data.name}</td>
                    <td>{data.email}</td>
                    <td>{data.password}</td>
                    <td>{data.aadhar}</td>
                    <td><button onClick={()=>check(data.id)}>view</button></td>
                    {/* <td><Link to={(`/users/${data.id}`)}>view</Link></td> */}

                    {props.isDeleteVisible?<td><button onClick={()=>deleteUser(data.id)}>delete</button></td>:null}
                    </tr>)
                   )
                }
                
            </tbody>
            </Table>
        </Container>
       
        {isLogged?<h1><button onClick={()=>logout()}>Logout</button></h1>:null}
        {/* {JSON.stringify(props)} */}
    </div>
  )
}

export default UserList;