# ... In some websites ... when you are filling out a form ,, at times there might be a glitch on the internet connection and all the entries you filled are all lost and  you have to begin again .... 

# ...To solve this ..... we will be storing the data in the local storage to prevent .....
        - As we input the data  , it stores in local storage ... 
        -if a glitch occurs , theres a check in the local storage ... if data is present 
                    - it repopulates the entries ...... 



# ComponentDidUpdate will run anytime there are changes to the states or props ....... 

# let's create 3 inputs .... 



# code .... 
import { Component } from "react";

class App extends Component {
  state = {
    contact:{
      firstname: "",
      lastname:"" ,
      email: ""
    }
  } 

  HandleInput = (e) => {
    const {name, value} = e.target 
      this.setState((prev) => {
        return {
          contact: {
            ...prev.contact , 
            [name] : value
          }
        }
      })
  }

# /// as we update a field ... this funcion runs ....
  componentDidUpdate() {
    console.log("Update")
  }
# ..............................................


  render() { 
    return (
      <div>
        <input 
        type="text"
        name="firstname" 
        onChange={this.HandleInput}
             /> 
        <input
         type="text"
         name="lastname"
         onChange={this.HandleInput}
                /> 
        <input 
        type="email"
        name="email"
        onChange={this.HandleInput}
         /> 

         <br/>
         <br/>
         <br/>
         <br/>

         <div>{this.state.contact.firstname}</div>
         <div>{this.state.contact.lastname}</div>
         <div>{this.state.contact.email}</div>
        
      </div>
    );
  }
}
 
export default App;
# .........



# Now we will add the loaclStorage inside the componentDidUpdate ....  .....
    -Every time we type into the input field ... state gets updated ...componentDidUpdate runs .. and the data gets stored in local storage ...



    