
import './App.css';
import Counter from './Components/Counter';
import { useState } from "react";
import A from './Components/A';
import B from './Components/B';
import Box from './Components/Box/Box';
import Joke from './Components/Joke/Joke';
// import Box from './Components/Box';

function App() {
// ..............Passing state as props.....................
  const [count, setCount] = useState(0)

  function Add(){
      setCount((prevcount) => (prevcount + 1))
  }

  function Subtract(){
      setCount((prevcount) => (prevcount - 1))
  }
 //............Change state of parent component through child component.................
//............Change state of parent component through child component.................
const [count_p, setCount_P] = useState(0)

function Add_P(){
  setCount_P((prevcount) => (prevcount + 1))
}

function Subtract_P(){
  setCount_P((prevcount) => (prevcount - 1))
}

//.........Passing data around ......(through 2 or more components)

const [component, setCompenent] = useState("Component_ A")

function ChangeComponent(){
  component === "Component_ A"? setCompenent((component) => ("Component_ B")): setCompenent((component) => ("Component_ A"));
 
}


//.........box..............
// const darkMode = false


return (
   <div className='App'>
    <div>
 
    <h1>Passing state as props</h1>
     <p><button onClick={Add}>Add</button><button onClick={Subtract}>Subtract</button></p>
 {/* //...........Passing functions as props............... */}
  <Counter count = {count} Add_P={Add_P}  Subtract_P={Subtract_P}/>
  </div>
  <div>
      <p>{count_p}</p>
  </div>

  {/* //.........Passing data around ......(through 2 or more components) */}
  <div>
    <h1>Passing data around ......(through 2 or more components)</h1>
  <A component={component} ChangeComponent={ChangeComponent}/>
  <B  component={component} ChangeComponent={ChangeComponent}/>   
  </div>



  <div>
    <Box/>
  </div>
  <div>
    
    <Joke/>
  </div>
   </div>
);
}

export default App;