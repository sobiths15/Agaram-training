import { useEffect, useState } from "react"
function Timer(){
  let[timer,setTimer]=useState(0)
  let[timeChange,settimeChange]=useState(true)

  useEffect (()=>{
    if(timeChange){
      setTimer(timer+1)
    }
  },[timer,timeChange]
  )
  // const stop=()=>{
  
  //     settimeChange(timeChange=false)
    
  // }
   return (
    <div>
     
   <h1>Timer</h1>
    {timer}
    <button type="button" onClick={()=>settimeChange(!timeChange)}>{timeChange?'Stop':'Start'}</button>
    <button type="button" onClick={()=>{settimeChange(false);setTimer(0)}}>Reset</button>
    </div>
    )
}
export default Timer
