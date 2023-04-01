import React from "react";
import "./Component.css"
import logo from "../images/christian.jpg"




export function Sum(a,b){
    return a+b;
}


export default function Cat({pic,name,phone,email,age,isReal,comments}){
    // var {pic,name,phone,email} = props
    function check_phone(){
        if(phone){
        return phone;
    }else{
        return "No phone number";
    }
}
    return(
        <>
        <div className="Cat">         
             <ul className="Cat_cover">
            <li> <img src={pic}/></li>
            {name && <li><h3>{name}</h3></li> || <li><h3>No name</h3></li>}
         
           <li>{check_phone()}</li>
           {/* <li>{phone}</li> */}
            <li style={{display: email ? "block" : "none"}}>{email}</li>
            
            <li>{age}</li>
            <li>
            {comments[0].author}</li>
        </ul>
        </div>

      

        </>
    )
}