import React from "react";
import { ReactDOM } from "react";
import reactlogo from "../Images/pc.jpg"



export default function Body(){
    return(
        <>
        <main className="body">
          <div className="title"> <h1>Body.....</h1> </div>
          <div><img className="logo" src="./logo192.png"/>
              <img className="logo" src={reactlogo}/>
          </div>
          <ul>
            <li>
            First item
            </li>
            <li>
                second item
                </li>
                <li>
                Third item
                </li>
                <li>
                Last item
                </li>
          </ul>

        </main>


        </>
    )
}