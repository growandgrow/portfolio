import React from 'react';
import Button from '../common/Button';

const AboutSection = () => {

  return (
    <div className="container-fluid">
      <div id="about" className="row about-section">
        <div className="col-lg-4 about-card">
          <h3 className="font-weight-light">Who am I ?</h3>
          <span className="line mb-5"/>
          <h5 className="mb-3">Full-Stack Web Developer</h5>
          <p className="mt-20">
            A dedicated Full Stack Web Developer with a knack for transforming innovative ideas into captivating digital experiences. With a blend of creative vision, technical expertise, and a commitment to excellence, I specialize in crafting dynamic web applications that push boundaries and delight users.
          </p>
            {/* <Button
              buttonColor="danger"
              buttonStyle="outline"
            >
              <i className="icon-down-circled2 "/>
              Download My CV
            </Button> */}
        </div>
        <div className="col-lg-4 about-card">
          <h3 className="font-weight-light">Personal Info</h3>
          <span className="line mb-5"/>
          <ul className="mt40 info list-unstyled">
            {/* <li><span>Birthdate</span> : 09/13/1996</li> */}
            <li><span>Email</span> : branislavstevanovic58@outlook.com</li>
            {/* <li><span>Phone</span> : + (123) 456-7890</li> */}
            <li><span>Skype</span> : live:.cid.af6bf964a5ca184</li>
            <li><span>Address</span> : Pariske komune 43 Beograd, Serbia.</li>
          </ul>
          {/* <ul className="social-icons pt-3">
            <li className="social-item">
              <a className="social-link" href="#">
                <i className="ti-facebook" aria-hidden="true"/>
              </a>
            </li>
            <li className="social-item">
              <a className="social-link" href="#">
                <i className="ti-twitter" aria-hidden="true"/>
              </a>
            </li>
            <li className="social-item">
              <a className="social-link" href="#">
                <i className="ti-google" aria-hidden="true"/>
              </a>
            </li>
            <li className="social-item">
              <a className="social-link" href="#">
                <i className="ti-instagram" aria-hidden="true"/>
              </a>
            </li>
            <li className="social-item">
              <a className="social-link" href="#">
                <i className="ti-github" aria-hidden="true"/>
              </a>
            </li>
          </ul> */}
        </div>
        <div className="col-lg-4 about-card">
          <h3 className="font-weight-light">My Expertise</h3>
          <span className="line mb-5"/>
          <div className="row">
            <div className="col-1 text-danger pt-1">
              <i className="ti-widget icon-lg"/>
            </div>
            <div className="col-10 ml-auto mr-3">
              <h6>Frontend Development</h6>
              {/* <p className="subtitle"> exercitat Repellendus, corrupt.</p> */}
              <hr/>
            </div>
          </div>
          <div className="row">
            <div className="col-1 text-danger pt-1">
              <i className="ti-paint-bucket icon-lg"/>
            </div>
            <div className="col-10 ml-auto mr-3">
              <h6>Backend Development</h6>
              {/* <p className="subtitle">Lorem ipsum dolor sit consectetur.</p> */}
              <hr/>
            </div>
          </div>
          <div className="row">
            <div className="col-1 text-danger pt-1">
              <i className="ti-stats-up icon-lg"/>
            </div>
            <div className="col-10 ml-auto mr-3">
              <h6>Architecturing</h6>
              {/* <p className="subtitle">voluptate commodi illo voluptatib.</p> */}
              <hr/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;


