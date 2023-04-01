import React from "react";  
import { useState } from "react";

export default function UseStateObject(){
    
    const [contact , setContact] = useState({
        name : "Afuh christian",
        phone: 671018950,
        age:21,
        image_url:"",
        isMale:true
    })

    function swappGender(){
        setContact((prevcontact) => ({...prevcontact, isMale:!prevcontact.isMale}))
    }

    var messi = "./PicturesDeveloper/paris_messi.jpg"
    var yello = "./PicturesDeveloper/paris_yello.jpg"

    
    return(
        <div className="object_cover">
            <div className="object">
                <div>
                <p>{contact.name}</p>
                <p>{contact.age}</p>
                <p>{contact.phone}</p> 
                </div>             
            </div>
            <img onClick={swappGender} src={contact.isMale? messi:yello}/>
                        
         
        </div>
    )
}