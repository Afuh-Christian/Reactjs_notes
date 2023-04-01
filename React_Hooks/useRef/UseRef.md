    This hooks makes it posible to access DOM node directly within

functional components

Example .... Focusing a text input

As the page loads , we want the username feild to be focused on

# 1..we need to implement the component did mount behaviour as we are to focus on the

    input element only once , and that is upto the component has mounted

- we can do this with the effect hook

# 2 ... there are 3 steps in using the ref hook

    -inport useRef
    -create useRef variable
    -attarch it to the DOM element in question (ref = {refvariable}) ... ref is a reserved keyword

import React, { useEffect, useRef } from 'react'

const FocuInput = () => {

    const inputref = useRef(null)

    useEffect(()=>{

// fucos function here

    },[])

return (

<div>
<input ref={inputref} type="text"/>
</div>
)
}

export default FocuInput

# 3 ... Now call the focus method on the effect element

inputRef.current.focus()

react will send the ref's current property to the right dom node ...

import React, { useEffect, useRef } from 'react'

const FocuInput = () => {

    const inputref = useRef(null)

    useEffect(()=>{

// fucos function here

inputref.current.focus()

    },[])

return (

<div>
<input ref={inputref} type="text"/>
</div>
)
}

export default FocuInput
