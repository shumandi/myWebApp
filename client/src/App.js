import React, { Component } from 'react';
import logo from './logo.svg';
import MdNavbar from './MdNavbar';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MdNavbar />
        {this.props.children}
      </div>
    );
  }
}

export default App;
