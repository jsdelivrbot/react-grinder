import React from 'react';
import ReactDOM from 'react-dom';

// Create component to produce HTML
 
const App = () => {
  return <div>Hi!</div>
} 

// Take this component and put it in the DOM

ReactDOM.render(
  <App />, document.querySelector('.container')
);
