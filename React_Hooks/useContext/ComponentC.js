import React, { useContext } from 'react'
import { Context } from './ComponentA'



function ComponentC() {
    const a = useContext(Context)
    return (
    <>
    <div>ComponentC</div>
    <p>{a}</p>
    </>
  )
}

export default ComponentC


