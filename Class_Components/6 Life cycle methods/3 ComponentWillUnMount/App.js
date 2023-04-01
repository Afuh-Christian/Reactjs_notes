import { Component } from "react";

class App extends Component {
  state = { 
    windowWidth : window.innerWidth
   } 

   watchWidth = () => {
    this.setState({windowWidth:window.innerWidth})
   }

   componentDidMount() {
     window.addEventListener("resize" , this.watchWidth)
   }

   componentDidMount() {
    window.addEventListener("resize" , this.watchWidth)
  }



  render() { 
    return (
      <div>
        <div>{this.state.windowWidth}</div>
      </div>
    );
  }
}
 
export default App;