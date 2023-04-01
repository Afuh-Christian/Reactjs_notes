# .... NB ... 
#   const [f , setF ] = useState<string>("Hello")



import * as React from 'react';
import { useState } from 'react';


export const App: React.FC = () => {
  const [f , setF ] = useState<string>("Hello")
  return (
    <div>App</div>
  )
}