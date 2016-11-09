import React from 'react';
import Data from './Data.jsx'

export default class PageDes extends React.Component {

  constructor(props) {
     super(props);
     this.state = {
      movie: {
         title: "",
         year: "",
         poster: "",
         director: "",
         actors: "",
         plot: "",
         rating: ""
       },
       content: ''
     }
 
     this.setMovieData = this.setMovieData.bind(this);
     this.getMovie = this.getMovie.bind(this);
    }

    callMovie(callback) {
    fetch("http://localhost:8000/api/movies/" + this.props.movieId, { method: "GET"})
       .then(function(response) {
         return response.json();
       }).then(function(json) {
         callback(json);
       }).catch(function(ex) {
         console.log(ex);
       })
   }

   setMovieData(movie) {
     this.setState( {
       movie: movie,
       content: <Data movie={movie}/>
     });
   }

   getMovie() {
     this.callMovie(this.setMovieData);
   }

   componentWillMount() {
     this.getMovie();
   }

	render() {
		return (
        <div>
        {this.state.content}
        </div>
		)
	}
}