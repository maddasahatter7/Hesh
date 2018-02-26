import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'jquery';
// the next part is so that bootstrap can find jquery by attaching jquery to global object
window.jQuery = window.$ = global.jquery;
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
