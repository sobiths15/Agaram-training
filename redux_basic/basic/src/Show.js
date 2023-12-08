import { useDispatch,useSelector } from "react-redux";
import { increment,decrement,incrementByAmount} from "./slices/counterSlice";
import React from 'react';


function Show() {

  const count=useSelector((state)=>state.counter.count)
  const dispatch=useDispatch()

  return (
    
    <>Counter
      <h1>hello
        dd
      </h1>   
      <p>{count}</p>
      <button onClick={()=>dispatch(increment())}>+</button>
      <button onClick={()=>dispatch(decrement())}>-</button>
      <button onClick={()=>dispatch(incrementByAmount(1000))}>++</button>
    </>
  )
}

export default Show;

