import React, { Component } from 'react';
import './App.css';

import Header from './components/header'
import MovieInput from './components/movieInput'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="movies-wrapper">
            <Header />
            <MovieInput />
        </div>
      </div>
    );
  }
}

export default App;
