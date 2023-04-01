
import React, { FC , Dispatch, SetStateAction } from 'react'

interface Props {
    todos: string;
    setTodo: Dispatch<SetStateAction<string>>;
}

// const InputField = (props: Props) => {
const InputField:FC<Props> = (props) => {
  return (
      <div>
          
    </div>
  )
}

export default InputField