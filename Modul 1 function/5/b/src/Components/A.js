import React from "react";
import { useState } from "react";


export default function A(props){

    return(
        <div>
          <button onClick={props.ChangeComponent}>Change (A)</button>
            <p>{props.component}</p>
         </div>
    )}