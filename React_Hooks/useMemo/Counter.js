import React, { useMemo, useState } from 'react'

function Counter() {
    const [counterOne ,setCounterOne] = useState(0)
    const [counterTwo ,setCounterTwo] = useState(0)

    const addOne = () => {
        setCounterOne(prev => {
            return prev + 1
        })
    }
    const addTwo = () => {
        setCounterTwo(prev => {
            return prev + 1
        })
    }

    // the return type of this function is boolean since it returns a conditional
    const isEven = useMemo(() => {
        let i 
        //Delay 
         while(i < 200000000000000) i++
        return counterOne % 2  === 0
    },[counterOne])


  return (<>
    <div>Counter</div>
    <div>
        <button onClick={addOne}>add 1 - {counterOne}</button>
        <span>{isEven()? <>Even</> : <>Odd</>}</span>
    </div>

    <div>
    <button onClick={addTwo}>add 2 - {counterTwo}</button>
    </div>
    </>
  )
}

export default Counter