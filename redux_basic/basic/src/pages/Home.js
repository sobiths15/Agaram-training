import React from 'react'
import axios from 'axios'
import { useState,useEffect } from 'react'
import { useNavigate,Link } from 'react-router-dom'
import { updateUsers } from '../slices/userSlice'
import { useSelector,useDispatch } from 'react-redux'
import UserList from '../components/UserList'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Table } from 'react-bootstrap';
import Container from 'react-bootstrap/Container'

function Home() {

    let[tab,settable]=useState([])

    const navigate=useNavigate()

    const userTable=useSelector((state)=>state.user.userState)
    const dispatch=useDispatch()

    // useEffect(()=>{
    //   if(localStorage.getItem('login')=='success'){
    //     manageusers()
      
    //   }
     
    //   else{
    //     navigate("/Login")
    //   }
      

    // },[])

    // const logout = ()=>{
    //   navigate("/Login")
    //   localStorage.setItem("login","error")
    // }

    const manageusers = ()=>{
        axios.get('http://agaram.academy/api/action.php?request=getAllMembers').then(response=>{
      console.log(response)

      let userdata=response.data.data
      dispatch(updateUsers(settable(userdata)))

    })
    }
    // const deleteUser=(id)=>{
    //   axios.get(`https://agaram.academy/api/action.php?request=removeMember&id=${id}`).then(function(response){
    //     console.log(response)
    //     manageusers()
    // })

    // }

  return (
    <div>
      {JSON.stringify(userTable)}
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

        <h1>Welcome to Home Page</h1>
        
        
        
        <UserList isDeleteVisible={false} logOut={false}/>
    </div>
  )
}

export default Home;