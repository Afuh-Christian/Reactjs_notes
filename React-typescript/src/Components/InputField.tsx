
import React, { FC , Dispatch, SetStateAction, FormEvent, useRef } from 'react'
import './CStyles.css'


interface Props {
    todo: string;
    setTodo: Dispatch<SetStateAction<string>>;
    handleAdd: (e:FormEvent) => void;
}


// const InputField = (props: Props) => {
const InputField: FC<Props> = (props) => {

  return (
      <div className='container'>
          <input

              type="text" name="name" id=""
              onChange={(e) => {
                  props.setTodo(prev => {
                      return e.target.value
                  })
              }}
          />
          <button onClick={(e:FormEvent) => {
              props.handleAdd(e)
           
          
          }} >Add</button>
    </div>
  )
}

export default InputField