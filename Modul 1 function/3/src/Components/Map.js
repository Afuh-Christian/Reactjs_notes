import React from "react";

export default function Map(){
     const list = ["Chris","Tanlaka","Duke"]

     function mapto(){
        return list.map(a => <p>{a}</p>)
     }
     
    return(
        <div>
            {mapto()}
        </div>
    )
}