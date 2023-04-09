import React from 'react'
import { Link } from 'react-router-dom'
import Icon1 from '../../assets/img/icon/pv-icon1.png'
import Icon2 from '../../assets/img/icon/pv-icon2.png'
import Icon3 from '../../assets/img/icon/pv-icon3.png'
import Icon4 from '../../assets/img/icon/pv-icon4.png'
import Icon5 from '../../assets/img/icon/pv-icon5.png'
import Icon6 from '../../assets/img/icon/pv-icon6.png'


function Services() {
  return (
    <>
        <section id="services" className="services-area pb-90 fix" style={{ backgroundImage: "url(assets/img/bg/services-bg-aliments.png)", backgroundRepeat: "no-repeat", backgroundPosition: "center" }} >
            <div className="container">
                <div className="row align-items-center">
                <div className="col-lg-4 col-md-12">
                    <div className="about-title second-atitle pb-20">
                    <h5>Services</h5>
                    <h2>What We Provide To You</h2>
                    <p>
                        Pellentesque fringilla, massa sit amet feugiat mollis, leo turpis
                        elementum justo, vel consequat ex urna ut massa maecenas justo
                        sapien.
                        
                    </p>
                    </div>
                    <div className="slider-btn mt-10">
                    <Link to="/services" className="btn ss-btn" data-animation="fadeInRight" data-delay=".8s" >
                        View All Services
                    </Link>
                    </div>
                </div>
                <div className="col-lg-8 col-md-12">
                    <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="services-box wow fadeInDown  animated" data-delay=".5s" >
                        <div className="services-icon">
                            <img src={Icon1} alt="icon01" />
                        </div>
                        <div className="services-content2">
                            <h5>
                            <Link to="/servicesdetail">Skilled Lecturers</Link>{" "}
                            </h5>
                            <p>
                            Cras ornare sagittis tortor a facilisis nteger augue quam,
                            placerat.
                            </p>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="services-box wow fadeInDown  animated" data-delay=".5s" >
                        <div className="services-icon">
                            <img src={Icon2} alt="icon01" />
                        </div>
                        <div className="services-content2">
                            <h5>
                            <Link to="/servicesdetail">Hot Stone Message</Link>{" "}
                            </h5>
                            <p>
                            Cras ornare sagittis tortor a facilisis nteger augue quam,
                            placerat.
                            </p>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="services-box wow fadeInDown  animated" data-delay=".5s" >
                        <div className="services-icon">
                            <img src={Icon3} alt="icon01" />
                        </div>
                        <div className="services-content2">
                            <h5>
                            <Link to="/servicesdetail">Book Library</Link>{" "}
                            </h5>
                            <p>
                            Cras ornare sagittis tortor a facilisis nteger augue quam,
                            placerat.
                            </p>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="services-box wow fadeInDown  animated" data-delay=".5s" >
                        <div className="services-icon">
                            <img src={Icon4} alt="icon01" />
                        </div>
                        <div className="services-content2">
                            <h5>
                            <Link to="/servicesdetail">Online Classes</Link>{" "}
                            </h5>
                            <p>
                            Cras ornare sagittis tortor a facilisis nteger augue quam,
                            placerat.
                            </p>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="services-box wow fadeInDown  animated" data-delay=".5s" >
                        <div className="services-icon">
                            <img src={Icon5} alt="icon01" />
                        </div>
                        <div className="services-content2">
                            <h5>
                            <Link to="/servicesdetail">Home Projects</Link>{" "}
                            </h5>
                            <p>
                            Cras ornare sagittis tortor a facilisis nteger augue quam,
                            placerat.
                            </p>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="services-box wow fadeInDown  animated" data-delay=".5s" >
                        <div className="services-icon">
                            <img src={Icon6} alt="icon01" />
                        </div>
                        <div className="services-content2">
                            <h5>
                            <Link to="/servicesdetail">24x7 Support</Link>{" "}
                            </h5>
                            <p>
                            Cras ornare sagittis tortor a facilisis nteger augue quam,
                            placerat.
                            </p>
                        </div>
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

export default Services