import React from 'react'
import { Link } from 'react-router-dom'
import Pc1 from '../../assets/img/icon/pv-icon1.png'
import Pc2 from '../../assets/img/icon/pv-icon2.png'
import Pc3 from '../../assets/img/icon/pv-icon3.png'
import Pc4 from '../../assets/img/icon/pv-icon4.png'
import Pc5 from '../../assets/img/icon/pv-icon5.png'
import Pc6 from '../../assets/img/icon/pv-icon6.png'



function What() {
  return (
    <>
        <section id="services" className="services-area pt-120 pb-120 fix" style={{
                backgroundImage: "url(assets/img/bg/services-bg-aliments.png)",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center" }} >

            <div className="container">
                <div className="row align-items-center">
                <div className="col-lg-12 col-md-12">
                    <div className="about-title text-center second-atitle pb-20">
                    <h5>Services</h5>
                    <h2>What We Provide To You</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-3 col-md-6">
                    <div
                        className="services-box wow fadeInDown  animated"
                        data-delay=".5s" >
                        <div className="services-icon">
                            <img src={Pc1} alt="icon01" />
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
                    <div className="col-lg-3 col-md-6">
                    <div
                        className="services-box wow fadeInDown  animated"
                        data-delay=".5s">
                        <div className="services-icon">
                        <img src={Pc2} alt="icon01" />
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
                    <div className="col-lg-3 col-md-6">
                    <div
                        className="services-box wow fadeInDown  animated"
                        data-delay=".5s" >
                        <div className="services-icon">
                        <img src={Pc3} alt="icon01" />
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
                    <div className="col-lg-3 col-md-6">
                    <div
                        className="services-box wow fadeInDown  animated"
                        data-delay=".5s" >
                        <div className="services-icon">
                        <img src={Pc4} alt="icon01" />
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
                    <div className="col-lg-3 col-md-6">
                    <div
                        className="services-box wow fadeInDown  animated"
                        data-delay=".5s">
                        <div className="services-icon">
                        <img src={Pc5} alt="icon01" />
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
                    <div className="col-lg-3 col-md-6">
                    <div
                        className="services-box wow fadeInDown  animated"
                        data-delay=".5s"
                    >
                        <div className="services-icon">
                        <img src={Pc4} alt="icon01" />
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
                    <div className="col-lg-3 col-md-6">
                    <div
                        className="services-box wow fadeInDown  animated"
                        data-delay=".5s" >
                        <div className="services-icon">
                        <img src={Pc2} alt="icon01" />
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
                    <div className="col-lg-3 col-md-6">
                    <div
                        className="services-box wow fadeInDown  animated"
                        data-delay=".5s" >
                        <div className="services-icon">
                        <img src={Pc6} alt="icon01" />
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

        </section>
    </>
  )
}

export default What