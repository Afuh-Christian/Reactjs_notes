import React, { useEffect, useRef } from 'react'

const FocuInput = () => {

    const inputref = useRef(null)

    useEffect(()=>{
 // fucos function here 

 inputref.current.focus()

    },[])

  return (
    <div>
        <input ref={inputref} type="text"/>
    </div>
  )
}

export default FocuInput