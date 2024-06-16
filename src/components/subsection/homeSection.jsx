import React from 'react';
import AvatarImage from '../../assets/imgs/blog3.jpg';
import Button from '../common/Button';

const HomeSection = () => {

  return (
    <div>
      <header className="header">
        <div className="container">
          {/* <ul className="social-icons pt-3">
            <li className="social-item">
              <a className="social-link text-light" href="#">
                <i className="ti-facebook" aria-hidden="true"/>
              </a>
            </li>
            <li className="social-item">
              <a className="social-link text-light" href="#">
                <i className="ti-twitter" aria-hidden="true"/>
              </a>
            </li>
            <li className="social-item">
              <a className="social-link text-light" href="#">
                <i className="ti-google" aria-hidden="true"/>
              </a>
            </li>
            <li className="social-item">
              <a className="social-link text-light" href="#">
                <i className="ti-instagram" aria-hidden="true"/>
              </a>
            </li>
            <li className="social-item">
              <a className="social-link text-light" href="#">
                <i className="ti-github" aria-hidden="true"/>
              </a>
            </li>
          </ul> */}
          <div className="header-content">
            <h4 className="header-subtitle">Hello, I am</h4>
            <h1 className="header-title">Bratislav Stevanovic</h1>
            <h6 className="header-mono">Full-Stack Web Developer</h6>
            {/* <Button
              buttonType="button"
              buttonColor="primary"
              buttonStyle="rounded"
            >
              <i className="ti-printer pr-2"/>Print Resume
            </Button> */}
          </div>
        </div>
      </header>
      <nav
        className="navbar sticky-top navbar-expand-lg navbar-light bg-white"
        data-spy="affix"
        data-offset-top="510"
      >
        <div className="container">
          <button
            className="navbar-toggler ml-auto"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"/>
          </button>
          <div className="collapse mt-sm-20 navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              {/* <li className="nav-item">
                <a href="#home" className="nav-link">Home</a>
              </li> */}
              <li className="nav-item">
                <a href="#about" className="nav-link">About</a>
              </li>
              <li className="nav-item">
                <a href="#resume" className="nav-link">Resume</a>
              </li>
            </ul>
            <ul className="navbar-nav brand">
              <img src={AvatarImage} alt="brand" className="brand-img"/>
              <li className="brand-txt">
                <h5 className="brand-title">John Doe</h5>
                <div className="brand-subtitle">Web Designer | Developer</div>
              </li>
            </ul>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a href="#portfolio" className="nav-link">Portfolio</a>
              </li>
              {/* <li className="nav-item">
                <a href="#blog" className="nav-link">Blog</a>
              </li> */}
              <li className="nav-item last-item">
                <a href="#contact" className="nav-link">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default HomeSection;
