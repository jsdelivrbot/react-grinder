import React, { Component } from 'react';

class EventClick extends Component {
  constructor(props) {
    super(props);

    this.picToggled = 'https://whyevolutionistrue.files.wordpress.com/2017/06/happy-cat.jpg';
    this.state = { picSrc: this.picToggled };
    this.counter = 0;
    
  }

  render() {
    return (
      <img src={this.state.picSrc} className="kotek"
        onClick={this.picturesToggling.bind(this)}
      />
    );
  }

  handleClick() {
    this.setState({ picSrc: this.picToggled })

  }

  picturesToggling() {
    this.counter++;
    // console.log(this.counter%2===0);
    
    if (this.counter%2===0) {
      this.picToggled = 'https://whyevolutionistrue.files.wordpress.com/2017/06/happy-cat.jpg';
      this.setState({ picSrc: this.picToggled });      
    } else {
        this.picToggled = 'https://ksassets.timeincuk.net/wp/uploads/sites/55/2018/01/Grumpy-Cat-920x584.jpg';
        this.setState({ picSrc: this.picToggled });
      }
    
    
    
  }

}


export default EventClick; 