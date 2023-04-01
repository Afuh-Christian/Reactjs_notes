# At first 
    -We used to initialize any value we wanted our class to contain inside a contructor .... 
    -state wasn't known at the time .... 

    -This contructor method is not a react life cycle method
#   -Because the class App inherits the Component class , we need to call the 
        -super() in the constructor() 
        -this calls the contructor method of the Component Class

    -now we can move the state object into the contructor , but we'll have to use this.state 

#   -Nb ... if you wish to use access the props  in the contructor .... do this ... 
     contructor(props){
        super(props)
     }


# remember that we could not declare a normal function the the class component and have a this.setState inside ....
# We have a solution to this problem ..... we will use contructors to help 
    -declare your function ... allHouse(){this.setState}
    -in the contructor 
        -this.allHouse = this.allHouse.bind(this)
            -(this makes the allHouse to be able to access the preperties of the class component with the this keyword)


# code .... nb .. always include the super() in the contructor ..... 

    
class App extends Component {
  constructor(){
#   super()
#    this.state = { 
      getHouse : "Yes"
     } 
#    this.alterHouse = this.alterHouse.bind(this)
  }

  alterHouse(){
     this.setState((prev) => ({getHouse : prev.getHouse === "No"? "Yes" : "No"}))
  }


  render() { 
    return (
      <>
      <button onClick={this.alterHouse}>{this.state.getHouse}</button>
      </>
    );
  }
}

# .............................

# ..............................................................................
# ..............................................................................
# ..............................................................................
# ..............................................................................
# ..............................................................................

