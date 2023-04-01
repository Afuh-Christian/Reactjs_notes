import React from "react";  

export default function MapStudents({name,age}){
    // function mapto(){
    //     return list.map(a => <><p>{a.name}</p><p>{a.age}</p></>)
    //  }
    return(
        <div>
            {/* {mapto()} */}
            <p>{name}</p>
            <p>{age}</p>
        </div>
    )
}