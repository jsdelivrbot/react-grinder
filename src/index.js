import React, { Component } from 'react';
import ReactDOM from 'react-dom'; 
import Zdje from './components/search_bar';
import EventClick from './components/video_detail';


class Klikacz extends Component {
  constructor(props) {
    super(props);

    this.state = { click: ''};
  }

  render() {
    return (
      <div>
        <Zdje />
        <EventClick />
      </div>
    ); 

  }
}

ReactDOM.render(
  <Klikacz />, document.querySelector('.container')
);