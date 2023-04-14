import React from "react";
import { Link } from "react-router-dom";
import One from "../../assets/img/features/about_imgs.png";

function About() {
  return (
    <>
      <section
        id="about"
        className="about-area about-p pt-70 pb-120 p-relative"
        style={{
          background:
            "url(assets/img/features/about-bg-aliments.png) no-repeat",
          backgroundPosition: "center center",
        }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12 col-sm-12 pr-30">
              <div
                className="s-about-img p-relative  wow fadeInLeft  animated"
                data-animation="fadeInLeft"
                data-delay=".4s"
              >
                <img src={One} alt="img" />
                {/* <div className="about-text second-about">
                  <div className="all-text">
                    <h3>50</h3>
                    <span>
                      years of <br /> experience
                    </span>
                  </div>
                </div> */}
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div
                className="about-content s-about-content  wow fadeInRight  animated"
                data-animation="fadeInRight"
                data-delay=".4s"
              >
                <div className="about-title second-atitle pb-25">
                  <h5>About</h5>
                  <h3>オルバニー日本語補習校へようこそ</h3>
                </div>
                <p>
                  オルバニー日本語補習校は、ニューヨーク州で認定された非営利の教育機関で、在留する日本人児童及び日本語継承者の児童を対象に、日本の学習指導要領に沿った教育を提供しています
                </p>
                <div className="about-content3">
                  <div className="row">
                    <div className="col-md-12">
                      <ul className="green">
                        <li>
                          教育目標:
                          礼儀正しく、興味を持ち、自己表現し、日本文化を理解する子供を育成する
                        </li>
                        <li>
                          教育指針:
                          日本語を学び表現力を育成し、日本文化を理解するための授業、行事体験、規則正しい生活指導を実施
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="slider-btn mt-10">
                  <Link
                    to="/about"
                    className="btn ss-btn"
                    data-animation="fadeInRight"
                    data-delay=".8s"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
