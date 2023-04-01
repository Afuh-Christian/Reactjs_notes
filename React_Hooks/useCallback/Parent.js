

import React, { useCallback, useState } from 'react'
import Child from './Child'
import NotRenderChild from './NotRenderChild'

const Parent = () => {
  console.log("parent")

    const[value , setValue] = useState(false)

    const[othervalue, setothervalue] = useState(false)

    // function SetAlter(){
    //   setothervalue((prev) => {
    //     return !prev
    //   })
    // }

    const SetAlter = useCallback(()=>{
      setothervalue((prev) => {
        return !prev
      })

  },[othervalue])

  return (
    <div> <h1>useCallback/React.memo</h1>

        <p>{value === false && <>False</> || <>True</>}
        </p>
        <p>{othervalue === false && <>False</> || <>True</>}
        </p>

        <Child setValue={setValue}/>

        <NotRenderChild SetAlter={SetAlter}/>
    </div>
  )
}

export default React.memo(Parent)