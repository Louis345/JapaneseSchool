import React from "react";
import { Link } from "react-router-dom";
import Icon1 from "../../assets/img/icon/pv-icon1.png";
import Icon2 from "../../assets/img/icon/pv-icon2.png";
import Icon3 from "../../assets/img/icon/pv-icon3.png";
import Icon4 from "../../assets/img/icon/pv-icon4.png";
import Icon5 from "../../assets/img/icon/pv-icon5.png";
import Icon6 from "../../assets/img/icon/pv-icon6.png";

function Services() {
  return (
    <>
      <section
        id="services"
        className="services-area pb-90 fix"
        style={{
          backgroundImage: "url(assets/img/bg/services-bg-aliments.png)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4 col-md-12">
              <div className="about-title second-atitle pb-20">
                <h5>教育内容</h5>
                <h2>みんなで楽しく学ぼう!</h2>
                <p>日本語で学習して､文化や見方・考え方を学びましょう。</p>
              </div>
              <div className="slider-btn mt-10">
                <Link
                  to="/services"
                  className="btn ss-btn"
                  data-animation="fadeInRight"
                  data-delay=".8s"
                >
                  View All Services
                </Link>
              </div>
            </div>
            <div className="col-lg-8 col-md-12">
              <div className="row">
                <div className="col-lg-4 col-md-6">
                  <div
                    className="services-box wow fadeInDown  animated"
                    data-delay=".5s"
                  >
                    <div className="services-icon">
                      <img src={Icon1} alt="icon01" />
                    </div>
                    <div className="services-content2">
                      <h5>
                        <Link to="/servicesdetail">
                          幼稚部（年少、年中、年長）
                        </Link>{" "}
                      </h5>
                      <p>
                        日本語や日本の文化への興味、関心を育てることを目標とし、以下を含む保育活動を日本語で行っております。
                        ―絵本の読み聞かせ
                        ―日本の行事や季節感を大切にした工作活動
                        ―日本の童謡、手遊び、昔遊びに親しむ ―ひらがな、カタカナ
                        ー数え方
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div
                    className="services-box wow fadeInDown  animated"
                    data-delay=".5s"
                  >
                    <div className="services-icon">
                      <img src={Icon2} alt="icon01" />
                    </div>
                    <div className="services-content2">
                      <h5>
                        <Link to="/servicesdetail">
                          小学部（1年生〜6年生）＆中学部 （1年生〜3年生）
                        </Link>{" "}
                      </h5>
                      <p>
                        文部科学省が定める小学校・中学校学習指導要領に添った教育を提供することを目標とし、文部科学省によって認定された教科書を用い、国語、算数、理科、社会、生活の授業を、日本語で行っております。
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div
                    className="services-box wow fadeInDown  animated"
                    data-delay=".5s"
                  >
                    <div className="services-icon">
                      <img src={Icon3} alt="icon01" />
                    </div>
                    <div className="services-content2">
                      <h5>
                        <Link to="/servicesdetail">中学部（1年生〜3年生）</Link>{" "}
                      </h5>
                      <p>
                        文部科学省が定める中学校学習指導要領に添った教育を提供することを目標とし、文部科学省によって認定された教科書を用い、国語、数学、理科、社会の授業のうち主に国語と数学を中心に、日本語で授業を行っております。
                      </p>
                    </div>
                  </div>
                </div>
                {/* <div className="col-lg-4 col-md-6">
                  <div
                    className="services-box wow fadeInDown  animated"
                    data-delay=".5s"
                  >
                    <div className="services-icon">
                      <img src={Icon4} alt="icon01" />
                    </div>
                    <div className="services-content2">
                      <h5>
                        <Link to="/servicesdetail">Online Classes</Link>{" "}
                      </h5>
                      <p>
                        Cras ornare sagittis tortor a facilisis nteger augue
                        quam, placerat.
                      </p>
                    </div>
                  </div>
                </div> */}
                {/* <div className="col-lg-4 col-md-6">
                  <div
                    className="services-box wow fadeInDown  animated"
                    data-delay=".5s"
                  >
                    <div className="services-icon">
                      <img src={Icon5} alt="icon01" />
                    </div>
                    <div className="services-content2">
                      <h5>
                        <Link to="/servicesdetail">Home Projects</Link>{" "}
                      </h5>
                      <p>
                        Cras ornare sagittis tortor a facilisis nteger augue
                        quam, placerat.
                      </p>
                    </div>
                  </div>
                </div> */}
                {/* <div className="col-lg-4 col-md-6">
                  <div
                    className="services-box wow fadeInDown  animated"
                    data-delay=".5s"
                  >
                    <div className="services-icon">
                      <img src={Icon6} alt="icon01" />
                    </div>
                    <div className="services-content2">
                      <h5>
                        <Link to="/servicesdetail">24x7 Support</Link>{" "}
                      </h5>
                      <p>
                        Cras ornare sagittis tortor a facilisis nteger augue
                        quam, placerat.
                      </p>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;
