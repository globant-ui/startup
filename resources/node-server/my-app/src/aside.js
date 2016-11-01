import React, { Component } from 'react';

class Aside extends Component {
  render() {
    return (
      <div className="Aside">
        <div className="Aside-Aside">
     <aside>
        <img id="publicidad" src="image/star.jpg" />
        <img id="publicidad" src="image/pepsi.jpg" />
        <img id="publicidad" src="image/coca.png" />
        <img id="publicidad" src="image/mcdonald.jpg" />
      </aside>
        </div>
      </div>
    );
  }
}

export default Aside;