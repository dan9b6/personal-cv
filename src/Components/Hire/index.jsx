import React, { useEffect } from 'react';
import './style.scss';
import Aos from 'aos';
import 'aos/dist/aos.css';

function Hire() {
  useEffect(() => {
    Aos.init({});
  }, []);

  return (
    <div>
      <div className="central">
        <div data-aos="fade-up" data-aos-duration=" 500" data-aos-delay="1000" className="hire-me">
          <h2>
            <i>"I may not have 100 years of experience, but I am 100% ready to be a developer!"</i>
          </h2>
          <h3>Interested in hiring me? Click this button and lets arrange a chat!</h3>
          <div className="hire">
            <a
              className="hire-btn"
              href="mailto:email@address.com?subject=I'm%20interested%20in%20hiring%20you!&body=Hello%20Dan"
            >
              Click hear to hire your next developer!
            </a>
          </div>
          <img
            data-aos="flip-up"
            data-aos-duration=" 500"
            data-aos-delay="1000"
            src={require('../../Images/dan-point-up.png')}
            alt="me"
          />
        </div>
      </div>
    </div>
  );
}

export default Hire;
