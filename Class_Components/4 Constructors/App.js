import { Component } from "react";

class App extends Component {
  constructor(props){
    super(props) 
     this.state = { 
    count : 0,
    goOut: "Yes"
   } 
   this.Add = this.Add.bind(this)
   this.Subtract = this.Subtract.bind(this)
   this.AlterGoOut = this.AlterGoOut.bind(this)
  }
 

   AlterGoOut() {
    this.setState((prevState) => {
     return {
       goOut : prevState.goOut === "Yes"? "No" : "Yes"
     }
    })
 }

   Add () {this.setState((prev) => { 
    return {
      count : prev.count += 1  
    }
   })
  }
   Subtract(){ this.setState((prev) => { 
    return {
      count : prev.count -= 1 
    }
   })
  }
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