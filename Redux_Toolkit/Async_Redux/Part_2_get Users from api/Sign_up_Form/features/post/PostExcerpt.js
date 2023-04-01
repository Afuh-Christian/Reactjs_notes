//.....this is for the loaing state 

import React from 'react'
import ReactionButton from './ReactionButton'
import TimeAgo from './TimeAgo'
import PostAuthor from './PostAuthor'
const PostExcerpt = ({post}) => {
  return (
<article>
        <h2>{post.title}</h2>
        <p>{post.body.substring(0,20)}</p>
        <p>
          <TimeAgo timestamp={post.date} />
        </p>
        <p>
          <PostAuthor userId={post.userId}/>
        </p>
        <p>
          <ReactionButton post={post} />
        </p>
        </article>  )
}

export default PostExcerpt
