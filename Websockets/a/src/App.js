import logo from './logo.svg';
import './App.css';
import { WebSocketDemo } from './WebSocket/Websock_chat';
import { WebsockApp } from './WebSocket/Web_Socket_A';
import { WebNew } from './WebSocket/NewWeb';



function App() {


  return (
    <div className="App">
      <br/>
     {/* <WebSocketDemo/> */}
     <br/>
     {/* <WebsockApp/> */}
     <br/>
     <WebNew/>
     {/* App */}
    </div>
  );
}

export default App;
