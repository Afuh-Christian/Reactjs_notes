# We want to create a setter function for the goOut state .... 

# in the Class Component ..
    -there a method called ..
        -setState()
    -Since we are extending the Component ... we can have access to this method .... 
    
# Nb ... the setState must decdlared in an arrow funcions else it won't work ..... 
    in the setState() ... if we pass 
        -prevstate = we will return an object 

# code ..... 

import { Component } from "react";

class App extends Component {

  state = {
    goOut: "Yes"
    } 
# .....AlterGoOut must be an  arrow fucntion ....   
  AlterGoOut = () => {
     this.setState((prevState) => {
      return {
        goOut : prevState.goOut === "Yes"? "No" : "Yes"
      }
     })
  }
# .....................

  render() { 
    return (
      <div>
        <button onClick={this.AlterGoOut}>Alter Go out</button>
        {this.state.goOut}
      </div>
    );
  }
}
 
export default App;




# ... Counter App example ..... .


import { Component } from "react";

class App extends Component {

  state = { 
    count : 0
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
    </div>);
  }
}
 
export default App;










        