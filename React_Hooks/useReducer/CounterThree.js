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

function CounterThree() {

   const [count, dispatch] = useReducer(reducer,initialState)
    const [count2 , dispatch2] = useReducer(reducer,initialState)

  return (<>
    <div>CounterThree</div>
    <div>count : {count} </div>
    <button onClick={() => dispatch("increment")}>increment</button>
    <button onClick={() => dispatch("decrement")}>decrement</button>
    <button onClick={() => dispatch("Reset")}>Reset</button>

    <div>count2 : {count2} </div>
    <button onClick={() => dispatch2("increment")}>increment</button>
    <button onClick={() => dispatch2("decrement")}>decrement</button>
    <button onClick={() => dispatch2("Reset")}>Reset</button>
    </>
  )
}

export default CounterThree