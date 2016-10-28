import React from 'react';
import Button from './button';

class List extends React.Component {
  constructor(props) {
    super(props);

    this.states = { }

    this.renderListFav = this.renderListFav.bind(this);
  }

  renderListFav () {
    let favMovies = this.props.movies.filter(
      function(item) {
        return item.fav
      })
    return favMovies.map(this.renderItem);
  }

  renderItem (item, index) {
    return (
      <li key={index}>
        {`Title: ${item.title} Year: ${item.year} Duration: ${item.duration}`}
      </li>
    );
  }

  render() {
    return (
      <div>
        {this.renderListFav()}
      </div>
    );
  }
};
export default List
