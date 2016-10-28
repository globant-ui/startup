import React from 'react';
import List from './list';
import Add from './add';
import Edit from './edit';

class Application extends React.Component {

  getAllMovies() {
    let movies = localStorage.getItem("moviesLocalStorage") || [];
    return JSON.parse(movies);
  }

  render() {
    return (
      <div>
        <Add />
        <h1>Favourites Movies</h1>
        <List movies={this.getAllMovies()} />
        <h1>All Movies</h1>
        <Edit movies={this.getAllMovies()} />
      </div>
    );
  }
};

export default Application
