import React, { Component } from 'react';
import './App.css';

class MovieRow extends Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.state = {
      editing: false
    };
  }

  handleDelete = (e) => {
    this.props.onDelete(this.props.movie);
  }

  handleEdit = (e) => {
    let val = !this.state.editing;
    this.setState( 
      {editing:val} 
    );
  }

  render() {
    if (!this.state.editing) {
      return (
        <tr>
          <td>{this.props.movie.tittle}</td>
          <td>{this.props.movie.year}</td>
          <td>{this.props.movie.duration}</td>
          < td >
            <button
              className="listButton"
              onClick={this.handleEdit} >
              <i class="material-icons">edit</i>
            </button></td>
          <td>
            <button
              name="delete"
              className="listButton"
              onClick={this.handleDelete} >
              <i class="material-icons">delete</i>
            </button>
          </td>
        </tr>
      );
    } else {
      return (
        <tr>
          <td> <MovieEditor onEdit={this.props.onEdit} /> </td>
          < td >
            <button
              className="listButton"
              onClick={this.handleEdit} >
              <i class="material-icons">edit</i>
            </button></td>
          <td>
            <button
              className="listButton"
              onClick={this.handleDelete} >
              <i class="material-icons">delete</i>
            </button>
          </td>
        </tr>
      );
    }
  }
}

class MovieList extends Component {
  render() {
    const rows = [];

    this.props.movies.forEach((movie) => {
      rows.push(
        <MovieRow
          movie={movie}
          key={rows.length}
          onEdit={this.props.onEdit}
          onDelete={this.props.onDelete} />
      );

    });

    return (
      <table>
        <thead>
          <tr>
            <th>Tittle</th>
            <th>Year</th>
            <th>Duration</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

class MovieEditor extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      tittle: "",
      year: "",
      duration: "",
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    let movie = {
      tittle: this.state.tittle,
      year: this.state.year,
      duration: this.state.duration
    }

    this.props.onEdit(movie, Number.parseInt(this.props.key));

    this.setState({
      tittle: "",
      year: "",
      duration: "",
    })
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="tittle"
          placeholder="Tittle"
          value={this.state.tittle}
          onChange={this.handleChange}
          required
        />
        <input
          type="number"
          name="year"
          min="1920"
          max="2018"
          placeholder="Year"
          value={this.state.year}
          onChange={this.handleChange}
          required
        />
        <input
          type="time"
          name="duration"
          value={this.state.duration}
          onChange={this.handleChange}
          required
        />
        <button type="submit"> Done</button>
      </form>
    );
  }
}

class MovieCreator extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      tittle: "",
      year: "",
      duration: "",
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    let movie = {
      tittle: this.state.tittle,
      year: this.state.year,
      duration: this.state.duration
    }

    this.props.onCreate(movie);

    this.setState({
      tittle: "",
      year: "",
      duration: "",
    })
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="tittle"
          placeholder="Tittle"
          value={this.state.tittle}
          onChange={this.handleChange}
          required
        />
        <input
          type="number"
          name="year"
          min="1920"
          max="2018"
          placeholder="Year"
          value={this.state.year}
          onChange={this.handleChange}
          required
        />
        <input
          type="time"
          name="duration"
          value={this.state.duration}
          onChange={this.handleChange}
          required
        />
        <button type="submit"> Add movie </button>
      </form>
    );
  }
}

class App extends Component {
  constructor() {
    super();

    this.onCreate = this.onCreate.bind(this);
    this.onEdit = this.onEdit.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.state = {
      movies: []
    };
  }

  onCreate(newMovie) {
    this.setState(prevState => (
      { movies: [...prevState.movies, newMovie] }
    ));
  }

  onEdit(newMovie, position) {
    let array = this.state.movies;
    array[position] = newMovie;
    this.setState(
      { movies: array }
    );
  }

  onDelete(deletedMovie) {
    this.setState({
      movies: this.state.movies.filter((movie) => {
        return movie !== deletedMovie
      })
    });
  }

  render() {
    return (
      <div>
        <MovieCreator onCreate={this.onCreate} />
        <MovieList movies={this.state.movies} onEdit={this.onEdit} onDelete={this.onDelete} />
      </div>
    )
  }
}

export default App;
