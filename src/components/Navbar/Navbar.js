import React, { Component } from 'react';
import { Link } from 'react-router'

import './Navbar.css';
class Navbar extends Component {

  constructor(props){
    super(props);
    this.state = {
      //State Properties
    };
  }

  render() {
    return (
        <nav className="navbar navbar-default">
          <div className="container-fluid">

            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href="#">Test</a>
            </div>

            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav">
                <li className="active"><Link to={`/`}>Home</Link></li>
                <li><Link to={`/about`}>About</Link></li>
                <li><Link to={`/img`}>Image</Link></li>
              </ul>
              <ul className="nav navbar-nav navbar-right">
                <li><Link to={`/`}>Home</Link></li>
              </ul>
            </div>

          </div>
        </nav>
    );
  } 

}

Navbar.defaultProps = {
  //Default properties
};

export default Navbar;
