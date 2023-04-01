import React, { FC, useState } from 'react'
import InputField from './InputField'

const Todo: FC = () => {
    const [todo, setTodo] = useState<string>("s")
  return (
   
      <>
       <div>
        <h1>
          Todo
        </h1>
              <div>
                  <InputField todos={todo} setTodo={setTodo} />
        </div>
       </div>
      </>
  )
}

export default Todo