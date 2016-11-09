import React from 'react';

export default class AddMovie extends React.Component {
    constructor(props) {
    super(props);
    let date = new Date()
    let rating = this.setRandomRating();
    this.state = {
      title: '',
      released: date.toISOString(),
      year: date.getFullYear(),
      genre: '',
      rating: rating,
      director: '',
      actors: '',
      poster: '',
      plot: '',
      genres: []
    }

    this.addGenres = this.addGenres.bind(this);
    this.submitMovie = this.submitMovie.bind(this);
    this.onTitleInput = this.onTitleInput.bind(this);
    this.onDateInput = this.onDateInput.bind(this);
    this.onGenreChange = this.onGenreChange.bind(this);
    this.onActorsInput = this.onActorsInput.bind(this);
    this.onDirectorsInput = this.onDirectorsInput.bind(this);
    this.onPosterInput = this.onPosterInput.bind(this);
    this.onPlotInput = this.onPlotInput.bind(this);
    this.submitMovie = this.submitMovie.bind(this);
  }

  getGenres(callback) {
    fetch("http://localhost:8000/api/genres", { method: 'GET'})
      .then(function(data){
        return data.json()
      }).then(function(json) {
        callback(json);
      }).catch(function(ex) {
        console.log('Error getting genres (parsing failed)', ex);
      })
  }

  addGenres(genres) {
    this.setState({ genres: genres });
  }

  componentWillMount () {
    this.getGenres(this.addGenres);
  }

  setRandomRating() {
    let rating = Math.random() * (5 - 1) + 1
    return Math.round(rating * 10) / 10
  }

  submitMovie() {

    let movie = {
      title: this.state.title,
      year: this.state.year,
      released: this.state.released,
      genre: this.state.genre,
      director: this.state.director,
      actors: this.state.actors,
      plot: this.state.plot,
      poster: this.state.poster,
      rating: this.state.rating
    }


    
    fetch("http://localhost:8000/api/movies", {
      method: "POST",
      mode: "cors",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(movie)
    })
    

    this.props.hideModal();

  }

  onTitleInput(event) {
    this.setState({ title: event.target.value });
  }

  onDateInput(event) {
    //console.log(event.target.value);

    let date = new Date(event.target.value)
    let dateISO = date.toISOString();
    let year = new Date(event.target.value).getFullYear()
    this.setState({ released: dateISO, year: year });
  }

  onGenreChange(event) {
    this.setState({ genre: event.target.value });
  }

  onActorsInput(event) {
    this.setState({ actors: event.target.value });
  }

  onDirectorsInput(event) {
    this.setState({ director: event.target.value });
  }

  onPosterInput(event) {
    this.setState({ poster: event.target.value });
  }

  onPlotInput(event) {
    this.setState({ plot: event.target.value });
  }


  render() {
    return(
  <div className="modal">
    <div className="form">
      <form id="movie-form">
        <a className="close" onClick={this.props.hideModal}>X</a>
        <h1>Add Movie</h1>
        <div>
          <label htmlFor="title"> Title </label>
          <input type="text" id="title" value={this.state.title} onChange={this.onTitleInput}/>
          <br />
        </div>
        <div>
          <label htmlFor="releaseDate"> Release </label>
          <input type="date" id="releaseDate" value={this.state.releaseDate} onChange={this.onDateInput}/>
          <br />
        </div>
        <div>
          <label htmlFor="categories"> Genres </label>
          <select name="categories" id="modalCategory" className="required" value={this.state.genre} onChange={this.onGenreChange}>
        {this.state.genres.map((genre) => <option key={genre} value={genre}>{genre}</option>)}
        </select>
          <br/>
        </div>
        <div>
          <label htmlFor="actors"> Actors </label>
          <input type="text" id="actors" value={this.state.actors} onChange={this.onActorsInput}/>
          <br/>
        </div>
        <div>
          <label htmlFor="directors"> Directors </label>
          <input name="directors" type="text" id="directors" value={this.state.director} onChange={this.onDirectorsInput}/>
          <br/>
        </div>
        
        <div>
          <label htmlFor="score"> Movie score</label>
          <div>
            <select id="rating" size="5" disabled value={this.state.rating}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          </div>
          <br />
        </div>
        <div>
          <label htmlFor="poster"> Poster URL </label>
          <input type="text" id="poster" required value={this.state.poster} onChange={this.onPosterInput}/>
          <br/>
        </div>
        <div >
          <label htmlFor="plot"> Plot </label>
          <textarea name="plot" id="plot" value={this.state.plot} onChange={this.onPlotInput}></textarea>
        </div>
        <div >
        <input className="Button" type="button" value="Submit" onClick={this.submitMovie}></input>
        </div>
      </form>
    </div>
  </div>
  )
 }
}