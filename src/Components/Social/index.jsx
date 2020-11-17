import React from 'react';
import './style.scss';

const Social = () => {
  return (
    <div>
      <div className="social">
        <div className="columns">
          <div className="col-2">
            <h1>Say Hi!</h1>
          </div>
          <div className="col-2">
            <img className="point-side" src={require('../../Images/wave.gif')} alt="me" />
          </div>
        </div>
        <div className="columns">
          <p>07956107973</p>
          <p>email@danburts.co.uk</p>
        </div>
        <div className="social-link">
          <a className="facebook icon" href="https://www.facebook.com/dan9b6">
            <i class="fab fa-facebook"></i>
          </a>
          <a className="linked-in icon" href="https://www.linkedin.com/in/daniel-burton-654ba4180/">
            <i class="fab fa-linkedin"></i>
          </a>
          <a className="insta icon" href="https://www.instagram.com/danburts/?hl=en">
            <i class="fab fa-instagram-square"></i>
          </a>
          <a className="github icon" href="https://github.com/dan9b6">
            <i class="fab fa-github"></i>
          </a>
        </div>
        <p>Copyright © 2020 Dan Burton. All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Social;
