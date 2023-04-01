import { Component } from "react";



class App extends Component {
  state = { 
    count : 1,
    item : {}
   } 

   
   NextItem = () => {
     this.setState((prev) => {
      return {
        count : prev.count += 1 
      }
     })
   }

   PreviousItem = () => {
     this.setState((prev) => {
      return {
        count : prev.count -= 1 
      }
     })
   }

   getItems = (id) => {
     fetch(`http://127.0.0.1:8000/items/${id}/`)
      .then(res => res.json())
      .then(data => {
        this.setState({item : data})
      })
   }
   

   componentDidMount (){
    // console.log(this.state.item)
    this.getItems(this.state.count)
   }

   componentDidUpdate (prevProps,prevState){
    if(prevState.count !== this.state.count){
      console.log("Updated")
    this.getItems(this.state.count)
  }
   }

  render() { 
    return (
      <div>
        <button onClick={this.PreviousItem}>PreviousItem</button>
        <button onClick={this.NextItem}>NextItem</button>
        

        <div>
          <div>{this.state.count}</div>
          <br/> 
          <div>{JSON.stringify(this.state.item) && <>{JSON.stringify(this.state.item)} </> || <h1>Loading...</h1>}</div>
        </div>
      </div>
    );
  }
}
 
export default App;