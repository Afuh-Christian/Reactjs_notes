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