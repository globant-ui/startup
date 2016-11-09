import React from 'react';

export default class Countent extends React.Component {

  constructor(props) {
        super(props);
        this.state = {
        movie: props.movie
    }

    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.props.showMovieData(this.state.movie.id);
    console.log("click");
    } 
    
  render() {
    return (
      <li>
      <a onClick={this.onClick} key='movie-poster'><img id={this.props.movie.id} className="movi" alt="Presentation" src={this.props.movie.poster} /></a>
      </li>
    )
  }
}