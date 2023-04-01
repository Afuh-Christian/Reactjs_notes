import React, { useEffect, useState } from "react";


export default function UseEffect(){ 
    const [count,setCount] = useState(0)
  
    
    function Add(){
        setCount((prevcount)=>
        {
            const i = prevcount + 1
            return i 
        })
    }
    
    useEffect(() => {
        console.log("Hello useEffect base")
    },[count])
    
    return(
        <div>
            
        <h1>UseEffect in action</h1>

<button onClick={Add}>Add</button>

<p>{count}</p>
        </div>
    )

}