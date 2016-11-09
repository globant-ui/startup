import React from 'react';
import SecMov from './SecMov.jsx';
import Content from './Content.jsx';
import PageDes from './PageDes.jsx';
import AddMovie from './Modal.js';

export default class Movies extends React.Component {
    constructor(props) {
    super(props)
    this.state = {
      movies: [],
      sort: '',
      search: '',
      genre: 'All',
      content: '',
      modal: ''
    }

    this.addMovies = this.addMovies.bind(this);
    this.onClick = this.onClick.bind(this);
    this.onChange = this.onChange.bind(this);
    this.showMovies = this.showMovies.bind(this);
    this.onSelect = this.onSelect.bind(this);
    this.showMovieData = this.showMovieData.bind(this);
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  addMovies(data) {
    this.setState({ movies: data, content: data.map((movie) => <Content movie={movie} key={movie.id} showMovieData={this.showMovieData}/>)});
  }

  showMovieData(id) {
    this.setState({ content: <PageDes movieId={id}/> });
  } 

  getAllMovies(callback) {
    fetch("http://localhost:8000/api/movies",{ method: "GET"})
      .then(function(data) {
        return data.json();
      }).then(function(json) {
        callback(json);
      })
  }


  getByPopular(callback) {
   fetch("http://localhost:8000/api/movies?order=rating&limit=3", { method: "GET" })     
     .then(function(data) {    
       return data.json();
     }).then(function(json) {    
        callback(json);   
     })    
  }

  getByRecent(callback) {
   fetch("http://localhost:8000/api/movies?order=released&limit=3", { method: "GET" })
     .then(function(data) {    
      return data.json();   
      }).then(function(json) {    
       callback(json);   
      })   
  }

  getBySearch(callback) {
    let url = "http://localhost:8000/api/movies"

    if (this.state.genre === "All")
      url += "?search=" + this.state.search
    if (this.state.genre !== "All")
      url += "?genre=" + this.state.genre + "&search=" + this.state.search

    fetch(url, {method: "GET" })
      .then(function(data) {
        return data.json();
      }).then(function(json) {
        callback(json);
      })

  }

  showMovies() {
       switch(this.state.sort) {
        case "sortAll": 
        this.getAllMovies(this.addMovies);
          break;  
        case "sortByPopular":
        this.getByPopular(this.addMovies); 
          break;
        case "sortByRecent":
        this.getByRecent(this.addMovies); 
          break; 
        default :
      }
  
  }

  showFilteredMovies() {
    this.getBySearch(this.addMovies);   
  }

  onClick(sort) {
    this.setState({ sort: sort }, this.showMovies);
  }

  onChange(search) {
    this.setState({ search: search }, this.showFilteredMovies);
  }

  onSelect(value) {
    this.setState({ genre : value }, this.showFilteredMovies);
  }

  componentWillMount() {
    this.getAllMovies(this.addMovies);
  }
  showModal() {
    this.setState({ modal: <AddMovie hideModal={this.hideModal}/>});
  }

  hideModal() {
    this.setState({ modal: ''});
  }


  render() {
    console.log(this.state.search)
    return (
      <section>
      <div>
      {this.state.modal}
      <SecMov sort={this.state.sort} click={this.onClick} inputChange={this.onChange} selectChange={this.onSelect} showModal={this.showModal} />
      <div>
      {this.state.content}
      </div>
      </div>
    </section>
    )
  }
}