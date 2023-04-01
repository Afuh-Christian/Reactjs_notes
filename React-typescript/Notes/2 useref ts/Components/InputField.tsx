
import React, { FC , Dispatch, SetStateAction, FormEvent, useRef } from 'react'
import './CStyles.css'


interface Props {
    todos: string;
    setTodo: Dispatch<SetStateAction<string>>;
    handleAdd: (e:FormEvent) => void;
}


// const InputField = (props: Props) => {
const InputField: FC<Props> = (props) => {
    const ref = useRef<HTMLInputElement>(null)
  return (
      <div className='container'>
          <input
        ref={ref}
              type="text" name="name" id=""
              onChange={(e) => {
                  props.setTodo(e.target.name)
                  ref.current?.blur()
              }}
          />
          <button onClick={(e:FormEvent) => {
              props.handleAdd(e)
           
          
          }} >Add</button>
    </div>
  )
}

export default InputField