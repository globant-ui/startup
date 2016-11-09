import React from 'react';
import Footer from './Footer.js';
import Nav from './Nav.jsx';
import Aside  from './Aside';
import SecPag   from './SecPag.jsx';
import Movies from './Movies.jsx';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeArt: "main",
      content: <SecPag />
    }
    this.onClick = this.onClick.bind(this);
  }

  onClick(content) {
      switch(content) {
        case 'main':
        this.setState({ content: <SecPag/> });
          break;  
        case 'movies':
        this.setState({ content: <Movies/>}); 
          break;
        case 'help':
        /*this.setState({ content: <Help/>}); */
          break;
        case 'aboutus':
        /*this.setState({ content: <AboutUs/>}); */
          break; 
        case 'contact':
        /*this.setState({ content: <Contact/>}); */
          break; 
        default :
      }
  }
	  

  render() {
    return (
      <div>
        <Nav active={this.state.activeArt} click={this.onClick} />
       	{this.state.content}
        <Aside />
        <Footer/>
      </div>
    );
  }
}