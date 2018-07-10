import React, { Component } from 'react';
import MovieCreator from './components/MovieCreator';
import './App.css';




class App extends Component {
  constructor(){
    super();
    this.onUpdate = this.onUpdate.bind(this);
    this.state = {
      movies: []
    };
  }

  onUpdate(newMovie) {
    this.setState(prevState => (
      {movies: [...prevState.movies, newMovie] }
    ));
  }
  

  render(){
    return(
      <div>
        <MovieCreator onUpdate = {this.onUpdate}/>
      </div>
    )
  }
}

export default App;
