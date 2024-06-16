import React from 'react';
import Button from '../common/Button';

const ContactSection = () => {

  return (
    <div className="section contact" id="contact">
      <div id="map" className="map"/>
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="contact-form-card">
              <h4 className="contact-title">Send a message</h4>
              <form action="">
                <div className="form-group">
                  <input className="form-control" type="text" placeholder="Name *" required/>
                </div>
                <div className="form-group">
                  <input className="form-control" type="email" placeholder="Email *" required/>
                </div>
                <div className="form-group">
                  <textarea className="form-control" id="" placeholder="Message *" rows="7" required/>
                </div>
                <div className="form-group ">
                  <Button
                    buttonStyle='default'
                    buttonType="submit"
                    buttonColor="primary"
                    className="form-control"
                  >
                    Send Message
                  </Button>
                </div>
              </form>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="contact-info-card">
              <h4 className="contact-title">Get in touch</h4>
              {/* <div className="row mb-2">
                <div className="col-1 pt-1 mr-1">
                  <i className="ti-mobile icon-md"/>
                </div>
                <div className="col-10 ">
                  <h6 className="d-inline">Phone : <br/> <span className="text-muted">+ (123) 456-789</span></h6>
                </div>
              </div> */}
              <div className="row mb-2">
                <div className="col-1 pt-1 mr-1">
                  <i className="ti-map-alt icon-md"/>
                </div>
                <div className="col-10">
                  <h6 className="d-inline">Address :<br/> <span
                    className="text-muted">Pariske komune 43 Beograd, Serbia.</span>
                  </h6>
                </div>
              </div>
              <div className="row mb-2">
                <div className="col-1 pt-1 mr-1">
                  <i className="ti-envelope icon-md"/>
                </div>
                <div className="col-10">
                  <h6 className="d-inline">Email :<br/> <span className="text-muted">branislavstevanovic58@outlook.com</span></h6>
                </div>
              </div>
              {/* <ul className="social-icons pt-4">
                <li className="social-item">
                  <a className="social-link text-dark" href="#">
                    <i className="ti-facebook" aria-hidden="true"/>
                  </a>
                </li>
                <li className="social-item">
                  <a className="social-link text-dark" href="#">
                    <i className="ti-twitter" aria-hidden="true"/>
                  </a>
                </li>
                <li className="social-item">
                  <a className="social-link text-dark" href="#">
                    <i className="ti-google" aria-hidden="true"/>
                  </a>
                </li>
                <li className="social-item">
                  <a className="social-link text-dark" href="#">
                    <i className="ti-instagram" aria-hidden="true"/>
                  </a>
                </li>
                <li className="social-item">
                  <a className="social-link text-dark" href="#">
                    <i className="ti-github" aria-hidden="true"/>
                  </a>
                </li>
              </ul> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
