
import { useSelector } from 'react-redux'
import { getAllpost } from './postSlice'
import React from 'react'
import PostExcerpt from './PostExcerpt'

//..................................................
import { getPostsError,getPostsStatus,fetchPosts } from './postSlice'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
//..................................................


const PostList = () => {

  //..............................................
  const dispatch = useDispatch()
  const postStatus = useSelector(getPostsStatus)
  const error = useSelector(getPostsError)
  //..............................................

  //..............................................
useEffect(()=> {
  if(postStatus === 'idle'){
    dispatch(fetchPosts())
  }
},[postStatus,dispatch])
  //..............................................


const postslist = useSelector(getAllpost)


  // const postrenderList = 

  //.......logic to check for errors........................

  let content 
  if(postStatus === 'loading') {//...loads while fetching the api
    content = <p>"Loading..."</p> //...You can also put in a spinner component
  }else if(postStatus === 'succeeded'){
    const orderedPosts = postslist.slice().sort((a,b) => b.date.localeCompare(a.date))
    content = orderedPosts.map((post) => {
      return <PostExcerpt key={post.id} post={post}/>
     })
  }else if(postStatus === 'failed'){
    content = <p>{error}</p>
  }

  //.......................................................


  return (
    <div>
        <h1>Posts</h1><br/>
       <div> {content} </div>

    </div>
  )
}

export default PostList