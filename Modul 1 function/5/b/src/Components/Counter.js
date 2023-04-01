import React from "react";
// import { useState } from "react";


export default function Counter(props){

    return(
        <div>
        <div>
        <p>{props.count}</p>
        </div>
        <div>
        <h1>Change state of parent component through child component(Passing function as props)</h1>
        <p><button onClick={props.Add_P}>Add</button><button onClick={props.Subtract_P}>Subtract</button></p>
          
        </div>

        </div>


    )
}

