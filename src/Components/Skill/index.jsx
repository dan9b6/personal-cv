import React, { useEffect } from 'react';
import './style.scss';
import Aos from 'aos';
import 'aos/dist/aos.css';

function Skill() {
  useEffect(() => {
    Aos.init({});
  }, []);

  return (
    <div>
      <h1>What can I offer?</h1>
      <div className="skills wrapper">
        <div className="skills-box" data-aos="fade-up">
          <img className="sign" src={require('../../Images/sign.gif')} alt="me" />
          <h3>Try before you buy</h3>
          <p>
            I’m so eager to prove my worth I’ll give you two weeks free (well, in exchange for a few
            cuppas and regular biscuits). If you really don’t think I’m a good match at the end, we
            part ways, no hard feelings. But, if you see the potential, think about making me
            permanent.
          </p>
        </div>
        <div className="skills-box" data-aos="fade-up" data-aos-delay="200">
          <img className="sign" src={require('../../Images/excited.gif')} alt="me" />
          <h3>Enthusiasm...</h3>
          <p>
            ...By the bucket load. I want this. It will take hard work and I know I will spend the
            rest of my life learning, but this is what I want for now and my future. I’m open minded
            and enthusiastic to learn and improve.
          </p>
        </div>
        <div className="skills-box" data-aos="fade-up" data-aos-delay="400">
          <img className="sign" src={require('../../Images/sign.gif')} alt="me" />
          <h3>Innovation</h3>
          <p>
            I hold a big desire to be at the forefront of innovation, which is one of the main
            reasons I chose to complete Ironhack, learning React. I can talk more about this in
            detail when we meet.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Skill;
