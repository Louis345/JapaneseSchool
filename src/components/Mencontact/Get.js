import React from "react";
import Icon1 from "../../assets/img/icon/cn-icon1.png";
import icon2 from "../../assets/img/icon/cn-icon2.png";
import Icon3 from "../../assets/img/icon/cn-icon3.png";
import Bg from "../../assets/img/bg/blog-bg-aliments.png";

function Get() {
  return (
    <>
      <section
        id="services"
        className="services-area pt-120 pb-90 fix"
        style={{
          backgroundImage: `url(${Bg})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title center-align text-center mb-50">
                <h5>Contact</h5>
                <h2>Get In Tuch</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-12">
              <div className="services-box mt-0 mb-30 text-center">
                <div className="services-icon">
                  <img src={Icon1} alt="icon01" />
                </div>
                <div className="services-content2">
                  <h5>Eニュースレター</h5>
                  <p>
                    info@webexample.com <br /> jobs@webtrueexample.com{" "}
                  </p>
                </div>
              </div>
              <div className="services-box mt-0 mb-30 text-center">
                <div className="services-icon">
                  <img src={icon2} alt="icon01" />
                </div>
                <div className="services-content2">
                  <h5>Phone Number</h5>
                  <p>
                    090-098-765-09 <br />
                    093-456-432-654-7
                  </p>
                </div>
              </div>
              <div className="services-box mt-0 mb-30 text-center">
                <div className="services-icon">
                  <img src={Icon3} alt="icon01" />
                </div>
                <div className="services-content2">
                  <h5>Office Address</h5>
                  <p>
                    12/A, Miranda Halim Tower,
                    <br />
                    New York, USA
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-8 col-md-12">
              <form action="mail.php" method="post" className="contact-form ">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="contact-field p-relative c-name mb-20">
                      <input
                        type="text"
                        id="firstn"
                        name="firstn"
                        placeholder="First Name"
                        required=""
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="contact-field p-relative c-email mb-20">
                      <input
                        type="text"
                        id="lastn"
                        name="lastn"
                        placeholder="Last Name"
                        required=""
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="contact-field p-relative c-subject mb-20">
                      <input
                        type="text"
                        id="email"
                        name="email"
                        placeholder="Eamil"
                        required=""
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="contact-field p-relative c-subject mb-20">
                      <input
                        type="text"
                        id="phone"
                        name="phone"
                        placeholder="Phone No."
                        required=""
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="contact-field p-relative c-option mb-20">
                      <select name="services" id="sr">
                        <option value="sports-massage">Sports Massage</option>
                        <option value="hot-stone-message">
                          Hot Stone Message
                        </option>
                        <option value="facil-therophy">
                          Facil &amp; Therophy
                        </option>
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="contact-field p-relative c-message mb-45">
                      <textarea
                        name="message"
                        id="message"
                        cols={30}
                        rows={10}
                        placeholder="Write comments"
                        defaultValue={""}
                      />
                    </div>
                    <div className="slider-btn">
                      <button
                        className="btn ss-btn"
                        data-animation="fadeInRight"
                        data-delay=".8s"
                      >
                        Submint Now
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Get;
