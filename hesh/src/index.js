import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'jquery';
import registerServiceWorker from './registerServiceWorker';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';
// require ('bootstrap');
// // the next part is so that bootstrap can find jquery by attaching jquery to global object
// global.jQuery = require ('jquery');


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
