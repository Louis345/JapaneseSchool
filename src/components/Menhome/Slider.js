import React from "react";
import Slider5 from "../../assets/img/slider/slider_img05.png";

function Slider() {
  return (
    <>
      <section id="home" className="slider-area slider-four fix p-relative">
        <div className="slider-active">
          <div
            className="single-slider slider-bg d-flex align-items-center"
            style={{
              background: "url(assets/img/slider/slider_img_bg.png) no-repeat",
              backgroundPosition: "center center",
            }}
          >
            <div className="container">
              <div className="row justify-content-center pt-50  pb-150 text center">
                <div className="col-lg-7">
                  <div className="slider-content s-slider-content mt-200 text-center">
                    <h3
                      data-animation="fadeInUp"
                      data-delay=".4s"
                      style={{ color: " #fe8366" }}
                    >
                      日本語で学び､遊び!
                    </h3>
                    <h3
                      data-animation="fadeInUp"
                      data-delay=".4s"
                      style={{ color: " #fe8366" }}
                    >
                      日本文化を体験しよう！
                    </h3>
                    <p data-animation="fadeInUp" data-delay=".6s">
                      オルバニー日本語補習校は、『子供たちが日本語で学び、日本文化に触れる場所を作りたい』という思いで設立されました。当校には、幼稚部、小学部、中学部、高等部
                      があり、幼稚部は日本語に親しむ保育活動、小学部、中学部、高等部は日本の学習指導要領に沿った日本語による学習活動を行っております。また日本文化や日本の学校行事を子供達が体験できるカリキュラム作りを心がけております。少人数のクラスで仲良く、楽しく学べる学校です。
                    </p>
                    <div
                      className="subricbe"
                      data-animation="fadeInDown"
                      data-delay=".4s"
                    >
                      <form
                        action="news-mail.php"
                        method="post"
                        className="contact-form "
                      >
                        <label>
                          <i className="icon fal fa-envelope" /> ニュースレター
                        </label>
                        <input
                          type="text"
                          id="email2"
                          name="email2"
                          className="header-input"
                          placeholder="Your Email Address..."
                          required=""
                        />
                        <button className="btn header-btn">
                          {" "}
                          今すぐ登録する{" "}
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="col-lg-5">
                  <div
                    className="slider-img"
                    data-animation="fadeInUp"
                    data-delay=".4s"
                  >
                    <img src={Slider5} alt="slider_img05" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Slider;
