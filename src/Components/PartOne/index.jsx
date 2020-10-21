import React, { Component } from 'react';
import './style.scss';

class PartOne extends Component {
  render() {
    return (
      <div>
        <div className="option-selected">
          <div className="option-box part-one">
            <h2>See...</h2>
            <img src={require('../../Images/dan-gif.gif')} alt="gif" />
            <h3>I told you I was a Web Developer! </h3>
          </div>
        </div>
      </div>
    );
  }
}

export default PartOne;
