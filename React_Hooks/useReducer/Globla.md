# useReducer is just for local state management

# For it to be global ... we need to = > useReducer + useContex

# .............. useReducer + useContext ...................

# Out goal is to maintain a state in Global.js and be able to modify it in all the other child components

# 1 ..... in Global.js

    -reducer
    -initiailState
    -useReducer()

# code ....

import React, { useReducer } from 'react'
import A from './A'
import B from './B'
import C from './C'

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

return (

<div>
<h1>Global</h1>
<A/>
<B/>
<C/>
</div>
)
}

export default Global

# ........

# 2 ... Use Context to provide the count and dispatch to the the nested components

# .. code ....

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

# ....................................

# 3 .. now trying to use them through the child components

# code ......

import React, { useContext } from 'react'
import { CountContext } from '../Global'

function D() {
const countContext = useContext(CountContext)

    const {count , dispatch} = countContext

return (
<div>

<div> Count in D: {count} </div>
    <button onClick={() => dispatch("increment")}>increment</button>
    <button onClick={() => dispatch("decrement")}>decrement</button>
    <button onClick={() => dispatch("Reset")}>Reset</button>

    </div>

)
}

export default D

# ........................
