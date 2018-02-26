import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'jquery';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
// the next part is so that bootstrap can find jquery by attaching jquery to global object
global.jQuery = require ('jquery');
require('bootstrap');

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
