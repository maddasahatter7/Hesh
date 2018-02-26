import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.addPost = this.addPost.bind(this);
    this.state = {
      posts: [],
    }
  }

  addPost(newPostBody) {
   const newState = Object.assign({}, this.state);
   newState.posts.push(newPostBody);
   this.setState(newState);
  }


  
  render() {
    return (

    );
  }
}

export default App;
