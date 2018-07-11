import React, { Component } from 'react';

class MovieRow extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.movie.tittle}</td>
        <td>{this.props.movie.year}</td>
        <td>{this.props.movie.duration}</td>
      </tr>
    );
  }
}

export default class MovieList extends Component {
  render() {
    const rows = [];

    this.props.movies.forEach((movie) => {
      rows.push(
        <MovieRow
          movie={movie}
          key={movie.tittle} />
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