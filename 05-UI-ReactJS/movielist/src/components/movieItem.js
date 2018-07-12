import React, { Component } from 'react';
import './movieItem.css';

class MovieItem extends Component {
  constructor(props){
    super(props);
  }

  removeMovie(id){
    this.props.removeMovie(id);
  }

  render(){
    return (
      <div className = "movieWrapper">
        <button className = "removeMovie" onClick={(e)=>this.removeMovie(this.props.id)}>
          X
        </button>
        {this.props.movie.text}
      </div>
    )
  }
}

export default MovieItem
