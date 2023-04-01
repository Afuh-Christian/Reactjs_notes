import React from "react";
import { ReactDOM } from "react";
import "./ComponentStyle.css";


export default function NavBar(){
    return(
        <>
        <nav className="Nav">
            <img className="logo" src="./logo192.png"/>
           
            <div className="Title">
                React Navbar
            </div>
        </nav>
        </>
    )
}