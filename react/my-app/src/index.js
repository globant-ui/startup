import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Elements/App';
import registerServiceWorker from './registerServiceWorker';
import Scrollbar from 'react-smooth-scrollbar';

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
registerServiceWorker();
