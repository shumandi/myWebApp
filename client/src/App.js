import React, { Component } from 'react';
import logo from './logo.svg';
import MdNavbar from './MdNavbar';
import MdFooter from './MdFooter';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MdNavbar />
        {this.props.children}
        <MdFooter/>
      </div>
    );
  }
}

export default App;
