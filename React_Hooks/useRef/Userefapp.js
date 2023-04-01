import React from 'react'
import FocuInput from './FocuInput'

const Userefapp = () => {
  console.log("Useref App")
  return (<>
  <br/>
    <h1>UseRef</h1>
    <div>
    <FocuInput/>
    </div>

    </>
  )
}

export default  React.memo(Userefapp)
