import React, { useEffect, useState } from "react";


export default function Api_get_each(){

    const [starWarData, setStarWarsData] = useState({})

    
    const [count,setCount] = useState(1)

    //    ....component - fetch - setStarWarsData - component - fetch.....   (the component runs in an infinit loop) 
    
    useEffect(() =>{
        console.log("send me")
    fetch(`https://swapi.dev/api/people/${count}`)
    .then(res => res.json())
    .then(data => setStarWarsData(data))
    },[count])
    

  
    
    function GetNext(){
        setCount((prevcount)=>
        {
            const i = prevcount + 1
            return i 
        })
    }
    
        return(
          
            <div>
                  <h1>UseEffect in action</h1>
                <h1>Api</h1>
            <p>{JSON.stringify(starWarData ,null,2)}</p>
    
            <br></br>
    
            <p>{starWarData["name"]}</p>
            <p>{starWarData.name}</p>
            

<button onClick={GetNext}>Get next Actor</button>

<p>{count}</p>
    
            </div>
        )
        }