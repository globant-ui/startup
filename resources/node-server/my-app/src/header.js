import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <div className="App-header">
     <nav>
     <ul>
        <a href="index.html"><li>Home</li></a>
        <a href="Movie.html"><li>Movies</li></a>
        <a href="AboutUs.html"><li>About Us</li></a>
        <a href="Contact.html"><li>Contact</li></a>
    </ul>   
    </nav>
        </div>
      </div>
    );
  }
}

export default Header;
