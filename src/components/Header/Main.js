import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/img/logo/logo.png";
import Icon from "../../assets/img/icon/menu.png";

function Main() {
  const [active, setActive] = useState(false);
  const [Btnshow, setBtnshow] = useState(false);
  const [mobile, setmobile] = useState(false);
  const [Services, setServices] = useState(false);
  const [Pages, setPages] = useState(false);
  const [Events, setEvent] = useState(false);
  const [News, setNews] = useState(false);
  const [infoMenuOpen, setInfoMenuOpen] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;

    if (offset > 150) {
      setActive(true);
    } else {
      setActive(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  return (
    <>
      <header className="header-area header-three">
        <div
          id="header-sticky"
          className={`menu-area ${active && "sticky-menu"}`}
        >
          <div className="container">
            <div className="second-menu">
              <div className="row align-items-center">
                <div className="col-xl-2 col-lg-2">
                  <div className="logo">
                    <Link to="/">
                      <img src={Logo} alt="logo" />
                    </Link>
                  </div>
                </div>
                <div className="col-xl-8 col-lg-8 mobile-view">
                  <div className="main-menu text-right text-xl-right">
                    <nav id="mobile-menu" style={{ display: "block" }}>
                      <ul>
                        <li className="sub">
                          <Link to="/">ホーム </Link>
                        </li>
                        <li>
                          <Link to="/about">私たちについて</Link>
                        </li>
                        {/* <li className="sub">
                          <Link to="/courses">Courses</Link>
                          <ul>
                            <li>
                              <Link to="/courses">Courses</Link>
                            </li>
                            <li>
                              <Link to="/coursesdetails">Courses Details</Link>
                            </li>
                          </ul>
                        </li> */}
                        {/* <li className="sub">
                          <Link to="/events">イベント</Link>
                          <ul>
                            <li>
                              <Link to="/events">Events</Link>
                            </li>
                            <li>
                              <Link to="/eventsdetails">Events Details</Link>
                            </li>
                          </ul>
                        </li> */}
                        {/* <li
                          className="sub"
                          onMouseEnter={() => setInfoMenuOpen(true)}
                          onMouseLeave={() => setInfoMenuOpen(false)}
                        >
                          <Link to="#">各種情報</Link>
                          <ul
                            style={{ display: infoMenuOpen ? "block" : "none" }}
                          >
                            <li>
                              <Link to="/gallery">よくある質問</Link>
                            </li>
                            <li>
                              <Link to="/gallery">校則</Link>
                            </li>
                            <li>
                              <Link to="/gallery">入学資格</Link>
                            </li>
                          </ul>
                        </li> */}
                        {/* <li className="sub">
                          <Link to="/blog">News</Link>
                          <ul>
                            <li>
                              <Link to="/blog">News</Link>
                            </li>
                            <li>
                              <Link to="/blogdetails">News Details</Link>
                            </li>
                          </ul>
                        </li> */}
                        <li>
                          <Link to="/contact">お問い合わせ</Link>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-2 text-right d-none d-xl-block mt-30 mb-30 mobile-view">
                  <div className="search-top2">
                    <ul>
                      <li>
                        <Link
                          to="#"
                          className="menu-tigger"
                          onClick={() => {
                            setBtnshow(true);
                          }}
                        >
                          <i
                            className="fas fa-search"
                            onClick={() => {
                              setBtnshow(true);
                            }}
                          />
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="#"
                          className="menu-tigger"
                          onClick={() => {
                            setBtnshow(true);
                          }}
                        >
                          <img
                            src={Icon}
                            alt="logo"
                            onClick={() => {
                              setBtnshow(true);
                            }}
                          />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="col-12 mobile-menu-block">
                  <div className="mobile-menu mean-container">
                    <div className="mean-bar">
                      <Link
                        to="#"
                        onClick={() => setmobile(!mobile)}
                        className={`meanmenu-reveal ${mobile && "meanclose"}`}
                        style={{
                          right: 0,
                          left: "auto",
                          textAlign: "center",
                          textIndent: 0,
                          fontSize: 18,
                        }}
                      >
                        {mobile ? (
                          "X"
                        ) : (
                          <span>
                            <span>
                              <span></span>
                            </span>
                          </span>
                        )}
                      </Link>
                      {mobile && (
                        <nav className="mean-nav">
                          <ul style={{ display: "block" }}>
                            <li className="sub">
                              <Link to="/">ホーム</Link>
                            </li>
                            <li>
                              <Link to="/about">私たちについて</Link>
                            </li>
                            <li className="sub">
                              <Link to="/courses">Courses</Link>
                              {Services && (
                                <ul style={{ display: "block" }}>
                                  <li>
                                    <Link to="/courses">Courses</Link>
                                  </li>
                                  <li>
                                    <Link to="/coursesdetails">
                                      Courses Details
                                    </Link>
                                  </li>
                                </ul>
                              )}
                              <Link
                                className={`mean-expand ${
                                  mobile && "mean-clicked"
                                }`}
                                onClick={() => {
                                  setServices(!Services);
                                }}
                                to="#"
                                style={{ fontSize: 18 }}
                              >
                                {Services ? "-" : "+"}
                              </Link>
                            </li>
                            <li className="sub">
                              <Link to="/events">イベント</Link>
                              {Events && (
                                <ul style={{ display: "block" }}>
                                  <li>
                                    <Link to="/events">イベント</Link>
                                  </li>
                                  <li>
                                    <Link to="/eventsdetails">イベント</Link>
                                  </li>
                                </ul>
                              )}
                              <Link
                                className={`mean-expand ${
                                  mobile && "mean-clicked"
                                }`}
                                onClick={() => {
                                  setEvent(!Events);
                                }}
                                to="#"
                                style={{ fontSize: 18 }}
                              >
                                {Events ? "-" : "+"}
                              </Link>
                            </li>
                            <li className="sub">
                              <Link to="#">各種情報</Link>
                              {Pages && (
                                <ul style={{ display: "block" }}>
                                  <li>
                                    <Link to="/gallery">よくある質問</Link>
                                  </li>
                                  <li>
                                    <Link to="/gallery">校則</Link>
                                  </li>
                                  <li>
                                    <Link to="/gallery">入学資格</Link>
                                  </li>
                                </ul>
                              )}
                              <Link
                                className={`mean-expand ${
                                  Pages && "mean-clicked"
                                }`}
                                onClick={() => {
                                  setPages(!Pages);
                                }}
                                to="#"
                                style={{ fontSize: 18 }}
                              >
                                {Pages ? "-" : "+"}
                              </Link>
                            </li>
                            <li className="sub">
                              {/* <Link to="/blog">News</Link> */}
                              {/* {News && (
                                <ul style={{ display: "block" }}>
                                  <li>
                                    <Link to="/blog">News</Link>
                                  </li>
                                  <li>
                                    <Link to="/blogdetails">News Details</Link>
                                  </li>
                                </ul>
                              )} */}
                              <Link
                                className={`mean-expand ${
                                  mobile && "mean-clicked"
                                }`}
                                onClick={() => {
                                  setNews(!News);
                                }}
                                to="#"
                                style={{ fontSize: 18 }}
                              >
                                {News ? "-" : "+"}
                              </Link>
                            </li>
                            <li className="mean-last">
                              <Link to="/contact">Contact</Link>
                            </li>
                          </ul>
                        </nav>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {Btnshow && (
        <>
          <div className={`offcanvas-menu ${"active"}`}>
            <span className="menu-close">
              <i className="fas fa-times" onClick={() => setBtnshow(false)}></i>
            </span>
            <form
              role="search"
              method="get"
              id="searchform"
              className="searchform"
              action="http://wordpress.zcube.in/xconsulta/"
            >
              <input
                type="text"
                name="s"
                id="search"
                value=""
                placeholder="Search"
              />
              <button>
                <i className="fa fa-search"></i>
              </button>
            </form>

            <div id="cssmenu3" className="menu-one-page-menu-container">
              <ul id="menu-one-page-menu-2" className="menu">
                <li className="menu-item menu-item-type-custom menu-item-object-custom">
                  <Link to="/">Home</Link>
                </li>
                <li className="menu-item menu-item-type-custom menu-item-object-custom">
                  <Link to="/about">About Us</Link>
                </li>
                <li className="menu-item menu-item-type-custom menu-item-object-custom">
                  {/* <Link to="/services">Services</Link> */}
                </li>
                <li className="menu-item menu-item-type-custom menu-item-object-custom">
                  <Link to="/pricing">Pricing </Link>
                </li>
                <li className="menu-item menu-item-type-custom menu-item-object-custom">
                  <Link to="/team">Team </Link>
                </li>
                <li className="menu-item menu-item-type-custom menu-item-object-custom">
                  <Link to="/gallery">Gallery Study</Link>
                </li>
                <li className="menu-item menu-item-type-custom menu-item-object-custom">
                  {/* <Link to="/blog">Blog</Link> */}
                </li>
                <li className="menu-item menu-item-type-custom menu-item-object-custom">
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>

            <div id="cssmenu2" className="menu-one-page-menu-container">
              <ul id="menu-one-page-menu-1" className="menu">
                <li className="menu-item menu-item-type-custom menu-item-object-custom">
                  <Link to="#home">
                    <span>+8 12 3456897</span>
                  </Link>
                </li>
                <li className="menu-item menu-item-type-custom menu-item-object-custom">
                  <Link to="#howitwork">
                    <span>info@example.com</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className={`offcanvas-overly ${"active"}`}> </div>
        </>
      )}
    </>
  );
}

export default Main;
