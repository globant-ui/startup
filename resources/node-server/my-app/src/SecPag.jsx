import React from 'react';
import ContentMov from './ContentMov.jsx';

export default class SecPag extends React.Component {
    constructor(props) {
    super(props)
    this.state = {
      RecentMov: []
    }

    this.addMovies = this.addMovies.bind(this);
  }

  addMovies(data) {
    this.setState({ RecentMov: data });
  }

  getRecentMov(callback) {
    fetch("http://localhost:8000/api/movies?order=released&limit=3",{ method: "GET"})
      .then(function(data) {
        return data.json();
      }).then(function(json) {
        callback(json);
      }).catch(function(ex) {
        console.log("Error getting lastest movies", ex);
      });
  }


  componentWillMount() {
    this.getRecentMov(this.addMovies);
  }

	render() {
		return (
      <section>
             <h1>Premieres</h1>
             <div>
            {this.state.RecentMov.map((movie) => <ContentMov key={movie.id} movie={movie}/>)}
            </div>
      </section>
      )
  }
}