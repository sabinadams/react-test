import React, { Component } from 'react';
// import request from 'request';
import './About.css';
class About extends Component {

  constructor(props){
    super(props);
    this.state = {
      //State Properties
    };
  }

  getInfo() {
    return {
      name: 'Sabin',
      age: 19,
      lname: 'Adams'
    };
  }

  render() {

    let me = this.getInfo();
    return (

        <div id="about" className="container">
          <h2>Hello {me.name} {me.lname}</h2>
          <p>Age: {me.age}</p>
        </div>
    );
  } 

}

About.defaultProps = {
  //Default properties
};

export default About;
