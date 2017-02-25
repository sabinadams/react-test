import React, { Component } from 'react';
import './App.css';

import Navbar from './components/Navbar/Navbar';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Navbar></Navbar>
        {this.props.children}
      </div>
    );
  }
}

export default App;
