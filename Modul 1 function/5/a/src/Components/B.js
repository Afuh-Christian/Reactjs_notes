import React from "react";
import { useState } from "react";


export default function B(props){
    return(
        <div>
        <button onClick={props.ChangeComponent}>Change (B)</button>
          <p>{props.component}</p>
       </div>
    )}



