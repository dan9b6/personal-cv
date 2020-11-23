import React from 'react';
import './style.scss';

const Landing = () => {
  return (
    <div className="landing">
      <img src={require('../../Images/me-mobile.jpg')} alt="me" />
      <div className="intro">
        <h1>Hello. I’m Dan. I’m a Web Developer looking for a new role!</h1>
        <h5>
          Are you considering employing a Junior Web Developer? How long have you got to be
          convinced I’m your guy?
        </h5>
      </div>
    </div>
  );
};

export default Landing;
