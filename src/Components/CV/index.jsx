import React, { Component } from 'react';
import './style.scss';
// import $ from 'jquery';
import PartOne from '../PartOne/index';
import PartTwo from '../PartTwo/index';
import PartThree from '../PartThree/index';

class Cv extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showComponentOne: false,
      showComponentTwo: false,
      showComponentThree: false,
    };
  }

  render() {
    return (
      <div>
        <div className="cv-button-options">
          <button
            className="button-option"
            onClick={() => {
              this.setState({
                showComponentOne: !this.state.showComponentOne,
                showComponentTwo: false,
                showComponentThree: false,
              });
            }}
          >
            <p>Few Seconds..</p>
          </button>
          {this.state.showComponentOne ? <PartOne /> : null}
          <button
            className="button-option"
            onClick={() => {
              this.setState({
                showComponentTwo: !this.state.showComponentTwo,
                showComponentOne: false,
                showComponentThree: false,
              });
            }}
          >
            <p>Few Minutes..</p>
          </button>
          {this.state.showComponentTwo ? <PartTwo /> : null}
          <button
            className="button-option"
            onClick={() => {
              this.setState({
                showComponentThree: !this.state.showComponentThree,
                showComponentOne: false,
                showComponentTwo: false,
              });
            }}
          >
            <p>Grab a cuppa..</p>
          </button>
        </div>
        {this.state.showComponentThree ? <PartThree /> : null}
      </div>
    );
  }
}

export default Cv;
