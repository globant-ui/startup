import React, { Component } from 'react';
import MovieEditor from './MovieEditor';

export default class MovieRow extends Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.state = {
      editing: false
    };
  }

  handleDelete = (e) => {
    this.props.onDelete(this.props.movie);
  }

  handleEdit = () => {
    let val = !this.state.editing;
    this.setState(
      { editing: val }
    );
  }

  render() {
    if (!this.state.editing) {
      return (
        <tr>
          <td>{this.props.movie.tittle}</td>
          <td>{this.props.movie.year}</td>
          <td>{this.props.movie.duration}</td>
          < td >
            <button
              className="listButton"
              onClick={this.handleEdit} >
              <i class="material-icons">edit</i>
            </button></td>
          <td>
            <button
              name="delete"
              className="listButton"
              onClick={this.handleDelete} >
              <i class="material-icons">delete</i>
            </button>
          </td>
        </tr>
      );
    } else {
      return (
        <tr>
          <td> <MovieEditor movie={this.props.movie} onEdit={this.props.onEdit} handleEdit={this.handleEdit} /> </td>
        </tr>
      );
    }
  }
}

