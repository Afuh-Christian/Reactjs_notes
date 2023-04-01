import React from "react";
import { useState } from "react";
import { boxes } from "../../memesData";
import Boxview from "./Boxview";
import "../C.css"

export default function Box(){
 
    const [boxes_b, setBoxes ] = useState(boxes)

    /*

    function ChangeColor(id){
      setBoxes((prevboxes) => {
         const newBoxes = []
         for (let i = 0; i < prevboxes.length; i++) {
           const currentBox = prevboxes[i]
           if(currentBox.id === id){
               const updatedBox = {
                  ...currentBox,
                  on:!currentBox.on
                  
               }
               newBoxes.push(updatedBox)
           }else{
            newBoxes.push(currentBox)
           }
            
         }


         return newBoxes
         
      }

      )}
    */




    function ChangeColor(id){
      setBoxes((prevboxes) => {
         return prevboxes.map((box_m) => {
            return box_m.id === id? {...box_m,on:!box_m.on}:box_m
         })
      }
       
      )}

    const list =  boxes_b.map(box => 
        <Boxview 
        key={box.id} 
        on={box.on}
        id = {box.id}
      ChangeColor={() => ChangeColor (box.id )}
          
           />) 
    return(
       <div>
         <h1>Box Challenge</h1>

            {list}
         
           
       </div>
    
    )}