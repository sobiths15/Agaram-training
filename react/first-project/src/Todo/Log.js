import React,{useState} from 'react'
import {useDispatch}from 'react-redux'
import { login } from '../Youusers';
import { logout } from '../Youusers';
import {useSelector} from 'react-redux'


function Log() {
  const dispatch=useDispatch();
  const [name,setName]=useState('');
  const [age,setAge]=useState();
  const [email,setEmail]=useState('');

  

  const user= useSelector(state=>state.user.value)
  return (
    <div>
      {!user.name && (<div>
       <h3> Name: <input value={name} onChange={e=>setName(e.target.value)}/></h3>
      <h3>Age: <input value={age} onChange={e=>setAge(e.target.value)}/></h3>
      <h3>Email: <input value={email} onChange={e=>setEmail(e.target.value)}/></h3>
      </div>)}
      

       {!user.name?
       <button onClick={()=>dispatch(login(
          {name,age,email}
        ))}>Login</button>:
        <button onClick={()=>dispatch(logout()
        )}>Logout</button>}
    </div>
  )        
}

export default Log