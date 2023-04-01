# This is very easy to do .... 
    - state object 
        -will contain the many variable,list ,objects  in it ... 
    
    -setState() 
        -return the object ... 
            choose the state you wish to update .... 


# Below we will combine the AlterGoOut and The counter ..... 

# full code .... 
import { Component } from "react";

class App extends Component {

  state = { 
    count : 0,
    goOut: "Yes"
   } 

   AlterGoOut = () => {
    this.setState((prevState) => {
     return {
       goOut : prevState.goOut === "Yes"? "No" : "Yes"
     }
    })
 }

   Add  = () => this.setState((prev) => { 
    return {
      count : prev.count += 1  
    }
   })
   Subtract  = () => this.setState((prev) => { 
    return {
      count : prev.count -= 1 
    }
   })
  render() { 
    return (<div>
      <button onClick={this.Add}>Add</button>
      <button onClick={this.Subtract}>Subtract</button>
      <br/>
      <div>{this.state.count}</div>


      <br/>
      <br/>
      <br/>

      <div>
        <button onClick={this.AlterGoOut}>Alter Go out</button>
        {this.state.goOut}
      </div>
    </div>);
  }
}
 
export default App;
# ............



# NB ... to return an object in an arrow function 

    const arrowfunc = () = > ({c: "mine})



# Class Components uses something called  
  Object.assing(oldstate , newsate)   under the hood ......... 

# But if we other objects in the state object .... we will use the spread operator in that object ..... like in react ...... 