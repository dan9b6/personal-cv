import React from 'react';
import Typewriter from 'typewriter-effect';
import './style.scss';

const Landing = () => {
  return (
    <div className="landing">
      <div className="intro">
        <img src={require('../../Images/dan-crossed.png')} alt="me" />
        <h1>
          <Typewriter
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
          />
        </h1>
      </div>
    </div>
  );
};

export default Landing;
