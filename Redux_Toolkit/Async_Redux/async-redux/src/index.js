import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import {store} from './Sign_up_Form/app/store'
//..................this will load the users as the app loads.......................................
import { fetchUsers } from './Users/userSlice';
store.dispatch(fetchUsers())
//............................................................

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>   
    <Provider store={store}>
    <App/>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
