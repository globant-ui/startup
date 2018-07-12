import React, { Component } from 'react';
import MovieCreator from './components/MovieCreator';
import MovieList from './components/MovieList';
import './App.css';


class App extends Component {
  constructor() {
    super();

    this.onCreate = this.onCreate.bind(this);
    this.onEdit = this.onEdit.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.state = {
      movies: []
    };
  }

  onCreate(newMovie) {
    this.setState(prevState => (
      { movies: [...prevState.movies, newMovie] }
    ));
  }

  onEdit(newMovie, position) {
    let upMovies = [...this.state.movies];
    upMovies[position] = { ...upMovies[position], movies: newMovie };
    this.setState({ movies: upMovies });
  }

  onDelete(deletedMovie) {
    this.setState({
      movies: this.state.movies.filter((movie) => {
        return movie !== deletedMovie
      })
    });
  }

  render() {
    return (
      <div>
        <MovieCreator onCreate={this.onCreate} />
        <MovieList movies={this.state.movies} onEdit={this.onEdit} onDelete={this.onDelete} />
      </div>
    )
  }
}

export default App;
