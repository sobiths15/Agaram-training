import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


import User from './Todo/User';
import { Form } from 'react-bootstrap';
import Todo from './Todo/Todo';
import{configureStore } from '@reduxjs/toolkit'
import{Provider} from 'react-redux'
import  useReducer  from './Youusers';


const store=configureStore({
  reducer:{
    user:useReducer
  }
})


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
  <React.StrictMode>
   
   <Provider store={store}>
   <App />
   </Provider>
    
   
  </React.StrictMode>
  
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
