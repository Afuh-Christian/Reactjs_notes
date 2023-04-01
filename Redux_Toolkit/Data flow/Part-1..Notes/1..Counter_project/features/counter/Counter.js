import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, resetTozero,incrementByAmount } from './counterSlice'

 function Counter() {
    //............state.counter.value ..... counter is from the store.js ..................
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  const [incrementAmt, setIncAmt] = useState(0)
 
  //..........to check if it's a number..................
    const addValue = Number(incrementAmt) || 0

  function Inc(event){
    setIncAmt((prev) => {
        const {name,value} = event.target
        if (name === "inc")
        return value
    })
  }

  function reset(){
    dispatch(resetTozero())
    setIncAmt(0)
  }

  return (
    <div>

       
        <input
        name="inc"
        onChange={Inc}
        />
       

        {/* <input type="submit" value="amount"/> */}
       
        <p> <span>{count}</span></p>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
       
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <button
          aria-label="Decrement value"
          onClick={reset}
        >
          Reset
        </button>

        <button
          aria-label="Decrement value"
          onClick={()=>dispatch(incrementByAmount(addValue))}
        >
          Add by
        </button>
      </div>
    </div>
  )
}


export default Counter
