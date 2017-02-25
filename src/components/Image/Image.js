import React, { Component } from 'react';
import './Image.css';
class Image extends Component {

  constructor(props){
    super(props);
    this.state = {
      imgSrc:"http://placehold.it/100x100",
      imgAlt:"This is an image."
    };
  }

  handleClick(){
    let img = this.state.imgSrc === 'http://placehold.it/100x100' ? 'http://aqconnect.io/saicopath.jpg' : 'http://placehold.it/100x100';
    this.setState({imgSrc: img});
  }

  render() {
    return (
      <div id="img" className="container">
        <h2>This is a Page</h2>
        <img src={this.state.imgSrc} alt={this.state.imgAlt} width={this.props.width} height={this.props.height}/>
        <br />
        <button onClick={(e) => this.handleClick(e)}>Change Me</button>
      </div>
    );
  } 

}

Image.defaultProps = {
  height: '100px',
  width: 'auto'
};

export default Image;
