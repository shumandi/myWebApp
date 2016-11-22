import React, { Component } from 'react';
import MdNavbar from './MdNavbar';
import MdFooter from './MdFooter';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
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
