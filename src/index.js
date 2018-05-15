import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YouTubSearch from 'youtube-api-search';

const API_KEY = 'AIzaSyCZttceDVlkCDFZGSsEcsr1JGkmm2CZ2ZA';
YouTubSearch({ key: API_KEY, term: 'surfboard' }, function(data){
  console.log(data);
});


const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  )
};

ReactDOM.render(<App />, document.querySelector('.container'));
