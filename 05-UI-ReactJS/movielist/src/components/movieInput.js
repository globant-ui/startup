import React, { Component } from 'react';
import './movieInput.css';

//Handling Events on React : https://reactjs.org/docs/handling-events.html

class MovieInput extends Component{
  constructor(props){
    super(props);

    this.state = {value: "test" };

    // This binding is necessary to make `this` work in the callback
    this.handleChange = this.handleChange.bind(this);
    this.addMovie = this.addMovie.bind(this);
  }

  handleChange(e) {
    console.log("change here");
  }

  addMovie(movie){
    console.log("Movie: ", movie);
  }



  render(){
    return(
      <div>
        <input
            type="text"
            value= ""
            onChange={this.handleChange}
        />
        <button className="btn btn-primary" onClick={()=> this.addMovie(this.state.value)}>
          Submit
        </button>

      </div>
    );
  }
}

export default MovieInput;
