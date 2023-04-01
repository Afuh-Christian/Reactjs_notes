# In funtion components , 
    -when updating the state of an object , we {...object , fieldtobeUpdated} 
    


# example ..... 
    import { Component } from "react";

class App extends Component {

  state = {
    contact : {
      name : "Afuh" ,
      email : "afuh@gmail.com",
      isFavorite : true 
    }
  }
 
  displayContact = () => {
    this.setState((prev) => {
      return {
        contact : {
             ...prev.contact,
          isFavorite  : prev.contact.isFavorite === true ? false : true
        }
      }
    })
  }

  render() { 
    return (<div>
      <button onClick={this.displayContact}>Show contact</button>
     {
      this.state.contact.isFavorite && <div>
        <div>{this.state.contact.name}    ..........    {this.state.contact.email} </div>
      </div>
     }
    </div>);
  }
}
 
export default App;

# ...............




# .................