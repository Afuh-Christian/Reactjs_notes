import React, { useEffect, useState } from "react";


export default function Async(){



  const [starWarData, setStarWarsData] = useState({})
//    ....component - fetch - setStarWarsData - component - fetch.....   (the component runs in an infinit loop) 

useEffect(() =>{

    async function getPeople() {
        const res = await fetch("https://swapi.dev/api/people/1")
        const data = await res.json()
        setStarWarsData(data)
    }
    getPeople()

},[])


    return(
        <div>
            <h1>Api</h1>
        <p>{JSON.stringify(starWarData ,null,2)}</p>

        <br></br>

        <p>{starWarData["name"]}</p>
        <p>{starWarData.name}</p>
        <p>Hello api</p>

        </div>
    )
}