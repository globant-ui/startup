import React from 'react';

export default class ContentMov extends React.Component {

  constructor(props) {
        super(props);
        this.state = {
        movie: props.movie
    }

    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.props.showMovieData(this.state.movie.id);
    } 
    
  render() {
    return (
      <li id={this.props.movie.id}>
      <a onClick={this.onClick} key='movie-poster'><img className="movi" alt="poster" src={this.props.movie.poster} /></a>
      </li>
    )
  }
}