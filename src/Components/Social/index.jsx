import React from 'react';
import './style.scss';

const Social = () => {
  return (
    <div>
      <div className="social">
        <h1>Check out my social links</h1>
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
        <p>Copyright © 2020 Dan burton. All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Social;
