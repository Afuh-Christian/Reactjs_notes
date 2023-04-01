

import React, {  useState } from 'react'
import { nanoid } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import { postAdd } from './postSlice'


function AddPostForm (){
   
    const [title,setTitle] = useState('')
    const [content,setContent] = useState('')
      

    const dispatch = useDispatch()

    const onSavePostClicked = () => {
        if(title && content){
//..............................................................
            dispatch(
                postAdd(title,content)
            )
//..............................................................
            setContent('')
            setTitle('')

          
        }
        
    }

function Htitle(e){ 
    setTitle(e.target.value)
    }

function HContent(e){ 
    setContent(e.target.value)
    }
   

  return (
    <div>
        <form>
           <div> Title : <input
            name="title"
            id='title'
            value={title}
            onChange={Htitle}
            /></div>
           <div> Content :<input
            name="content"
            id='content'
            value={content}
            onChange={HContent}
            /></div>

          
{/* <input type='submit' value="submit"/>     */}
           </form>

           <button onClick={onSavePostClicked}>Save to list</button>
              


<div>
<p>{title}</p>
<p>{content}</p>
</div>

    </div>
  )
}

export default AddPostForm