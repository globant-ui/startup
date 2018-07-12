import React, { Component } from 'react';
import './movieInput.css';

// Handling Events on React : https://reactjs.org/docs/handling-events.html
//Forms in React : https://reactjs.org/docs/forms.html

class MovieInput extends Component{
  constructor(props){
    super(props);

    this.state = {value: '' };

    // This binding is necessary to make `this` work in the callback
    this.handleChange = this.handleChange.bind(this);
    this.addMovie = this.addMovie.bind(this);
  }

  handleChange(e) {
    this.setState({value: e.target.value})
  }

  addMovie(movie){
    console.log("Movie: ", movie);
    //Check if the text isn't empty
    if(movie.length > 0 ){
      this.props.addMovie(movie);
      this.setState({value:''}); // empty the field.
    }

  }



  render(){
    return(
      <div>
        <input
            type="text"
            value= {this.state.value}
            onChange={this.handleChange}
        />
        <button className="btn btn-primary" onClick={()=> this.addMovie(this.state.value)}>
          Add
        </button>

      </div>
    );
  }
}

export default MovieInput;
