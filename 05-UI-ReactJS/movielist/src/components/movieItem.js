import React, { Component } from 'react';
import './movieItem.css';

class MovieItem extends Component {
  constructor(props){
    super(props);
    this.state = {editing: false}
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({value: e.target.value})
  }
  removeMovie(id){
    this.props.removeMovie(id);
  }

  handleEditing(event){
    this.setState({editing: 'true'})
  }


  render(){
    var viewStyle = {};
    var editStyle = {};

    if (this.state.editing) {
      viewStyle.display = 'none';
    } else {
      editStyle.display = 'none';
    }
    return (
      <div className = "movieWrapper" style={viewStyle}>

        <button className = "removeMovie" onClick={(e)=>this.removeMovie(this.props.id)}>
          X
        </button>
        <label>
            {this.props.movie.name}
        </label>





      </div>
    )
  }
}

export default MovieItem;
