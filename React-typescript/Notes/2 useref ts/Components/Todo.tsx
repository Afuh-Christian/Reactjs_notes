import React, { FC, FormEvent, useRef, useState } from 'react'
import InputField from './InputField'
import { TodoType } from '../models'
import TodoListC from './TodoListC'


const Todo: FC = () => {
    const [todo, setTodo] = useState<string>("")
    const [todolist, setTodolist] = useState<Array<TodoType>>([])
    function handleAdd(e: FormEvent): void {
        e.preventDefault()
        // console.log("Yo")
        if(todo){
        setTodolist(prev => {
            return [
                ...prev, {id:Date.now() , name:todo , isDone:true }
            ]
        })
        setTodo("")
        console.log(todolist)
        }
            else {
        console.log("empty")
    }
    }


  return (
      <>
          <div
          className='back'>
        <h1>
          Todo
        </h1>
              <div>
            <InputField todos={todo} setTodo={setTodo} handleAdd={handleAdd} />
              </div>
              {/* <div>
                  <TodoListC todolist={todolist} setTodolist={setTodolist} />
              </div> */}
       </div>
      </>
  )
}

export default Todo