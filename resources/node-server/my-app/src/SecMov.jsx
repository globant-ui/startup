import React from 'react';

export default class SecMov extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
      sort: '',
      genres: [],
      search: ''
    }

    this.addGenres = this.addGenres.bind(this);
    this.onClickAll = this.onClickAll.bind(this);
    this.onClickPopular = this.onClickPopular.bind(this);
    this.onClickRecent = this.onClickRecent.bind(this);
    this.onSearchInput = this.onSearchInput.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.onSelectInput = this.onSelectInput.bind(this);
    this.onSelectChange = this.onSelectChange.bind(this);
    this.addMovieModal = this.addMovieModal.bind(this);
  }

onClickAll() {
    this.setState({ sort: "sortAll" }, this.changeContentAll);
  }

  onClickPopular() {
    this.setState({ sort: "sortByPopular" }, this.changeContentPopular);
  }

  onClickRecent() {
    this.setState({ sort: "sortByRecent" }, this.changeContentRecent);
  }

  changeContentAll() {
    this.props.click("sortAll");
  }

  changeContentPopular() {
    this.props.click("sortByPopular");
  }

  changeContentRecent() {
    this.props.click("sortByRecent");
  }

  addMovieModal() {
    this.props.showModal();
  }

  onSearchInput(event) {
    this.setState({search: event.target.value}, () => this.onInputChange(this.state.search));
  }

  onInputChange(input) {
    this.setState({
      search: input}, this.props.inputChange(input));
  }

  onSelectInput(value) {
    this.setState({ genre: value.target.value }, () => this.onSelectChange(this.state.genre));
  }

  onSelectChange(value) {
    this.setState({ genre: value}, this.props.selectChange(value));
  }


  addGenres(data) {
    data.unshift("All");
    this.setState({genres: data});
  }

  getGenres(callback) {
    fetch("http://localhost:8000/api/genres", { method: 'GET'})
      .then(function(data){
        return data.json();
      }).then(function(json) {
        callback(json);
      }).catch(function(ex) {
        console.log('Error, parsing failed', ex);
      })
  };

  componentWillMount() {
    this.getGenres(this.addGenres)
  }


   render() {
    return ( 
      <nav>
        <ul >
        <div>
          <a href="#" className={this.state.sort === "sortAll" ? "active" : ""} onClick={this.onClickAll}><li>All</li></a>
          <a href="#" className={this.state.sort === "sortByPopular" ? "active" : ""} onClick={this.onClickPopular}><li>Popular</li></a>
          <a href="#" className={this.state.sort === "sortByRecent" ? "active" : ""} onClick={this.onClickRecent}><li>Recent</li></a>
        </div>
        <div>   
           <li><input type="text" placeholder="title, actor or description" onChange={this.onSearchInput}/></li>
            <li><select name="genres" id="category" onChange={this.onSelectInput}>
                    {this.state.genres.map((category) => <option key={category} value={category}>{category}</option>)}
            </select></li>
        </div>
        <div>
        <a href="#" onClick={this.addMovieModal}><li>Add Movie</li></a>
        </div>
        
          </ul>
        </nav>
    )
  }
}