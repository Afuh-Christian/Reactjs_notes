import './App.css';
import { Component } from 'react';

class App extends Component {
  state = { 
    character : {} ,
   } 
  componentDidMount(){
    console.log("Did mount ........ ")
    // fetch("https://swapi.dev/api/people/1")
    fetch("http://127.0.0.1:8000/items/1/")
      .then(res => res.json())
      .then(data => {
         this.setState({character: data})
        console.log(data)
      })
    
  }
  render() { 
    console.log("redenered")
    return (
      <>            
      <div>{this.state.character.name}</div>
      </>
    );
  }
}
 
export default App;
