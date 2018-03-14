import React from 'react';
import ReactDOM from 'react-dom';
const API_KEY = 'AIzaSyBTRJqPyRnIc3s4Vynm9Jl82sXtdqMRT8E';

// Create component to produce HTML
 
const App = () => {
  return <div>Hi!</div>
} 

// Take this component and put it in the DOM

ReactDOM.render(
  <App />, document.querySelector('.container')
);
