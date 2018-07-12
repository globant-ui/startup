import React, { Component } from 'react';
//import MovieListEditor from './components/MovieListEditor';

export default class MovieRow extends Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            editing: false
        };
    }
    
    handleClick = (e) =>{
        this.setState = prevState =>{

        }
    }

    render() {
      return (
        <tr>
          <td>{this.props.movie.tittle}</td>
          <td>{this.props.movie.year}</td>
          <td>{this.props.movie.duration}</td>
          <td> <button value = "Edit" onClick = {this.handleClick} /> </td>
        </tr>
       
      );
    }
  }