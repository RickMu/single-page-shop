import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Mainview from "./components/shop";


class App extends Component {
  render() {
    return (
      <div className="App">
        <Mainview/>
      </div>
    );
  }
}

export default App;
