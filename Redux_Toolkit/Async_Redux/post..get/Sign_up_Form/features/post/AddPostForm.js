

import React, {  useState } from 'react'
// import { nanoid } from '@reduxjs/toolkit'

import { useDispatch,useSelector } from 'react-redux'
//..........................................................
import { addNewPost } from './postSlice'
//..........................................................
import { getAllUsers } from '../../../Users/userSlice'



function AddPostForm (){
    const dispatch = useDispatch()
    const postAllUsers = useSelector(getAllUsers)

    const [title,setTitle] = useState('')
    const [content,setContent] = useState('')
    const [userId,setUserId] = useState('')
//..............................................................................
    const [addRequestStatus,setAddRequestStatus] = useState('idle')
//..............................................................................
      
    const Htitle = (e) => setTitle(e.target.value)
    const HContent =(e) => setContent(e.target.value)
    const HAuthUser =(e) => setUserId(e.target.value)
    
        


//...........................................................................
    const canSave =  [title,content,userId].every(Boolean) && addRequestStatus === 'idle'
//...........................................................................

//...........................................................................................................
    const onSavePostClicked = () => {
        if(canSave){
            try{
                setAddRequestStatus('pending') 
                dispatch(addNewPost({title, body:content,userId})).unwrap()
                //redux has an unwrap function to the return promise and that returns 
                // a new promise to the new or it throw an error if it's the regected action 

                setTitle('')
                setContent('')
                setUserId('')
            }catch(err){
                console.error('Failed to save the post',err)
            }finally{
                setAddRequestStatus('idle')
            }
        }
    }
//.................................................................................................................
    

    const userOptions = postAllUsers.map(user => {
        return <option key={user.id} value={user.id}>
            {user.id}  {user.name}
        </option>
    })

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
           <select id="postAuthor" name='userId' onChange={HAuthUser} value={userId}>
                <option value="chose user"></option>
                {userOptions}
           </select>

           </form>
           <button onClick={onSavePostClicked}
            disabled = {canSave? false : true}
           >Save to list</button>
              
<div>
<p>{title}</p>
<p>{content}</p>
</div>

    </div>
  )
}
export default AddPostForm