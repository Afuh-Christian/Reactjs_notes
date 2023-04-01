import React, { useEffect, useState } from 'react'

export default function FetchZii() {


    const [apidata, setApiData] = useState([])

    useEffect(() =>{

        

        async function getPeople() {
            const res = await fetch(`http://127.0.0.1:8000/items/`)
            const data = await res.json()
            setApiData([...data])
        }

       
        getPeople()
        console.log("send api data")
        console.log(apidata)
    
    },[])

  return (
    <div>
        <p>{JSON.stringify(apidata ,null,2)}</p>

    {/* {()=>apidata.map(data => {
     return <p>{data.Name}</p>
    })} */}
 
   {apidata[2].name}
 
  {/* <p>{apidata.length}</p> */}
  {/* <p>{apidata}</p> */}
  
  </div>
  )
}
