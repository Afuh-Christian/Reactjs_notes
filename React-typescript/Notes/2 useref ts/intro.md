# The type here will be .... different depending on the tag ....


# for input ....HTMLInputElement

const ref = useRef<HTMLInputElement>(null)



#<div className='container'>
          <input
#        ref={ref}
              type="text" name="name" id=""
          onChange={(e)=>{props.setTodo(e.target.name)
#              ref.current?.focus()
          }}/>
          <button onClick={(e:FormEvent) => {
              props.handleAdd(e)}} >Add</button>
    </div>