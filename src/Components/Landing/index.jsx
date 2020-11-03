import React from 'react';
import './style.scss';

const Landing = () => {
  return (
    <div className="landing">
      <img className="mobile-img" src={require('../../Images/me-mobile.jpg')} alt="me" />
      <img className="desktop-img" src={require('../../Images/me-desktop.jpg')} alt="me" />
      <div className="intro">
        <h1>Hello. I’m Dan. I’m an aspiring web developer looking for my first role.</h1>
        <h5>
          Are you considering employing a Junior Web Developer? How long have you got to be
          convinced I’m your guy?
        </h5>
      </div>
    </div>
  );
};

export default Landing;
