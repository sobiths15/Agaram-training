import { useEffect} from "react"
import {useNavigate} from "react-router-dom"
import { useSelector,useDispatch } from "react-redux";
import { updateLogin,updateisUserLogged,updateuserPreference } from "../slices/userSlice";
import axios from 'axios';



function Login(){

    const loginDetails=useSelector((state)=>state.user.loginState)
    const dispatch=useDispatch()

    const navigate = useNavigate();

    const userPreference=useSelector((state)=>state.user.userPreference)

    const isUserLogged=useSelector((state)=>state.user.isUserLogged)

    useEffect(()=>{
      if(localStorage.getItem("login")=="true"){
        
        navigate("/")
        
      
      }

    }
    )

 
    // let[loginData,setLogin]=useState({
    //     email:'',
    //     password:''
    // })

    // dispatch(updateLogin(loginData))
    

    const checkLogin=()=>{
   

    axios.post(`http://agaram.academy/api/action.php?request=candidate_login&email=${loginDetails.email}&password=${loginDetails.password}`)
  //   axios({
  //     method:'post',
  //     url:'http://agaram.academy/api/action.php',
  //     request:'candidate_login',
  //     Data:loginDetails
  // })
    .then(response=>{
      console.log(response)
      
      let checkLog=response.data.status
  //     if(checkLog=='success'){

  

    localStorage.setItem('login','true')

   
    
  //   console.log(localStorage.getItem('login'))
  //   dispatch(updateisUserLogged(true))
  //   // navigate("/")
    
  //   if(userPreference){
      
  //     navigate(`/users/${userPreference}`)}
  //   }
  //   else{
  //   navigate("/login")
    
  // }
  if(localStorage.getItem("guest")){
    localStorage.removeItem("guest")
    navigate(`/users/${userPreference}`)

    
  }
  
  else{
    navigate("/")
  }

  
  }
  )

    }

    return(
       
        <>

        {/* {JSON.stringify(userDetails)} */}
        <h1>Login</h1>
        {/* {JSON.stringify(loginData)} */}
        {JSON.stringify(loginDetails)}

        {JSON.stringify(userPreference)}

        {JSON.stringify(isUserLogged)}

         <h3> Email: <input type="email" id="email" onKeyUp={(e)=>dispatch(updateLogin({
            ...loginDetails,
            email:e.target.value
         }))}/></h3>
          <h3>Password:<input type="password" id="password" onKeyUp={(e)=>dispatch(updateLogin({
            ...loginDetails,
            password:e.target.value
          }))}/></h3>
          <button type="button" onClick={()=>checkLogin()}>Login</button>
          

          {/* <button onClick={()=>dispatch(changeName("sobith"))}>name</button> */}
        {/* {()=>dispatch(changeN("sobith"))} */}
        </>
    )
    
}

export default Login;