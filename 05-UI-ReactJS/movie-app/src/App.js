import React, { Component } from 'react';
import MovieCreator from './components/MovieCreator';
import './App.css';


function MovieDataRow(props) {
  return (
    <tr>
      <td>{this.props.tittle}</td>
      <td>{this.props.year}</td>
      <td>{this.props.duration}</td>
    </tr>
  );
}

class MovieList extends Component {
  constructor (props){
    super(props);

  }

  render() {
    return (
      <table>
        <tr>
          <th> Tittle </th>
          <th> Year </th>
          <th> Duration </th>
        </tr>
      </table>
    )
  }
}

class App extends Component {
  render(){
    return(
      <div>
        <MovieCreator/>
      </div>
    )
  }
}

export default App;
