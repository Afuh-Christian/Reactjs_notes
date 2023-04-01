
import { useSelector } from 'react-redux'
import { getAllpost } from './postSlice'



import React from 'react'

const PostList = () => {

//const postslist = useSelector((state) => state.posts)


//......................................................
const postslist = useSelector(getAllpost)
//......................................................



  const postrenderList = postslist.map((item) => {
        const {id, title, content} = item
    return <article>
        <h2>{title}</h2>
        <p>{content.substring(0,20)}</p>
        </article>

  })

  return (
    <div>
        <h1>Posts</h1><br/>
       <div> {postrenderList} </div>

    </div>
  )
}

export default PostList