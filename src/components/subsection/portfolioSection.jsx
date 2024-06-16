import React from 'react';
import Advertising1 from '../../assets/imgs/advertising-1.jpg';
import Advertising2 from '../../assets/imgs/advertising-2.jpg';
import Advertising3 from '../../assets/imgs/advertising-3.jpg';
import Advertising4 from '../../assets/imgs/advertising-4.jpg';
import Branding1 from '../../assets/imgs/branding-1.jpg';
import Branding2 from '../../assets/imgs/branding-2.jpg';
import Branding3 from '../../assets/imgs/branding-3.jpg';
import Branding4 from '../../assets/imgs/branding-4.jpg';
import Branding5 from '../../assets/imgs/branding-5.jpg';
import Web1 from '../../assets/imgs/web-1.jpg';
import Web2 from '../../assets/imgs/web-2.jpg';
import Web3 from '../../assets/imgs/web-3.jpg';
import Web4 from '../../assets/imgs/web-4.jpg';

import Project1 from '../../assets/imgs/project-p1.jpg';
import Project2 from '../../assets/imgs/project-p2.jpg';
import Project3 from '../../assets/imgs/project-p3.jpg';
import Project4 from '../../assets/imgs/project-p4.jpg';

const PortfolioSection = () => {

  return (
    <section className="section bg-custom-gray" id="portfolio">
      <div className="container">
        <h1 className="mb-5">
          <span className="text-danger">My</span> Portfolio
        </h1>
        <div className="portfolio">
          {/* <div className="filters">
            <a href="#" data-filter=".new" className="active">New</a>
            <a href="#" data-filter=".advertising">Advertising</a>
            <a href="#" data-filter=".branding">Branding</a>
            <a href="#" data-filter=".web">Web</a>
          </div> */}
          <div className="portfolio-container" style={{ display: 'flex', flexWrap: 'wrap' }}>
            {/* <div className="col-md-6 col-lg-4 web new">
              <div className="portfolio-item">
                <img
                  src={Web1}
                  className="img-fluid"
                  alt="web1"
                />
                <div className="content-holder">
                  <a className="img-popup" href={Web1}/>
                  <div className="text-holder">
                    <h6 className="title">WEB</h6>
                    <p className="subtitle">Expedita corporis doloremque velit in totam!</p>
                  </div>
                </div>
              </div>
            </div> */}
            {/* <div className="col-md-6 col-lg-4 web new">
              <div className="portfolio-item">
                <img
                  src={Web2}
                  className="img-fluid"
                  alt="web2"
                />
                <div className="content-holder">
                  <a className="img-popup" href={Web2}/>
                  <div className="text-holder">
                    <h6 className="title">WEB</h6>
                    <p className="subtitle">Expedita corporis doloremque velit in totam!</p>
                  </div>
                </div>
              </div>
            </div> */}
            <div className="col-md-6 col-lg-6 advertising new">
              <div className="portfolio-item">
                <img
                  src={Project1}
                  className="img-fluid"
                  alt="advertising2"
                />
                <div className="content-holder">
                  <a className="img-popup" href={Project1}/>
                  <div className="text-holder">
                    <h6 className="title">Tradler</h6>
                    <p className="subtitle">Connect with your team, view individual progress, and celebrate achievements</p>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="col-md-6 col-lg-4 web">
              <div className="portfolio-item">
                <img
                  src={Web4}
                  className="img-fluid"
                  alt="web4"
                />
                <div className="content-holder">
                  <a className="img-popup" href={Web4}/>
                  <div className="text-holder">
                    <h6 className="title">WEB</h6>
                    <p className="subtitle">Expedita corporis doloremque velit in totam!</p>
                  </div>
                </div>
              </div>
            </div> */}

            {/* <div className="col-md-6 col-lg-4 advertising">
              <div className="portfolio-item">
                <img
                  src={Advertising1}
                  className="img-fluid"
                  alt="advertising1"
                />
                <div className="content-holder">
                  <a className="img-popup" href={Advertising1}/>
                  <div className="text-holder">
                    <h6 className="title">ADVERSITING</h6>
                    <p className="subtitle">Expedita corporis doloremque velit in totam!</p>
                  </div>
                </div>
              </div>
            </div> */}
            <div className="col-md-6 col-lg-6 web new">
              <div className="portfolio-item">
                <img
                  src={Project2}
                  className="img-fluid"
                  alt="web3"
                />
                <div className="content-holder">
                  <a className="img-popup" href={Project2}/>
                  <div className="text-holder">
                    <h6 className="title">Frumatic</h6>
                    <p className="subtitle">Empower independent vehicle trading companies with the necessary techniques</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 advertising new">
              <div className="portfolio-item">
                <img
                  src={Project3}
                  className="img-fluid"
                  alt="advertising3"
                />
                <div className="content-holder">
                  <a className="img-popup" href={Project3}/>
                  <div className="text-holder">
                    <h6 className="title">Dialiv</h6>
                    <p className="subtitle">Get tools and help to become healthier and reach your target weight</p>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="col-md-6 col-lg-4 advertising new">
              <div className="portfolio-item">
                <img
                  src={Advertising4}
                  className="img-fluid"
                  alt="advertising4"
                />
                <div className="content-holder">
                  <a className="img-popup" href={Advertising4}/>
                  <div className="text-holder">
                    <h6 className="title">ADVERTISING</h6>
                    <p className="subtitle">Expedita corporis doloremque velit in totam!</p>
                  </div>
                </div>
              </div>
            </div> */}
            <div className="col-md-6 col-lg-6 branding new">
              <div className="portfolio-item">
                <img
                  src={Project4}
                  className="img-fluid"
                  alt="branding1"
                />
                <div className="content-holder">
                  <a className="img-popup" href={Project4}/>
                  <div className="text-holder">
                    <h6 className="title">FloodLightStudios</h6>
                    <p className="subtitle">Helping businesses to grow and compete in the digital era.</p>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="col-md-6 col-lg-4 branding">
              <div className="portfolio-item">
                <img
                  src={Branding2}
                  className="img-fluid"
                  alt="branding2"
                />
                <div className="content-holder">
                  <a className="img-popup" href={Branding2}/>
                  <div className="text-holder">
                    <h6 className="title">BRANDING</h6>
                    <p className="subtitle">Expedita corporis doloremque velit in totam!</p>
                  </div>
                </div>
              </div>
            </div> */}
            {/* <div className="col-md-6 col-lg-4  branding new">
              <div className="portfolio-item">
                <img
                  src={Branding3}
                  className="img-fluid"
                  alt="branding3"
                />
                <div className="content-holder">
                  <a className="img-popup" href={Branding3}/>
                  <div className="text-holder">
                    <h6 className="title">BRANDING</h6>
                    <p className="subtitle">Expedita corporis doloremque velit in totam!</p>
                  </div>
                </div>
              </div>
            </div> */}
            {/* <div className="col-md-6 col-lg-4 branding">
              <div className="portfolio-item">
                <img
                  src={Branding4}
                  className="img-fluid"
                  alt="Download free bootstrap 4 admin dashboard, free boootstrap 4 templates"
                />
                <div className="content-holder">
                  <a className="img-popup" href={Branding4}/>
                  <div className="text-holder">
                    <h6 className="title">BRANDING</h6>
                    <p className="subtitle">Expedita corporis doloremque velit in totam!</p>
                  </div>
                </div>
              </div>
            </div> */}
            {/* <div className="col-md-6 col-lg-4 branding">
              <div className="portfolio-item">
                <img
                  src={Branding5}
                  className="img-fluid"
                  alt="branding5"
                />
                <div className="content-holder">
                  <a className="img-popup" href={Branding5}/>
                  <div className="text-holder">
                    <h6 className="title">BRANDING</h6>
                    <p className="subtitle">Expedita corporis doloremque velit in totam!</p>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
