import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <div className="jumbotron">
          <h1>Hello, world!</h1>
             <p>...</p>
               <p><a className="btn btn-primary btn-lg" href="getbootstrap.com" role="button">Learn more</a></p>
        </div>
     
        <div className="panel panel-default post-editor">
          <div className="panel-body">
            <textarea />
          </div>
        </div>
      </div>


          
    );
  }
}

export default App;
