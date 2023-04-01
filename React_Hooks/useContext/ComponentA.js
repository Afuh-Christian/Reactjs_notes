import React, { createContext } from 'react'
import ComponentB from './ComponentB'


export const Context = createContext()

function ComponentA() {
  

    const a = "New things said"

  return (
    <div>
    <Context.Provider value={a}>
        <ComponentB/>
    </Context.Provider>
    </div>
  )
}

export default ComponentA