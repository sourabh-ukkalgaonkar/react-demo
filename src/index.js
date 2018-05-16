import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YouTubSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_details';
import SignUp from './components/signup';
import Routes from './routes';
import Nav from './nav';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const API_KEY = 'AIzaSyCZttceDVlkCDFZGSsEcsr1JGkmm2CZ2ZA';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('surfboards');
  }

  videoSearch(term) {
    YouTubSearch({ key: API_KEY, term: term }, (videos) =>{
      this.setState({
        videos: videos,
        selectedVideo: videos[4]
      });
    });
  }

  render (){
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);

    return (
      <div>
        <Routes />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
