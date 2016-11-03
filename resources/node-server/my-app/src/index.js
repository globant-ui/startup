import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header';
import Aside from './aside';
import Footer from './footer';
import Home from './home';
//import './function.js';
import './index.css';

ReactDOM.render(
  <div>
  <Header />
  <Aside />
  <Home />
  <Footer />
  </div>,
  document.getElementById('root')
);


