import React, { useState } from "react";

export default function Form(){

    const [firstname, setFirstname ] =useState("")
    const [lastname, setLastname ] =useState("")
    

    function Handlechange(event){
        setFirstname((prevfirstname) => {
            return event.target.value 
        })
    }

    function HandlechangeLast(event){
    setLastname((prevfirstname) => {
        return event.target.value 
    })
}

    return(
        <div>
          <h1>Form</h1>
            <form>
                <input 
                type= "text"
                placeholder="First name"
               
                onChange={Handlechange}
                />
                  <input 
                type= "text"
                placeholder="First name"
               
                onChange={HandlechangeLast}
                />
            </form>


            <p>{firstname}</p>
            <p>{lastname}</p>

         
        </div>
    )
}