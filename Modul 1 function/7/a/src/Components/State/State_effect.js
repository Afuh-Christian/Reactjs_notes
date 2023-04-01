import React, {  useState } from "react";
import WindowTracker from "./WindowT racker";


export default function State_effect(){
    const [show, setShow ] = useState(true)

    function Toggole(){
        setShow((prevshow) => {
            return !prevshow
        })
    }

    return(
        <div>
            <button onClick={Toggole}>
                Toggole Window Tracker
            </button>

            {show && <WindowTracker/>}
        </div>
    )

}

