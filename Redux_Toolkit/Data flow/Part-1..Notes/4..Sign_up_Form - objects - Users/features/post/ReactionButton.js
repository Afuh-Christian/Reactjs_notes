import { useDispatch } from "react-redux";
import { reactionAdded } from "./postSlice";




import React from 'react'

const ReactionButton = ({post}) => {
    
    const reactionEmoji = {
        thumbsUp:'thumbsUp',
        wow:'wow',
            heart:'heart',
            rocket:'rocket',
            coffee:'coffee '
    }
  const dispatch = useDispatch() 

  //...an object lookup .....this allow us to map over an object ..............
  const reactionButtons = Object.entries(reactionEmoji).map(([name,emoji])=> {
    //[name,emoji] = key value pair 
  //........................................
    return (
        <button
        key={name} 
        type="button" 
        onClick={() => 
        dispatch(reactionAdded({postId: post.id,reaction:name}))
    }
        >
            {emoji}{post.reactions[name]}
        </button>
    )
  })

  
    return (
    <div>

        {reactionButtons}
    </div>
  )
}

export default ReactionButton

