import './App.css';
import { Component } from 'react';


 class App extends Component {
  state = {  } 
   // variable ....
    myName = "Variable in class "
   // function  ....
   GiveTotal = () => {
    return "Function in class .."
  }
  render() { 
    const Arender = "variable in  render "
    const GiveRender = () => {
      return "Function in Render .."
    }
    return (<>
    <h1>Class Attributes </h1>
   <div>{this.GiveTotal()}</div>
   <div>{this.myName}</div>
   <br></br>

   <h1>Within Render function   </h1>
   <div>{GiveRender()}</div>
   <div>{Arender}</div>
    </>);
  }
 }
  
 export default App;
