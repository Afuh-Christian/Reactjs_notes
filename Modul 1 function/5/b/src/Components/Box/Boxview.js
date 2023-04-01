import React from "react";
import { useState } from "react";
import "../C.css"

export default function Boxview(props){

    // const [box_b, setBox_b] = useState(props.box)

    // function ChangeColor(){
    //     setBox_b((prevbox_b) => ({
    //         ...prevbox_b,
    //         on: !prevbox_b.on
    //     }))
    // }




    const StyleBox = {
        backgroundColor: props.on? "blue" : "Yellow" 
    }

    return(
      
            <div onClick={props.ChangeColor} style={StyleBox} className="Box">
                
            </div>
            
    )}



