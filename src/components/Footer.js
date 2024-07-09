import React from 'react';
import '../componentStyles/Footer.css';
import github from '../img/github-Icon.png';
import linkedin from '../img/linkedin-icon.png';

const Footer = () => {
  return (
    <footer className='footers'>
      <h1>Rancid Tomatillos</h1>
      <p className="created-by">Created by</p>
      <div className="info-section">
        <div className="person">
          <h3 className='name'>Adam Konber</h3>
          <div className="links-container">
            <div className="github-link">
              <img className="github" src={github} alt="GitHub" />
              <a href="https://github.com/Sterling47" className="Adam-Github"> @GitHub</a>
            </div>
            <div className="linkedin-link">
              <img className="linkedin" src={linkedin} alt="LinkedIn" />
              <a href='https://www.linkedin.com/in/adam-konber/' className="Adam-LinkedIn"> @LinkedIn</a>
            </div>
          </div>
        </div>

        <div className='divider'></div>

        <div className="person">
          <h3 className='name'>Seong Kang</h3>
          <div className="links-container">
            <div className="github-link">
              <img className="github" src={github} alt="GitHub" />
              <a href='https://github.com/Sanghoro' className="Seong-Github"> @GitHub</a>
            </div>
            <div className="linkedin-link">
              <img className="linkedin" src={linkedin} alt="LinkedIn" />
              <a href='https://linkedin.com/in/seong-kang' className="Seong-LinkedIn"> @LinkedIn</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;