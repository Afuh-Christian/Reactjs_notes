

import React, {  useState } from 'react'
// import { nanoid } from '@reduxjs/toolkit'

//.........................................................
import { useDispatch,useSelector } from 'react-redux'
//.........................................................
import { postAdd } from './postSlice'


//...............................
import { getAllUsers } from '../../../Users/userSlice'
//...............................


function AddPostForm (){
   
    const postAllUsers = useSelector(getAllUsers)

    const [title,setTitle] = useState('')
    const [content,setContent] = useState('')
   

    //..................................................
    const [userId,setUserId] = useState('')
    //..................................................
      
    const Htitle = (e) => setTitle(e.target.value)
    const HContent =(e) => setContent(e.target.value)
    //..................................................
    const HAuthUser =(e) => setUserId(e.target.value)
    //..................................................
        


    const dispatch = useDispatch()

    const onSavePostClicked = () => {
        if(title && content){

            dispatch(
                //....................................
                postAdd(title,content,userId)
                //......................................
            )

            setContent('')
            setTitle('')

        }

        console.log(userId)
        
    }


//..............to make a can save button .......NB...they should follo this particular order.........
const canSave =  Boolean(title) && Boolean(content) && Boolean(userId)
//...................if all three are true => canSave = true..................................

//................query the list of users....................
    const userOptions = postAllUsers.map(user => {
        return <option key={user.id} value={user.id}>
            {user.id}  {user.name}
        </option>
    })
//............................................................





   

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
                <option value=""></option>
                {userOptions}
           </select>


{/* <input type='submit' value="submit"/>     */}
           </form>

           <button onClick={onSavePostClicked}
           //................................
            disabled = {canSave? false : true}
           //.........................
           >Save to list</button>
              



<div>
<p>{title}</p>
<p>{content}</p>
</div>



    </div>
  )
}

export default AddPostForm