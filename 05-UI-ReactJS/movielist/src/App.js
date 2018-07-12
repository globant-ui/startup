import React, { Component } from 'react';
import './App.css';

import Header from './components/header';
import MovieInput from './components/movieInput';
import MovieItem from './components/movieItem';

class App extends Component {  /*note: child doesn't chage props, only change state. (state are internal to the component, props are external) */
  constructor(props){
    super(props);

    this.state = {
      movies: [
        {id: 0 , text: "Pulp Fiction"},
        {id: 1 , text: "Iron Man"},
        {id: 2 , text: "The Shining"},
      ],
      nextId: 3
    }

    this.addMovie = this.addMovie.bind(this);
    this.removeMovie = this.removeMovie.bind(this);
    // this.editMovie = this.editMovie.bind(this);
  }

  addMovie(movieName){
    console.log("New movie Added: ", movieName);

  }

  removeMovie(id){
    console.console.log("A movie has been removed: ", id);
  }

  render() {
    return (
      <div className="App">
        <div className="movies-wrapper">
            <Header />
            <MovieInput movieName="" addMovie={this.addMovie}/>
            <ul>
              {
                this.state.movies.map((movie) => {
                  return <MovieItem
                            movie={movie}
                            key={movie.id}
                            id={movie.id}
                            removeMovie ={this.removeMovie}
                          />
                })
              }
            </ul>
        </div>
      </div>
    );
  }
}

export default App;
