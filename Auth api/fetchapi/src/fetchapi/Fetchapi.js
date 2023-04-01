import React, { useEffect, useState } from 'react'

export default function Fetchapi() {

        const [apidata, setApiData] = useState([])

        useEffect(()=>{

            fetch(`http://127.0.0.1:8000/students/`)
            .then(res => res.json())
            .then(data => setApiData([...data]))
        
            console.log(apidata)
            console.log("Send data")

        },[0])

      
        


  return (
    <div>

{/* <p>{JSON.stringify(apidata ,null,2)}</p> */}

   {/* {()=>apidata.map(data => {
    return <p>{data.Name}</p>
   })} */}

  {/* {apidata[2].Name} */}

 {/* <p>{apidata.length}</p> */}
 <p>{apidata}</p>

    </div>
  )
}
