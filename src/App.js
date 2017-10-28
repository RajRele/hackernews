import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    var helloWorld = "Hi, this is Bharat, welcome to my first react app!";
    return(
      <div>
        <h2>{helloWorld}</h2>
      </div>
    );
  }
}

export default App;
