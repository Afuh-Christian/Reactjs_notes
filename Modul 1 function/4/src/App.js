import React from 'react';
import { useState } from 'react';
import './App.css';
import Body from './Meme_Conponents/Body';
import { data } from './memesData';
import Header from './Meme_Conponents/Header';
import UseStateObject from './Meme_Conponents/UseStateObject';
import MemeGenerator from './Meme_Conponents/MemeGenerator';
import Count from './Meme_Conponents/Counter';



function App() {
//...................counter..................
  const [count , setCount] = useState(0)
 
  function CountAdd(){
    setCount(prevcount => prevcount + 1)
  }

  function CountMinus(){
    setCount(function(prevcount){
      return prevcount - 1
    } )
  }

//.............change text...........................
 const [value , setValue ]= useState("Yeah State")

  function HandleChange(){
    if(value == "Yeah State"){
    setValue("No Status here")
  }else{
    setValue("Yeah State")
  }
  }

//.............Alter list............................
  const [things , setThings] = React.useState(["thing 1","thing 2"])

 function addItem(){
  const newThingText = `Thing ${things.length + 1} `
  setThings(prevState => [...prevState, newThingText])
 }
 
 const thingsElements = things.map(thing =><p key={thing}>{thing}</p>)

//..........Ternary operation...1........................
var answer
var isCorrect = true
answer = isCorrect === false? "True: I'm the Goat": "False, you aint"



//..........Ternary operation...2........................
var answer_value
var isAnswer = false


//.........Flipping values back and forth..................

var [isHungry,setIsHungry] = useState(true)

function Hunger(){
  // if(typeof(isHungry) === 'undefined' || isHungry === false){
  //   setIsHungry(function(){
  //   return true
  // });
  // }
  // else{
  //   setIsHungry(false)
  // }
setIsHungry(prevState => !prevState)
}

 
 










  // var logom = "./logo.svg"
  return (
   
   <div className='Body_App'>
  
   <Header/>
   <Body/>
  <div className='useState'>
  {/* .......Alter list....... */}
  <div>
    <button onClick={addItem}>add item</button>
    {thingsElements}
  </div>

  {/* .......change text........ */}
  <div>
    <p><button onClick={HandleChange} >change State</button></p>
    {value}
  </div>
  
  {/* ..........counter......... */}
  <div>
  <h1>Counter</h1>
    <p><button onClick={CountAdd}>CountAdd</button>  <button onClick={CountMinus}>CountMinus</button></p>
    {count}
  </div>
 <h1>Ternary operations in react</h1>
 {/*............Ternary operation .1...........*/}
  <p>
    {answer}
  </p>

  {/* .......Ternary operation...2.............. */}
  <p>
    {isAnswer && "Wrong answer bro" || "Excellent boy"}
  </p>
  <p>
    {isAnswer ===false ? "Wrong answer bro" : "Excellent boy"}
  </p>

  <div>
    <button onClick={Hunger}>hungry</button>
    <p>{isHungry? <p>Yes I am</p> : <p>No I am not</p>}</p>
  </div>
  </div>



  <div>
  <h1>Swapping images base on state object property isMale</h1>
    <UseStateObject/>
  </div>

  <div>
    <h1>Meme Generator changing whole objects</h1>
    <MemeGenerator/>
  </div>


  <div>
    <h1>Passing states as props</h1>
  <Count/>
  </div>

   </div>
   
  
  );
}

export default App;
