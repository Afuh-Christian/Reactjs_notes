# ComponentDidMount ... 
    -Is a method that you add to your class based components just like for the render() method 
    componentDidMount () {

    }
    -what ever is placed within this funtion will run emidiately after the very first render of the App component
    -since the app component is set up to run emidiately as the app loads  => the app component will mount as you refresh the page 

    -Now if we set this up to make changes to state , or if it were recieving props that changed or anything  like that will not be considered a mount phase , it wound rather be part of the update phase and so componentdidmount will not run again

    -It will run the code that was put inside of componentDidMount only the very first time the component is rendered 


    -so let's test this .........  ..

# test 1 ........

import './App.css';
import { Component } from 'react';

class App extends Component {
  state = {  } 
  componentDidMount(){
    console.log("Did mount ........ ")
  }
  render() { 
    console.log("redenered")
    return (
      <>            
      <div>Hello App</div>
      </>
    );
  }
}
 
export default App;


# ..........

# Console 

redenered

Did mount ........

# we notice that  the code in compoentDidMount ran just after the render ..... 

# One good thing we do in the ComponentDidmount life cycle method 
    -Make calls to api... 
    -we will make a call to a star wars api and get some data from it ... 
        Get the first character and display the full name 


# ...call data from start wars api .... in componentDidMount ...... 

class App extends Component {
  state = {  }
# ...... 
  componentDidMount(){
    console.log("Did mount ........ ")
    fetch("https://swapi.dev/api/people/1")
      .then(res => res.json())
      .then(data => console.log(data))   // we consoled the data like this because we have created a state to store it
  }
# ...... 
  render() { 
    console.log("redenered")
    return (
      <>            
      <div>Hello App</div>
      </>
    );
  }
}
 
export default App;

# code .... 
import './App.css';
import { Component } from 'react';

class App extends Component {
  state = {  } 
  componentDidMount(){
    console.log("Did mount ........ ")
    fetch("https://swapi.dev/api/people/1")
      .then(res => res.json())
      .then(data => console.log(data))
    
  }
  render() { 
    console.log("redenered")
    return (
      <>            
      <div>Hello App</div>
      </>
    );
  }
}
 
export default App;

# ...........

# save the star wars character object in state! Then display the 'name' property of the character on the screen 


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



# NB ......Remember in function components 
  # to call an external api and setState ... it needs to be in a useEffect hook else the component else the setState will case it to rerender in a continues cycle ...
  # ComponentDidMount    sovles the issues for class component ..... since the code in ComponentDidMount runs only once 

#  this means 

  componentDidMount   ===    useEffect(()=>{} , [])  // where thee dependency array is empty(runs only once...)











