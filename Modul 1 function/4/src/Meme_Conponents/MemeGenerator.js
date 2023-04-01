import React from "react";
import { useState } from "react";
import { memeData } from "../memesData";
import './component.css'

export default function MemeGenerator(){
   

    const [meme , setMeme] = useState({
        topName:"",
        bottomName: "",
        pic_url:"./logo192.png"

    })

    function changeMemeDemo(){

        var random = Math.floor(Math.random() * memeData.length)

        setMeme((prevmeme => ({
            ...prevmeme,
            topName:memeData[random].topName,
            bottomName:memeData[random].bottomName,
            pic_url:memeData[random].pic_url
        })))
    }
    return(
        <>
        <div className="Body">
           <div className="forms">
               <form>
                   <input 
                   name="topName"
                 
                   type="text" placeholder="Give me an emogi" value={meme.topName}/>
                   <input 
                   
                   name="bottomName"
                   
                   type="text" placeholder="Enter something" value={meme.bottomName}/>
               </form>
               <button onClick={changeMemeDemo}>Get more images</button>
           </div>
           <div className="emogi">
           <img src={meme.pic_url}/>
               
           </div>
           <div id="Hello"></div>


       </div>
        </>
       
    )
}
