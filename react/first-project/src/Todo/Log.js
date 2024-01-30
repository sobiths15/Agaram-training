import React,{useEffect, useState} from 'react'
import {useDispatch}from 'react-redux'
import { login } from '../Youusers';
import { logout } from '../Youusers';
import {useSelector} from 'react-redux'
// import {LineChart,Line} from 'recharts'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, ResponsiveContainer, PieChart, Pie, Tooltip, Legend } from 'recharts';
import { json } from 'react-router-dom';

function Log() {
  // const dispatch=useDispatch();
  // const [name,setName]=useState('');
  // const [age,setAge]=useState();
  // const [email,setEmail]=useState('');


  // const data = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400}, ];



  // const renderLineChart = (
  //   <LineChart width={400} height={400} data={data} >
  //     <Line type="monotone" dataKey="uv" stroke="#8884d8" />
  //   </LineChart>
  // );

  // const data = [{name: 'Page b',value:'page c', uv: 6, uv:12, pv: 12, amt: 0}, ];

// const renderLineChart = (

// );
  

  // const user= useSelector(state=>state.user.value)

  const [state,setState]=useState(0);
  const colors=['#0088FE','#00C49F','#FFBB28','#FF4082']

  const fetchApi=()=>{
    fetch('https://mocki.io/v1/59820a81-23ac-455c-a618-8a7ad27ff559')
    .then(res=>res.json())
    .then(json=>setState(json))
  }

  useEffect(()=>{
    fetchApi()
  },[])

  return (
    <div>
      
      {/* <LineChart width={600} height={300} data={data}>
    <Line type="monotone" dataKey="uv"  stroke="#8884d8" />
    <CartesianGrid stroke="#ccc" />
    <XAxis dataKey="name" />
    <YAxis dataKey='pv'/>
    <zAxis dataKey="uv"/>
  </LineChart> */}
      {/* {!user.name && (<div>
       <h3> Name: <input value={name} onChange={e=>setName(e.target.value)}/></h3>
      <h3>Age: <input value={age} onChange={e=>setAge(e.target.value)}/></h3>
      <h3>Email: <input value={email} onChange={e=>setEmail(e.target.value)}/></h3>
      </div>)}
      

       {!user.name?
       <button onClick={()=>dispatch(login(
          {name,age,email}
        ))}>Login</button>:
        <button onClick={()=>dispatch(logout()
        )}>Logout</button>} */}

        <ResponsiveContainer width={800} height={400}>
            <PieChart width={800} height={400}>
                <Pie data={state} dataKey='value' cx="50%" cy="50%" outerRadius="200"></Pie>
                <Tooltip/>
                <Legend/>
            </PieChart>
        </ResponsiveContainer>
    </div>
  )        
}

export default Log