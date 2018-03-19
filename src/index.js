import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search'
import SearchBar from './components/search_bar';
const API_KEY = 'AIzaSyBTRJqPyRnIc3s4Vynm9Jl82sXtdqMRT8E';





class App extends Component {
  constructor(props){
    super(props);

    this.state = { videos: [] };

    YTSearch({key: API_KEY, term: 'x220'}, (data) => {
      this.setState({ videos: data });      
    }); 

    console.log(this.state.videos);
    
  }
    
  

  render() {
    return (
      <div>
        <SearchBar />
        
      </div>
    );
    
  }
}




ReactDOM.render(
  <App />, document.querySelector('.container')
);
