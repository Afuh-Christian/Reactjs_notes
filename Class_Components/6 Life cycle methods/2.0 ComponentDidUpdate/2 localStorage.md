# ... adding the data to the local storage as it's being typed ... 


# ............. LOCAL STORAGE .................
    localStorage  ... is the class for working with local storage ... it has methods like 
        -setItem() 
            -takes a key value pair as it's parameter .... "key" : "value" ....
            -value must be stringified .... 
            - setItem("key" , JSON.stringify(value))

        -getItem() 
            -takes the "key" that was set in the setItem(setItem("key" , JSON.stringify(value))) ....
            -getItem("key")
        -removeItem() 
        -clear()
# ............


# ....As state updates .... componentDidUpdate runs ....... data gets stored in localStorage.
  componentDidUpdate() {
    localStorage.setItem("formData" , JSON.stringify(this.state.contact))
  }

# ....let's console out the data when we refresh the page .... using componentDidMount ......

 # send data ... state.contact
  componentDidUpdate() {
    localStorage.setItem("formData" , JSON.stringify(this.state.contact))
  }
 # recieve data .... 
    componentDidMount(){
    const data = localStorage.getItem("formData") 
    console.log(JSON.parse(data))
  }


# we convert the data and send to localStorage as a string 
# we reciceve the data and convert it back to an object ...
  
..... For now the state is not looking at what has been saved in local Storage ...

# Next we will repopulate the data after page refresh ...... 


# we can just call the setState in the componentDidMount ...


# ..................

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
# .............
  componentDidMount(){
    const data = localStorage.getItem("formData") 
    console.log(JSON.parse(data))
    this.setState((prev) => {
      return {
        contact : JSON.parse(data)
      }
    })
  }

  componentDidUpdate() {
    localStorage.setItem("formData" , JSON.stringify(this.state.contact))
  }
# .............


  render() { 
    return (
      <div>
        <input 
        type="text"
        name="firstname" 
        onChange={this.HandleInput}
        value = {this.state.contact.firstname}
             /> 
        <input
         type="text"
         name="lastname"
         onChange={this.HandleInput}
         value = {this.state.contact.lastname}
                /> 
        <input 
        type="email"
        name="email"
        onChange={this.HandleInput}
        value = {this.state.contact.email}
         /> 
        
        
      </div>
    );
  }
}
 
export default App;

# ..................


# .... the above is not very good .... 
    -O the first render of the app ... 
        - the componentDidUpdates 
            -this is because ...
                ComponentDidMount runs 
                this.setState runs ( which causes a rerender of the component and an update  ) 
                ComponentDidUpdate runs ..

# it's abit confusing why the setState is called and cause problems 
    -When the components refreshes ... 
        -no data is present in the state anymore (it's in the localstorage ) 
        -So when the setState is called within the componentDidMount ... it cause changes by assigning the values of the state from the localStorage ... 
        -Now this causes the componentDidUpdate to run ..


# In the next slide , will be a more efficient method .... 



