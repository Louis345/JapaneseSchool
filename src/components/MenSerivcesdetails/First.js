import React from 'react'
import Imgre1 from '../../assets/img/resource/service-img-1.jpg'
import Imgre2 from '../../assets/img/resource/service-img-2.jpg'
import Imgre3 from '../../assets/img/resource/service-img-3.jpg'
import One from '../../assets/img/resource/post-img-1.jpg'


function First() {
  return (
    <>
        <section id="about" className="about-area about-p pt-120 pb-95 p-relative">
            <div className="container">
                <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-4">
                    <aside className="sidebar-widget">
                    <section id="categories-1" className="widget widget_categories">
                        <h2 className="widget-title">Our Services</h2>
                        <ul>
                        <li>
                            <a href="#">Skilled</a> (4)
                        </li>
                        <li>
                            <a href="#"> Hot Stone Message</a> (3)
                        </li>
                        <li>
                            <a href="#">Book Library</a> (3)
                        </li>
                        <li>
                            <a href="#">Online Classes</a> (3)
                        </li>
                        <li>
                            <a href="#">Home Projects</a> (3)
                        </li>
                        </ul>
                    </section>
                    </aside>
                </div>
                
                <div className="col-lg-8 col-md-12 col-sm-12 order-2">
                    <div className="service-detail">
                    <div className="images-box row">
                        <div
                        className="column col-lg-4 col-md-4 col-sm-4 wow fadeInRight pro-col"
                        style={{ visibility: "visible", animationName: "fadeInRight" }} >
                        <figure className="image">
                            <img src={Imgre2} alt="" />
                        </figure>
                        <figure className="image">
                            <img src={Imgre3} alt="" />
                        </figure>
                        </div>
                        <div className="column col-lg-8 col-md-8 col-sm-8 wow fadeInLeft"
                        style={{ visibility: "visible", animationName: "fadeInLeft" }} >
                        <figure
                            className="image wow fadeIn"
                            style={{ visibility: "visible", animationName: "fadeIn" }} >
                            <img src={Imgre1} alt="" />
                        </figure>
                        </div>
                    </div>
                    <div className="content-box">
                        <h2>Skilled Lecturers</h2>
                        <p>
                        Pleasure and praising pain was born and I will give you a complete
                        account of the systems, and expound the actually teachings of the
                        great explorer of the truth, the master-builder of human uts
                        happiness. No one rejects, dislikes, or avoids pleasure itself,
                        because it is pleasure, but because those who do not know how to
                        pursue pleasure rationally Nor who loves or pursues or desires to
                        obtain pain of itself.
                        </p>
                        
                        <div className="two-column">
                        <div className="row">
                            <div className="text-column col-xl-6 col-lg-12 col-md-12">
                            <p>
                                Builds and finances utility scale solar and storage projects
                                throughout the United States. We specialize in developing
                                renewable solutions to suit the specific needs of large
                                investor owned utilities.
                            </p>
                            <ul className="list-style-one">
                                <li>Engine oil level should be regularly</li>
                                <li>Tyres have a minimum of 1.6mm of tread</li>
                                <li>Ensure that the electrolyte level is correct</li>
                                <li>Never remove the radiator when the</li>
                            </ul>
                            </div>
                            <div className="image-column col-xl-6 col-lg-12 col-md-12">
                            <figure className="image">
                                <a href={One} className="lightbox-image" >
                                    <img src={One} alt="" />
                                </a>
                            </figure>
                            </div>
                        </div>
                        </div>
                        <h3>Why Choose This Service</h3>
                        <p>
                        Complete account of the systems and expound the actually teachings
                        of the great explorer of the truth, the master-builder of human
                        uts happiness. No one rejects, dislikes, or avoids pleasure
                        itself, because it is pleasure, but because those who do not know
                        how to pursue pleasure rationally encounter consequences that are
                        extremely.
                        </p>
                        <p>
                        Complete account of the systems and expound the actually teachings
                        of the great explorer of the truth, the master-builder of human
                        uts happiness. No one rejects, dislikes, or avoids pleasure
                        itself, because it is pleasure, but because those who do not know
                        how to pursue pleasure rationally.
                        </p>
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