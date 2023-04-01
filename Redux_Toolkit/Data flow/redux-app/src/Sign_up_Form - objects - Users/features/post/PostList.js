
import { useSelector } from 'react-redux'
import { getAllpost } from './postSlice'
//...................
import TimeAgo from './TimeAgo'

//...................................
import ReactionButton from './ReactionButton'


import React from 'react'
import PostAuthor from './PostAuthor'

const PostList = () => {
const postslist = useSelector(getAllpost)
//....................To make the newest item to be at the top ....................................
const orderedPosts = postslist.slice().sort((a,b) => b.date.localeCompare(a.date))
//Slice creates a new shalow array
//sort compares tow items 
//.........................................................

//...........................................................
  const postrenderList = orderedPosts.map((item) => {
    //...........................................................
   return <article>
        <h2>{item.title}</h2>
        <p>{item.content.substring(0,20)}</p>
        <p>
          <TimeAgo timestamp={item.date} />
        </p>
        <p>
          <PostAuthor userId={item.userId}/>
        </p>
        <p>
          <ReactionButton post={item} />
        </p>
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