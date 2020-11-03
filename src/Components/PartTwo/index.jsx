import React, { Component } from 'react';
import './style.scss';

class PartTwo extends Component {
  render() {
    return (
      <div className="option-selected">
        <div className="option-box part-two">
          <div className="part-two-box">
            <h1>Bio</h1>
            <p>
              <b>Name:</b> Daniel Burton
            </p>
            <p>
              <b>Age:</b> 24
            </p>
            <p>
              <b>Location:</b> Poole, Dorset
            </p>
            <p>
              <b>Unpopular Opinion:</b> Cheese is nasty...
            </p>
          </div>
          <div className="part-two-box">
            <h1>Skills</h1>
            <div className="language-display">
              <img src={require('../../Images/html.png')} alt="html" />
              <img src={require('../../Images/css.png')} alt="css" />
              <img src={require('../../Images/bootstrap.png')} alt="bootstrap" />
              <img src={require('../../Images/javascript.png')} alt="js" />
              <img src={require('../../Images/react.png')} alt="react.js" />
              <img src={require('../../Images/sass.png')} alt="sass" />
              <img src={require('../../Images/mongo.png')} alt="mongodb" />
              <img src={require('../../Images/github.png')} alt="github" />
              <img src={require('../../Images/jquery2.png')} alt="jquery" />
            </div>
          </div>
          <div className="part-two-box">
            <h1>Qualification</h1>
            <div className="qual">
              <img src={require('../../Images/ironhack.png')} alt="ironhack" />
              <div>
                <h4>Ironhack Lisbon</h4>
                <p>
                  <b>
                    <i>Top 3 Global Tech Academy</i>
                  </b>
                </p>
                <p>
                  This was a Web Development Bootcamp set in the heart of Lisbon, Portugal. During
                  my time on the course I covered a wide range of skills and coding languages. By
                  the end of the course, I had created three web applications.
                </p>
              </div>
            </div>
          </div>
          <div className="part-two-box">
            <h1>Employment</h1>
            <div className="qual">
              <img src={require('../../Images/ttr.png')} alt="the training room" />
              <div>
                <h4>The Training Room</h4>
                <p>
                  <b>
                    <i>IT Sales Executive</i>
                  </b>
                </p>
                <p>
                  Selling training courses and career opportunities amongst the IT sector -
                  including Web Development, Software Development, Cyber Security, Technicians and
                  Networking.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PartTwo;
