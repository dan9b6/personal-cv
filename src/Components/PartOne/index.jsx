import React, { Component } from 'react';
import './style.scss';

class PartOne extends Component {
  render() {
    return (
      <div>
        <div className="option-selected">
          <div className="option-box part-one">
            <div className="wrapper">
              <h1>See...</h1>
              <img className="p1-img" src={require('../../Images/part-one.gif')} alt="me gif" />
              <h1>I told you I was a developer!</h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PartOne;
