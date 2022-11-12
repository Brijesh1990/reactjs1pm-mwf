import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import Calc from './components/Calc'
// multiple components access 
import reportWebVitals from './reportWebVitals';
import {Add,Subs,Dv,Mult} from './components/Calc';
const root = ReactDOM.createRoot(document.getElementById('demo-app'));
root.render(
  <React.StrictMode>
    {/* <Calc /> */}
    <button type='button' id='btn' onClick={Add}>Add two numbers</button>
    <button type='button' id='btn' onClick={Subs}>Susbtract two numbers</button>
    <button type='button' id='btn' onClick={Dv}>Devide two numbers</button>
    <button type='button' id='btn' onClick={Mult}>Multiply two numbers</button>
  </React.StrictMode>
);
reportWebVitals();
