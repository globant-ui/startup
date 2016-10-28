import React from 'react';
import Button from './button';
import Form from './form';

class Edit extends React.Component {
  constructor(props) {
    super(props);

    this.states = { }

  }

  handlerSubmitForm(event) {

  }

  render() {
    return (
      <div>
        
        <Form onSubmit={this.handlerSubmitForm} />
      </div>
    );
  }
};
export default Edit
