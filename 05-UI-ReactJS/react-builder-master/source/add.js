import React from 'react';
import Form from './form';

class Add extends React.Component {
  constructor(props) {
    super(props);

    this.states = { };
  }

  handlerSubmitForm(event) {
    let movies = JSON.parse(localStorage.getItem("moviesLocalStorage")) || [];
    movies.push(event);
    localStorage.setItem("moviesLocalStorage", JSON.stringify(movies));
  }

  render() {
    return (
      <Form onSubmit={this.handlerSubmitForm} />
    );
  }
};

export default Add
