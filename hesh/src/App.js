import React, { Component } from 'react';
import ThreadDisplay from './components/ThreadDisplay/components/ThreadDisplay';
import Jumbo from './components/Jumbotron';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Jumbo />
        <ThreadDisplay />
      </div>
    );
  }
}


export default App;
