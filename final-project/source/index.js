import App from './js/app.js';
import {browserHistory} from 'react-router';
import firebase from 'firebase';
import makeRoutes from './js/routes.js';
import React from 'react';
import ReactDOM from 'react-dom';

const routes = makeRoutes();
const mountNode = document.querySelector('#app');

// Initialize Firebase
let config = {
  apiKey: "AIzaSyCilnoihsxJyUE2RQjq4-JEcOXNrsz631g",
  authDomain: "countries-ba19c.firebaseapp.com",
  databaseURL: "https://countries-ba19c.firebaseio.com",
  storageBucket: "countries-ba19c.appspot.com",
  messagingSenderId: "281058127248"
};
firebase.initializeApp(config);

ReactDOM.render(
  (<App history={browserHistory} routes={routes} />),
  mountNode
);
