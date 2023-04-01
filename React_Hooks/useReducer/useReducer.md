# What is useReducer

    -A hook for statemanagement
    -It's an alternative to useState

# What's the difference between useState and useReducer

    -useState is built using useReducer

# reduce() in Javascript

    -Is an array method that excutes a reducer function(that you provide)  on each element on the array , resulting in a single output value

    this example will sum up all the array elements

    const array1 = [1,2,3,4]
    const reducer = (acc, cur) => acc + cur

    // 1 + 2 +3 +4
    console.log(array1.reduce(reducer))
    // output : 10

    //5 + 1 + 2 + 3 +4
    console.log(array1.reduce(reducer, 5 ));
    // output : 15

# useReducer in react

# diffrence btwn them

# reducer

1 - array.reduce(reducer,initialValue)

2 - SingleValue = reducer(accumulator,itemValue)

3 - Returns a single value

# useReducer

1 - useReducer(reducer,initialState)

2 - NewState = reducer(currentState, action)

3 - Returns a pair of values [newState , dispatch]

# Summary

-useReducer
-Is a hook for state management in react
-Is related to reducer functions
-useReducer(reducer, initialState)
-reducer(currentState, action)

# ......................................Example 1.............................................................

# 1 .. Instantiate the reducer funtion and initialState outside the component

const initialState = 0

const reducer = (state , action) =>{
return
}

# 2 .. import and use the useReducer hook

useReducer(reducer,initialState)

# 3 .. action refers to the various functions the reducer can have and we will use the switch statement for them

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

# 4 ... useReducer returns two values

const [count, dispatch] = useReducer(reducer,initialState)

# 5 ... dispatch helps us execute the code for a particalar action

# so we can now include these actions in the jsx

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

# Full code .................

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

# .................................

# .......................Example 2 ......................with objects as initialState

# ......................Part one .. object as initialState

# 1 .. action has properties

    -value
    -type

# in the dispatch we pass in and object with attribute

    dispatch({type : "increment"})

# we also pass action.type in the switch statements and they return objects

# full code .........................

import React, { useReducer } from 'react'

const initialState = {
firstCounter : 0
}

const reducer = (state , action) =>{
switch(action.type){
case "increment":
return {firstCounter : state.firstCounter + 1}

        case "decrement":
            return {firstCounter : state.firstCounter - 1}

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
<div> {count.firstCounter} </div>
<button onClick={() => dispatch({type : "increment"})}>increment</button>
<button onClick={() => dispatch({type : "decrement" })}>decrement</button>
<button onClick={() => dispatch({type : "Reset" })}>Reset</button>
</>
)
}

export default CounterTwo

# ...............................

# .........................Part 2 incrementing by ....

- Here we use the value property of the action

-dispatch(type : "increment" ,value:5)

-this means increment by 5

# in the reducer

{firstCounter : state.firstCounter + action.value}

# ..... full code ....

import React, { useReducer } from 'react'

const initialState = {
firstCounter : 0
}

const reducer = (state , action) =>{
switch(action.type){
case "increment":
return {firstCounter : state.firstCounter + action.value}

        case "decrement":
            return {firstCounter : state.firstCounter - action.value}

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
<div> {count.firstCounter} </div>
<button onClick={() => dispatch({type : "increment" ,value:1})}>increment</button>
<button onClick={() => dispatch({type : "decrement" ,value:1})}>decrement</button>

    <button onClick={() => dispatch({type : "increment" , value :5})}>increment 5</button>
    <button onClick={() => dispatch({type : "decrement" ,value: 10})}>decrement 10</button>
    <button onClick={() => dispatch({type : "Reset" })}>Reset</button>
    </>

)
}

export default CounterTwo

# ....................

# .................Part 2 .... if we had to maintain the state of more that one properties of the object

# new property

# notice what happened in the switch statement

# .....full code ...............

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
<div>secondCounter {count.secondCounter}</div>
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

# ...............................

# .........................Examples 3 ...................

# theres a better way of maintaining the state multiple variables

# Using multiple reducer funtions since they useReducer parameters have thesame behaviors

# count2 , dispatch2 are new .....

const [count, dispatch] = useReducer(reducer,initialState)
const [count2 , dispatch2] = useReducer(reducer,initialState)

# ........full code ....................

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
<div>secondCounter {count.secondCounter}</div>
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

# ......................................

# useReducer is just for local state management

# For it to be global ... we need to = > useReducer + useContex
