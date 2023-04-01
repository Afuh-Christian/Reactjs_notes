import React, { Dispatch, FC, SetStateAction } from 'react'
import { TodoType } from '../models';

type Props = {
    todolist: TodoType[];
    setTodolist: Dispatch<SetStateAction<TodoType[]>>;
}

const TodoListC: FC<Props> = (props) => {
    const {todolist, setTodolist} = props
  return (
      <>
          {
              todolist.map((todo) => {
                  <li>{todo.name}</li>
              })
         }
      </>
  )
}

export default TodoListC