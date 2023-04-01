
import './App.css';
import ControlledInputs from './Forms/ControlledInputs';
import Form from './Forms/Form';
import FormObject from './Forms/FormObject';
import Practice from './Forms/Practice';

function App() {
  return (
    <div className="App">
      <div>
    <Form/>
    </div>
    <div>
    <FormObject/>
    </div>
    <div>
      <ControlledInputs/>
    </div>
    <div>
      <Practice/>
    </div>
    </div>
  );
}

export default App;
