# Contex

    -Provides a way to pass data through the component tree without having to pass props down manually at every level

# Old method ....

# A

import React, { createContext } from 'react'
import ComponentB from './ComponentB'

export const Context = createContext()

function ComponentA() {
const a = "Happy home"

return (

<div>
<Context.Provider value={a}>
<ComponentB/>
</Context.Provider>
</div>
)
}

export default ComponentA

# C

import React from 'react'
import { Context } from './ComponentA'

function ComponentC() {
return (
<>

<div>ComponentC</div>

    <Context.Consumer>
        {
            user => {
                return <p>User context value {user}</p>
            }
        }
    </Context.Consumer>


    <p></p>
    </>

)
}

export default ComponentC

# This method gets complex when dealing with multiple data

# New Method .......

# useContext hook

    -Create a better way of consuming the data

import React, { useContext } from 'react'
import { Context } from './ComponentA'

function ComponentC() {

# .................................

    const a = useContext(Context)

# .................................

    return (
    <>
    <div>ComponentC</div>
    <p>{a}</p>
    </>

)
}

export default ComponentC
