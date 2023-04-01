import React, { useEffect, useState } from "react";

export default function WindowTracker(){
 const [windowWidth, setWindowWidth] = useState(window.innerWidth)



    useEffect(() => {
        function Watchwidth(){
         console.log("setting up........")
            setWindowWidth(window.innerWidth)
        }
        window.addEventListener("resize",Watchwidth)
        
        
        return function(){
            console.log("Cleaned up....")
            window.removeEventListener("resize",Watchwidth)
         }
    },[])

    return(
        <div> 
            <h1>Window widtlh:  {windowWidth}</h1>
        </div>
    )
}