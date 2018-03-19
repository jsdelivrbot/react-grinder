import React, {Component} from 'react';

class EventClick extends Component {
  constructor(props) {
    super(props);

    this.state = { picSrc: 'https://whyevolutionistrue.files.wordpress.com/2017/06/happy-cat.jpg' };

  }

  render() {
    return (
      <img src={this.state.picSrc} className="kotek"
      onClick={this.handleClick}
      />
    );
  }

  handleClick() {
    this.setState({ picSrc: ''})
    
  }

}


export default EventClick; 