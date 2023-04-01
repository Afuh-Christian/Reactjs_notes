import React, { createContext, useReducer } from 'react'
import A from './A'
import B from './B'
import C from './C'


export const CountContext = createContext() 

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



function Global() {

    const [count, dispatch] = useReducer(reducer,initialState)

    const countglobal = {
        count:count ,
        dispatch:dispatch
    }
  return (
    <div>
        <h1>Global</h1>
        <CountContext.Provider value={countglobal}>
        <A/>
       <B/>
       <C/>
       </CountContext.Provider>
    </div>
  )
}

export default Global