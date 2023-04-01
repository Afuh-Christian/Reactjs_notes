import React from "react"; 
import './component.css';
import logo from '../logo.svg';

export default function Header(){
    return(
        <div className="Header">
            <div>
            <img src={logo} />
            <h1>Meme Generator</h1>
            </div>
            <div>React-Course project-3</div>
        </div>
    )
}