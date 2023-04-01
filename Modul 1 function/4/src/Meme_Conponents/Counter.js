import React from "react";
import { useState } from "react";


export default function Count(){
    
    const [count, setCount] = useState(0)

    function Add(){
        setCount((prevcount) => (prevcount + 1))
    }

    

    function Subtract(){
        setCount((prevcount) => (prevcount - 1))
    }
    
    return(
        <div>
        <p><button onClick={Add}>Add</button><button onClick={Subtract}>Subtract</button></p>
        <p>{count}</p>
        </div>
    )
}

