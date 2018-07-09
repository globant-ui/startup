import React, { Component } from 'react';
import './App.css';


function MovieData(props) {
  const movie = props.movie;
  return (
    <table>
      <td>{movie.tittle}</td>
      <td>{movie.year}</td>
      <td>{movie.duration}</td>
    </table>
  );
}

/*
class MovieCreator extends Componente {
  render() {
    return (
      <fieldset>
        <input type="text" value={props.movies.tittle}></input>
        <input type="number" value={props.movies.year}></input>
        <input type="time" value={props.movies.duration}></input>
        <input type="buttom" value="add" onClick="this.props.handleClick" > Add Movie!! </button>
      </fieldset>
    );
  }
}
*/

class App extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      movies: []
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    
    const tittle = e.target[0].value;
    const year = e.target[1].value;
    const duration = e.target[2].value;

    let newMovie = {
      tittle: {tittle},
      year: {year},
      duration: {duration}
    };

    this.setState(prevState => ({
      movies: [...prevState.movies, newMovie]
    }));
      
    console.log(this.state.movies.tittle);
  }

  render() {
    return (
      <form onSubmit = {this.handleSubmit}>
        <input type="text" name = "tittle" placeholder="Tittle" ></input>
        <input type="number" name = "year" min = "1920" max = "2018" placeholder="Year" ></input>
        <input type="time" name = "duration"></input>
        <button type= "submit"> Add Movie</button>
      </form>
    );
  }
}

export default App;
