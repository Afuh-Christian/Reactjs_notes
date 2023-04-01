import useWebSocket from 'react-use-websocket';
import { useCallback, useState } from 'react';


export const WebsockApp = () => {
   
    const socketUrl = `ws://127.0.0.1:8000/ws/socket-server/`;

    const [firstname, setFirstname ] =useState("")


// const {
//   sendMessage,
//   sendJsonMessage,
//   lastMessage,
//   lastJsonMessage,
//   readyState,
//   getWebSocket,
// } = useWebSocket(socketUrl,{
//   onOpen: () => console.log('Connection establish.. NICE'),
//   //Will attempt to reconnect on all close events, such as server shutting down
//   shouldReconnect: (closeEvent) => true,
// });
   




// In functional React component
const getSocketUrl = useCallback(() => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(socketUrl);
    }, 2000);
  });
}, []);

const { sendMessage, lastMessage, readyState, getWebSocket } = useWebSocket(
  getSocketUrl,{
  onOpen: () => console.log('Connection establish.. NICE'),
  onClose:() => console.log("Everything Cloed"),
  onMessage:(e) => {
    let data = JSON.parse(e.data)
    // console.log('Data:', data)
    if(data.type === 'chat'){
        console.log(data.message)
        setListMessage((prevList) => {
            // if (event.name = "message"){
            return [
                ...prevList,
                data.message
            ]
        // }
        })
    }
},

// send:() => (JSON.stringify({
//     'message':"firstname"

// }))
}
);

// const websocket =  useWebSocket(socketUrl)
// websocket.options["onOpen"] = () => console.log("Connected chris kdkdk")









const [listmessage, setListMessage] = useState(["hello","Mee to"])

function Handlechange(event){
   
    setFirstname((prevfirstname) => {
        const e = event.target.value 
        return e
    })

}

function Submitform(event){
    event.preventDefault()
    setListMessage((prevList) => {
        if (event.name = "message"){
        
        return [
            ...prevList,
            firstname
        ]
    }
    })
}


 const MList = listmessage.map( m =>  <p key={m}>{m}</p>)


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