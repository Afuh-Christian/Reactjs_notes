import { Component } from "react";

class App extends Component {
  state = {
    contact: JSON.parse(localStorage.getItem("formData"))?JSON.parse(localStorage.getItem("formData")):{
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

  componentDidMount() {
  
    console.log(JSON.parse(localStorage.getItem("formData")))
  }

 /// as we update a field ... this funcion runs ....
  componentDidUpdate() {
    console.log("Update")
    localStorage.setItem("formData",JSON.stringify(this.state.contact))
  }
// # ..............................................


  render() { 
    return (
      <div>
        <input 
        type="text"
        name="firstname" 
        onChange={this.HandleInput}
        value={this.state.contact.firstname}
             /> 
        <input
         type="text"
         name="lastname"
         onChange={this.HandleInput}
         value={this.state.contact.lastname}
                /> 
        <input 
        type="email"
        name="email"
        onChange={this.HandleInput}
        value={this.state.contact.email}
         /> 

        
      </div>
    );
  }
}
 
export default App;