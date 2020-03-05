import React, { Component } from 'react';
import popcorntime from './popcorntime.png'

class Header extends Component {
  render(){
    return(

      <div>
        <img src={popcorntime}alt="popcorntime"/>
        <h1>Your Favorite Movies</h1>

      </div>

    );
  }
}

export default Header;
