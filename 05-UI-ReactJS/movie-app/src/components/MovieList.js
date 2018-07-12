import React, { Component } from 'react';
import MovieRow from './MovieRow';

export default class MovieList extends Component {
  render() {
    const rows = [];

    this.props.movies.forEach((movie) => {
      rows.push(
        <MovieRow
          movie={movie}
          key={movie.tittle}
          onEdit = {this.props.onEdit} />
      );
     
    });

    return (
      <table>
        <thead>
          <tr>
            <th>Tittle</th>
            <th>Year</th>
            <th>Duration</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}