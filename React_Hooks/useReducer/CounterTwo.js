import React, { useReducer } from 'react'


const initialState = {
    firstCounter : 0,
    secondCounter : 10
}

const reducer = (state , action) =>{
    switch(action.type){
        case "increment":
            return {...state,
                firstCounter : state.firstCounter + action.value} 
        case "decrement": 
            return {
                ...state,
                firstCounter : state.firstCounter - action.value} 
        case "increment2":
            return {...state,
                secondCounter : state.secondCounter + action.value} 
    
        case "decrement2": 
            return {...state,
                secondCounter : state.secondCounter - action.value} 
        
        case "Reset": 
           // return {firstCounter : initialState.firstCounter}  
           return initialState
        default :
            return state
    }
   
}

function CounterTwo() {

   const [count, dispatch] = useReducer(reducer,initialState)

  return (<>
    <div>CounterTwo</div>
    <div>firstCounter {count.firstCounter} </div>
    <div>secondCounter  {count.secondCounter}</div>
    <div>
    <button onClick={() => dispatch({type : "increment" ,value:1})}>increment</button>
    <button onClick={() => dispatch({type : "decrement" ,value:1})}>decrement</button>
    <button onClick={() => dispatch({type : "increment" , value :5})}>increment 5</button>
    <button onClick={() => dispatch({type : "decrement" ,value: 10})}>decrement 10</button>
    </div>
    <div>
    <button onClick={() => dispatch({type : "increment2" ,value:1})}>increment2</button>
    <button onClick={() => dispatch({type : "decrement2" ,value:1})}>decrement2</button>
    <button onClick={() => dispatch({type : "increment2" , value :5})}>increment2 5</button>
    <button onClick={() => dispatch({type : "decrement2" ,value: 10})}>decrement2 10</button>
    </div>

    
   
    <button onClick={() => dispatch({type : "Reset" })}>Reset</button>
    </>
  )
}

export default CounterTwo