import React from 'react';
// import Typewriter from 'typewriter-effect';
import './style.scss';

const Landing = () => {
  return (
    <div className="landing">
      <img className="mobile-img" src={require('../../Images/me-mobile.jpg')} alt="me" />
      <div className="intro">
        <h1>
          Hello. I’m Dan. I’m an aspiring web developer looking for my first role.
          {/* <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString('My name is Dan.')
                .callFunction(() => {
                  console.log('String typed out!');
                })
                .pauseFor(100)
                .deleteAll()
                .typeString('I am a web developer!')
                .callFunction(() => {
                  console.log('All strings were deleted');
                })
                .pauseFor(100)
                .deleteAll()
                .typeString('Check out my CV.')
                .callFunction(() => {
                  console.log('All strings were completed.');
                })
                .pauseFor(100)
                .deleteAll()
                .typeString('How long have you got?')
                .start();
            }}
          /> */}
        </h1>
        <h5>
          Are you considering employing a Junior Web Developer? How long have you got to be
          convinced I’m your guy?
        </h5>
      </div>
    </div>
  );
};

export default Landing;
