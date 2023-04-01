
import React from 'react'

const Child = ({setValue}) => {
console.log("Child")
  function SetAlter(){
    setValue((prev) => {
      return !prev
    })
  }
    
  return (
    <div>

     <button onClick={SetAlter}>alter</button>

    </div>
  )
}

export default React.memo(Child)