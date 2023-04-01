import React, { useState } from "react";

import { data } from "../memesData";
import m from '../logo.svg'

function Body(){
    
    const [ url_path, setUrl_path] = useState("./logo192.png")
   
   function changeMeme(){
    setUrl_path(function(){
    return  data[Math.floor(Math.random() * data.length)].pic_url
})
    }

    const [thingsArray, setThingsArray] = useState(["Things 1","Things 2"])

//............adding items...............................
function AddItem(){
 var newItem = `Things ${thingsArray.length + 1}`
 setThingsArray(prevlist => [...prevlist ,newItem] )
}


const newthingslist = thingsArray.map( v => <p key={v}>{v}</p>) 

    return(
        <div className="Body">
            <div className="forms">
                <form>
                    <input type="text" placeholder="Give me an emogi"/>
                    <input type="text" placeholder="Enter something"/>
                </form>
                <button onClick={changeMeme}  >Get more images</button>
            </div>
            <div className="emogi">
            <img src={url_path}/>
               
            </div>

           
        <div>
        <div id="Add_item">
            <button onClick = {AddItem} > AddItem_now </button>

            <p>{newthingslist}</p>
            </div>
</div>

        </div>
    )
}
export default Body