import React, { Component } from 'react';
import Post from './Post/component/Post';
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
        <Post />
          <div className="panel panel-default post-editor-input">
            <div className="panel-body">
              <textarea className="form-control" />
              <button className="btn btn-success post-editor-button">Post</button>
            </div>
           </div>
      </div>



    );
  }
}

export default App;
