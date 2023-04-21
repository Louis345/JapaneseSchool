import React from "react";
import Flogo from "../../assets/img/logo/f_logo.png";
import Bg from "../../assets/img/bg/footer-bg.png";
import Galler1 from "../../assets/img/instagram/f-galler-01.png";
import Galler2 from "../../assets/img/instagram/f-galler-02.png";
import Galler3 from "../../assets/img/instagram/f-galler-03.png";
import Galler4 from "../../assets/img/instagram/f-galler-04.png";
import { Link } from "react-router-dom";

function Main() {
  return (
    <>
      <footer
        className="footer-bg footer-p fix"
        style={{
          backgroundImage: `url(${Bg})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="footer-top  pt-70 pb-40">
          <div className="container">
            <div className="row">
              <div className="col-xl-3 col-lg-3 col-sm-12">
                <div className="footer-widget mb-30">
                  <img src={Flogo} alt="img" />
                </div>
              </div>
              <div className="col-xl-7 col-lg-7 col-sm-12">
                <div className="footer-widget footer-link mt-20 text-center">
                  <ul>
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/about"> About Us</Link>
                    </li>
                    <li>
                      <Link to="/services"> Courses </Link>
                    </li>
                    <li>
                      <Link to="/contact"> Events</Link>
                    </li>
                    <li>
                      <Link to="/blog">Blog </Link>
                    </li>
                    <li>
                      <Link to="/blog">Contact Us </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-2 col-lg-2 col-sm-12">
                <div className="footer-widget footer-social mt-15  text-right text-xl-right">
                  <Link to="https://www.facebook.com/">
                    <i className="fab fa-facebook-f" />
                  </Link>
                  <Link to="https://www.instagram.com/">
                    <i className="fab fa-instagram" />
                  </Link>
                  <Link to="https://twitter.com/">
                    <i className="fab fa-twitter" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-center  pt-70 pb-40">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-xl-3 col-lg-3 col-sm-6">
                <div className="footer-widget mb-30">
                  <div className="f-widget-title">
                    <h2>About Us</h2>
                  </div>
                  <div className="footer-link">
                    オルバニー日本語補習校は、ニューヨーク州で認定された非営利の教育機関で、在留する日本人児童及び日本語継承者の児童を対象に、日本の学習指導要領に沿った教育を提供しています
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-sm-6">
                <div className="footer-widget mb-30">
                  <div className="f-widget-title">
                    <h2>Contact Us</h2>
                  </div>
                  <div className="f-contact">
                    <ul>
                      {/* <li>
                        <i className="icon fal fa-map-marker-check" />
                        <span>
                          1247/Plot No. 39, 15th Phase, <br />
                          LHB Colony, Kanpur
                        </span>
                      </li>
                      <li>
                        <i className="icon fal fa-phone" />
                        <span>
                          1800-121-3637
                          <br />
                          +91-7052-101-786
                        </span>
                      </li> */}
                      <li>
                        <i className="icon fal fa-envelope" />
                        <span>
                          <Link to="mailto:lbanyjapanese@gmail.com">
                            Albanyjapanese@gmail.com
                          </Link>
                          <br />
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-sm-6">
                <div className="footer-widget mb-30">
                  <div className="f-widget-title">
                    <h2>教育内容</h2>
                  </div>
                  <div className="footer-link">
                    <ul>
                      <li>
                        <Link to="/">Home</Link>
                      </li>
                      <li>
                        <Link to="/about"> About Us</Link>
                      </li>
                      <li>
                        <Link to="/services"> Services </Link>
                      </li>
                      <li>
                        <Link to="/contact"> Contact Us</Link>
                      </li>
                      <li>
                        <Link to="/blog">Blog </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-sm-6">
                <div className="footer-widget mb-30">
                  <div className="f-widget-title">
                    <h2>Our Gallery</h2>
                  </div>
                  <div className="f-insta">
                    <ul>
                      <li>
                        <Link className=" popup-image">
                          <img src={Galler1} alt="img" />
                        </Link>
                      </li>
                      <li>
                        <Link className=" popup-image">
                          <img src={Galler2} alt="img" />
                        </Link>
                      </li>
                      <li>
                        <Link className="popup-image">
                          <img src={Galler3} alt="img" />
                        </Link>
                      </li>
                      <li>
                        <Link className="popup-image">
                          <img src={Galler4} alt="img" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright-wrap">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                Copyright © 2023 Luxia. All rights reserved.
              </div>
              <div className="col-lg-6 text-right text-xl-right">
                <ul>
                  <li>
                    <Link to="#">Privercy</Link>
                  </li>
                  <li>
                    <Link to="#">Term &amp; Conditions</Link>
                  </li>
                  <li>
                    <Link to="#">Legal</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Main;
