import React, { useEffect, useState } from "react";



export default function UseEffect_fetchApi(){
   

  const [starWarData, setStarWarsData] = useState({})
  //    ....component - fetch - setStarWarsData - component - fetch.....   (the component runs in an infinit loop) 
  
  useEffect(() =>{
      console.log("send me")
  fetch("https://swapi.dev/api/people/1")
  .then(res => res.json())
  .then(data => setStarWarsData(data))
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