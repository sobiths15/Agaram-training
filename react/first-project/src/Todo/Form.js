import { useState } from "react";

function Form(props){
    // let commonData=()=>{
        let [inputValues,setinputs]=useState("")
        console.log(props.item)
return(
    <><input type="text" id="add" onKeyUp={(e)=>setinputs(e.target.value)}/> 
    <button onClick={()=>
    props.setItem([...props.item,inputValues])}>add</button>
   
    </>
    
)
                        
}
export default Form;