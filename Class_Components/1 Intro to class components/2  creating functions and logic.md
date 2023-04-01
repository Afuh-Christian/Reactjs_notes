# ....... RENDER()   ..... variables and functions ..... 

# this should be done in the render() method and above the return of the jsx 

 # functions and variables declared in the render() are not accessed using  "this"  becauase they are not attributes of the class component .... 


 class App extends Component {
  state = {  } 
  render() { 
#    // variable ....
    const  myName = "Afuh Christian Forkoum"
#    // function  ....
   const GiveTotal = () => {
     return 10 + 23
   }
    return (<>
   <div>{GiveTotal()}</div> 
   <div> {myName}</div>
    </>);
  }
 }
  
 export default App;


 # ....






# ClASS .............. variables and functions as functions an attributes ..... 

# variables and functions are declared with no return type .... 
# and are access with "this" .... since they are accessed in a function within the class ... .

 class App extends Component {
  state = {  } 
#   // variable ....
    myName = "Afuh Christian Forkoum"
#   // function  ....
   GiveTotal = () => {
    return 10 + 23
  }
  render() { 
   
    return (<>

   <div>{this.GiveTotal()}</div>
   <div>{this.myName}</div>
    </>);
  }
 }


  