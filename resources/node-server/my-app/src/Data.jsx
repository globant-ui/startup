import React, {Component} from 'react';
 
export default class Data extends Component {

	render() {
		return (
			<div>
			<h1>{this.props.movie.title} ({this.props.movie.year})</h1>
			<img className="movi" alt="poster" src={this.props.movie.poster}/>
			<p>Director: {this.props.movie.director}</p>
			<p>Actors: {this.props.movie.actors}</p>
			<p>Rating: {this.props.movie.rating}</p>
			<article>Description: {this.props.movie.plot}</article>
			</div>
		);
	}
}