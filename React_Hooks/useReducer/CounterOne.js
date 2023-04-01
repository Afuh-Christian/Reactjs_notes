import React, { useReducer } from 'react'


const initialState = 0

const reducer = (state , action) =>{
    switch(action){
        case "increment":
            state = state + 1 
        break; 
        case "decrement": 
            state = state - 1 
        break; 
        case "Reset": 
            state = 0 
        break; 
        default :
            state = state
    }
    return state
}

function CounterOne() {

   const [count, dispatch] = useReducer(reducer,initialState)

  return (<>
    <div>CounterOne</div>
    <div> {count} </div>
    <button onClick={() => dispatch("increment")}>increment</button>
    <button onClick={() => dispatch("decrement")}>decrement</button>
    <button onClick={() => dispatch("Reset")}>Reset</button>
    </>
  )
}

export default CounterOne