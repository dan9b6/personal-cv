import React, { useEffect } from 'react';
import './style.scss';
import Aos from 'aos';
import 'aos/dist/aos.css';

function Skill() {
  useEffect(() => {
    Aos.init({});
  }, []);

  return (
    <div className="skill-row">
      <div className="skills">
        <div className="skills-box" data-aos="fade-left">
          <i class="fas fa-desktop"></i>
          <h3>Responsive</h3>
          <p>My layouts are responsive and look great on all shapes and sizes.</p>
        </div>
        <div className="skills-box" data-aos="fade-up">
          <i class="fas fa-lightbulb"></i>
          <h3>Innovative</h3>
          <p>All my designs and websites are built with creative flair.</p>
        </div>
        <div className="skills-box" data-aos="fade-right">
          <i class="fas fa-bullseye"></i>
          <h3>Targetted to the Client</h3>
          <p>The web applications that I create are tailored to each client and target audience.</p>
        </div>
      </div>
    </div>
  );
}

export default Skill;
