import React from 'react';

class Input extends React.Component{
  constructor(props) {
    super(props);
    this.state = { }
  }

  render() {
    return (
      <div>
        <input {...this.getProps()}></input>
      </div>
    );
  }

  getProps () {
    return {
      id: this.props.id,
      onChange: this.props.onChange,
      placeholder: this.props.holder,
      type: this.props.type,
      value: this.props.value
    };
  }
};
export default Input
