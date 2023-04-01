# React.Component .... 
    -the mother class of all react class component 
# render() {
      // you can create your functions  and other logic in here .....    
     return jsx 

}
    - to return react elements which is actually what get's displayed on the screen ....  .... 

# Props  ...............
    -Props is  available automatically .. just type 
        {this.props} .... you get the object of the things you sent 
    -we don't have to recieve props explicitely .... it's already done implicitely .... 


# parent ...
    <App value="Nothing Good"/>
# child .... 
     class App extends Component {
  state = {  } 
  render() { 
    return (<>
   <div>{this.props.value}</div>
    </>);
  }
 }
  
 export default App;

 # ..........................................














