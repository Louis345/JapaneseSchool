import React from 'react'
import Teem from '../../assets/img/team/team_img_detalis.png'

function First() {
  return (
    <>
        <section className="team-area-content">
            <div className="container">
                <div className="lower-content">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12 col-sm-12 text-center">
                    <div className="team-img-box">
                        <img src={Teem} alt="img" />
                    </div>
                    </div>
                    <div className="text-column col-lg-6 col-md-12 col-sm-12">
                    <div className="s-about-content pl-30 wow fadeInRight" data-animation="fadeInRight" data-delay=".2s" >
                        <span>Founder</span>
                        <h2>Rosalina D. William</h2>
                        <ul>
                        <li>
                            <div className="icon">
                            <i className="fal fa-envelope" /> <strong>Email</strong>
                            </div>
                            <div className="text">info@webexample.com</div>
                        </li>
                        <li>
                            <div className="icon">
                            <i className="fal fa-phone" /> <strong>Phone</strong>
                            </div>
                            <div className="text">980-786-098-09</div>
                        </li>
                        <li>
                            <div className="icon">
                            <i className="fal fa-map-marker-alt" />
                            <strong>Address</strong>
                            </div>
                            <div className="text">12/A, Miranda City Hall, NYC</div>
                        </li>
                        <li>
                            <div className="icon">
                            <i className="fal fa-globe" />
                            <strong>Website</strong>
                            </div>
                            <div className="text">www.webexample.com</div>
                        </li>
                        </ul>
                        <div className="social">
                        <a href="https://www.facebook.com/">
                            <i className="fab fa-facebook-f" />
                        </a>
                        <a href="https://twitter.com/">
                            <i className="fab fa-twitter" />
                        </a>
                        <a href="https://www.behance.net/">
                            <i className="fab fa-behance" />
                        </a>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default First