import React, { Component } from 'react';
import './style.scss';
import Aos from 'aos';
import 'aos/dist/aos.css';

class Projects extends Component {
  componentDidMount() {
    Aos.init({
      duration: 2000,
    });
  }

  render() {
    return (
      <div>
        <img className="point-down" src={require('../../Images/point-down.png')} alt="me" />
        <div className="projects">
          <h1>Projects!</h1>
          <div className="wrapper">
            <div className="box-position">
              <div className="box" data-aos="fade-up">
                <img src={require('../../Images/puffdaddy.png')} alt="puffdaddy" />
                <h3>Puff Daddy</h3>
                <p>
                  I created this game using <b>CanvasJS, JS, HTML & CSS.</b> The aim of the game is
                  to keep this Pufferfish alive by swimming under the hooks and over the seaweed.
                  Also, you have to avoid floating plastic in the sea. If you hit the plastic the
                  Pufferfish will rage and double in size - making it much harder to avoid the
                  obstacles!
                </p>
                <a href="https://github.com/dan9b6/PuffDaddy">See the code</a>
              </div>

              <div className="box" data-aos="fade-up" data-aos-delay="100">
                <img src={require('../../Images/foothead.png')} alt="foothead" />
                <h3>Footheads</h3>
                <p>
                  This is a web app created using{' '}
                  <b>React.JS, Node.JS, a restful API, HTML, SASS and JS.</b> The Web App keeps you
                  up to date with all the latest football information for the top leagues in Europe.
                  Once you sign up, you gain exclusive features like comments, likes, blog posting
                  and reading, profile creation and creating your own dream team. There is also a
                  feature allowing you to guess the outcomes of each fixture.
                </p>
                <a href="https://github.com/adwpenalva/footheads">See the code</a>
              </div>

              <div className="box" data-aos="fade-up" data-aos-delay="200">
                <img src={require('../../Images/ironcode.png')} alt="puffdaddy" />
                <h3>IronCode</h3>
                <p>
                  This web app was built using <b>Javascript, CSS, HTML, Bootstrap and Node.JS.</b>{' '}
                  It was created for existing and previous cohorts at Ironhack to add their projects
                  for others to see and take inspiration from. This had a like, comment, profile
                  creation and project upload features. We also used authentication for
                  sign-in/sign-up features.
                </p>
                <a href="https://github.com/dan9b6/ironcode">See the code</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
