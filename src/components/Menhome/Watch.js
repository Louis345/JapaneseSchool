import React from "react";

function Watch() {
  return (
    <>
      <section
        id="vedio"
        className="vedio-area pt-120 pb-90 fix"
        style={{
          backgroundImage: "url(assets/img/video/vedio-bg.png)",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title center-align text-center">
                <h2 style={{ color: " #fe8366" }}>Watch Us</h2>
                <h3>
                  {" "}
                  日本の文化や言語を大切にし、バイリンガルの子供たちをサポートするコミュニティ
                </h3>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <div
                className="video-img wow fadeInRight animated"
                data-animation="fadeInDown animated"
                data-delay=".2s"
                style={{
                  backgroundImage:
                    "url(/static/media/slider_img05.61682732d3861164ce54.png)",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
              >
                <a
                  href="https://youtube.com/shorts/TR9ReZx-TXU?feature=share"
                  className="video-i popup-video"
                >
                  {" "}
                  <img
                    src="assets/img/video/play.svg"
                    alt="img"
                    className="active-icon"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Watch;
