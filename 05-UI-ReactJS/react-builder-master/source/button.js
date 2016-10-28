import React from 'react';

class Button extends React.Component{
  constructor(props) {
    super(props);
    this.state = { }
  }

  render() {
        return (
            <div className="buttonsSection">
              <button {...this.getProps()}>{this.props.value}</button>
            </div>
        );
  }

  getProps () {
    return {
      className: this.props.clase,
      id: this.props.id,
      name: "button",
      onClick: this.props.click,
      type: "button"
    };
  }
};

export default Button
