import { useSelector } from "react-redux";
import { getAllUsers } from "../../../Users/userSlice";



import React from 'react'

const PostAuthor = ({userId}) => {

    const users = useSelector(getAllUsers)
    const author = users.find(user => user.id === userId)

  return (
    <span>by {author? author.name : 'Unknown author'} </span>
  )
}

export default PostAuthor