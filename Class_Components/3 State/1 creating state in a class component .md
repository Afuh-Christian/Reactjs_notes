# creating state ....  
    -class component comes with an attribute object state  
    - state object is set to hold the state of the app .... 
#    - the state is accesses with .... this.state.goOut.. for the example below .... 
# ...
class App extends Component {
# ...setting the state .. 
  state = {
    goOut: "Yes"
    } 
# .....
  render() { 
    return (
      <div>
        {this.state.goOut}
      </div>
    );
  }
}

