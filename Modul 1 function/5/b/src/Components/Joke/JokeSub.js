import React from "react";
import { useState } from "react";


export default function JokeSub(props){
    const [isShown, setShowm] = useState(false) 
    
    function toggle(){
        setShowm((previsShown) => {
            const r = !previsShown
            return r
        })
    }

    return(
        <div>
            {isShown && <p>Yes</p> || <p>No</p>}
            <button onClick={toggle}>Toggle value</button>

         
         </div>
    )}