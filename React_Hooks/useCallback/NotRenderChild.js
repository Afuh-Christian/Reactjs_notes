

import React from 'react'

const NotRenderChild = ({SetAlter}) => {

    console.log("OTHER CHILD")

  return (
    <div>
        <button onClick={SetAlter}>other Child</button>
    </div>
  )
}

export default React.memo(NotRenderChild)