import React from "react";
import { Link } from "react-router-dom";

function Events() {
  return (
    <>
      <section
        className="eventes-area fix pt-120 pb-120"
        style={{
          backgroundImage: "url(assets/img/bg/event-bg-aliments.png)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title center-align text-center mb-50">
                <h5>Our Events</h5>
                <h2>Upcoming Events</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="eventes-box">
                <div className="date-box">
                  <h3>18</h3>
                  <h5>March, 2021</h5>
                </div>
                <div className="text">
                  <h5>
                    <Link to="/eventsdetails">
                      Cras faucibus ornare ipsum luctus.
                    </Link>
                  </h5>
                  <ul>
                    <li>
                      <i className="fal fa-clock" /> 9:00Am - 3:00Pm
                    </li>
                    <li>
                      <i className="icon fal fa-map-marker-check" /> Mumbai,
                      India
                    </li>
                  </ul>
                  <p>
                    Phasellus maximus orci metus. Nullam enim ex, facilisis at
                    lacinia sed, luctus vitae dolor. Nam at commodo quam.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="eventes-box">
                <div className="date-box">
                  <h3>03</h3>
                  <h5>Jun, 2021</h5>
                </div>
                <div className="text">
                  <h5>
                    <Link to="/eventsdetails">
                      Cras faucibus ornare ipsum luctus.
                    </Link>
                  </h5>
                  <ul>
                    <li>
                      <i className="fal fa-clock" /> 9:00Am - 3:00Pm
                    </li>
                    <li>
                      <i className="icon fal fa-map-marker-check" /> Mumbai,
                      India
                    </li>
                  </ul>
                  <p>
                    Phasellus maximus orci metus. Nullam enim ex, facilisis at
                    lacinia sed, luctus vitae dolor. Nam at commodo quam.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="eventes-box">
                <div className="date-box">
                  <h3>07</h3>
                  <h5>March, 2021</h5>
                </div>
                <div className="text">
                  <h5>
                    <Link to="/eventsdetails">
                      Cras faucibus ornare ipsum luctus.
                    </Link>
                  </h5>
                  <ul>
                    <li>
                      <i className="fal fa-clock" /> 9:00Am - 3:00Pm
                    </li>
                    <li>
                      <i className="icon fal fa-map-marker-check" /> Mumbai,
                      India
                    </li>
                  </ul>
                  <p>
                    Phasellus maximus orci metus. Nullam enim ex, facilisis at
                    lacinia sed, luctus vitae dolor. Nam at commodo quam.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="eventes-box">
                <div className="date-box">
                  <h3>17</h3>
                  <h5>Jan, 2021</h5>
                </div>
                <div className="text">
                  <h5>
                    <Link to="/eventsdetails">
                      Cras faucibus ornare ipsum luctus.
                    </Link>
                  </h5>
                  <ul>
                    <li>
                      <i className="fal fa-clock" /> 9:00Am - 3:00Pm
                    </li>
                    <li>
                      <i className="icon fal fa-map-marker-check" /> Mumbai,
                      India
                    </li>
                  </ul>
                  <p>
                    Phasellus maximus orci metus. Nullam enim ex, facilisis at
                    lacinia sed, luctus vitae dolor. Nam at commodo quam.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="eventes-box">
                <div className="date-box">
                  <h3>03</h3>
                  <h5>Jun, 2021</h5>
                </div>
                <div className="text">
                  <h5>
                    <Link to="/eventsdetails">
                      Cras faucibus ornare ipsum luctus.
                    </Link>
                  </h5>
                  <ul>
                    <li>
                      <i className="fal fa-clock" /> 9:00Am - 3:00Pm
                    </li>
                    <li>
                      <i className="icon fal fa-map-marker-check" /> Mumbai,
                      India
                    </li>
                  </ul>
                  <p>
                    Phasellus maximus orci metus. Nullam enim ex, facilisis at
                    lacinia sed, luctus vitae dolor. Nam at commodo quam.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="eventes-box">
                <div className="date-box">
                  <h3>28</h3>
                  <h5>Apr, 2021</h5>
                </div>
                <div className="text">
                  <h5>
                    <Link to="/eventsdetails">
                      Cras faucibus ornare ipsum luctus.
                    </Link>
                  </h5>
                  <ul>
                    <li>
                      <i className="fal fa-clock" /> 9:00Am - 3:00Pm
                    </li>
                    <li>
                      <i className="icon fal fa-map-marker-check" /> Mumbai,
                      India
                    </li>
                  </ul>
                  <p>
                    Phasellus maximus orci metus. Nullam enim ex, facilisis at
                    lacinia sed, luctus vitae dolor. Nam at commodo quam.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row text-center">
            <div className="col-lg-12">
              <div className="slider-btn mt-30">
                {/* <Link to="/events" className="btn ss-btn" data-animation="fadeInRight" data-delay=".8s" >
                        View All Services
                    </Link> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Events;
