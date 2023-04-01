
import { useCallback, useEffect, useState } from 'react';
import React from "react"

export const WebNew = () => {

    const [firstname, setFirstname ] =useState("")

    const [listmessage, setListMessage] = useState([])

    function Handlechange(event){
        setFirstname((prevfirstname) => {
            const e = event.target.value 
            return e
        })
    }
    

    
    const socketUrl = `ws://127.0.0.1:8000/ws/socket-server/`
    const chatSocket =new WebSocket(socketUrl)

    useEffect(()=>{
    chatSocket.onmessage  = function(e){
        const data = JSON.parse(e.data)
        if(data.type === 'chat'){
            setListMessage((prevList) => {
                return [
                    ...prevList,
                    data.message
                ]
            }
            )
        }
    }

    chatSocket.onopen = () => {
        console.log("Connected")
    }

},[])


function Submitform(event){
         event.preventDefault()
         chatSocket.send(JSON.stringify({
            'message': firstname
        }))
        useEffect(()=>{
            setListMessage((prevList) => {
                return [
                    ...prevList,
                    firstname
                ]
         } )
        })
        
  
}

  
     const MList = listmessage.map( m => <p key={m}>{m}</p>
      )


    return(
        <div>
        <h1>Form</h1>
   <form onSubmit={Submitform}>
       <input 
       type= "text"
       placeholder="Enter value"
       name = "message"
       onChange={Handlechange}
       />
       <input type="submit" value="send"/>
   </form>

   <p>{firstname}</p>

<div>{MList}</div>

</div>
)
}


  