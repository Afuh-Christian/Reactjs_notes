import React, { useEffect } from "react";
import { useState } from "react";
import { memeData } from "../memesData";
import './component.css'

export default function MemeGenerator(){
   

    // const [meme , setMeme] = useState({
    //     topName:"",
    //     bottomName: "",
    //     pic_url:"./logo192.png"

    // })


//.....................api...............
    const [memeAPIdata, setMemeAPIData] = useState([])

  

    useEffect(()=>{
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => setMemeAPIData(data.data.memes))
        //.....We don't need any dynamic dependency array set because the setMemeObjectApiData is being called every time we select a random image  ........
    },[])




    const [memeObject, setMemeObjectApiData] = useState({
        id:"",
        name:"",
        url:"./logo192.png",
        width:0,
        height:0,
        box_count:0 
    })
    

    function getApi(){
        var random = Math.floor(Math.random() * memeAPIdata.length)
        setMemeObjectApiData((precObject)=>{
            return{
                ...precObject,
                id:memeAPIdata[random].id,
                name:memeAPIdata[random].name,
                url:memeAPIdata[random].url,
                width:memeAPIdata[random].width,
                height:memeAPIdata[random].height,
                box_count:memeAPIdata[random].box_count

            }
        })
    }

//.....................api...............

    return(
        <>
        <div className="Body">
           <div className="forms">
               <form>
                   <input 
                   name="topName"
                 
                   type="text" placeholder="Give me an emogi" value={memeObject.name}/>
                   <input 
                   
                   name="bottomName"
                   
                   type="text" placeholder="Enter something" value={memeObject.name}/>
               </form>
               <button onClick={getApi}>Get more images</button>
           </div>
           <div className="emogi">
           <img src={memeObject.url}/>
               
           </div>
          <div>
            {/* <p>
                {JSON.stringify(memeAPIdata,null,)}
            </p> */}

            {/* <p>
                {JSON.stringify(memeAPIdata[0].id,null,)}
            </p> */}

           {/* <p>
                {JSON.stringify(memeAPIdata[0],null,2)}
            </p> */}

        </div>



       </div>
        </>
       
    )
}
