import React from 'react'
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import Courses1 from '../../assets/img/featured-courses/courses-img1.png'
import Courses2 from '../../assets/img/featured-courses/courses-img2.png'
import Courses3 from '../../assets/img/featured-courses/courses-img3.png'
import Courses4 from '../../assets/img/featured-courses/courses-img4.png'
import Courses5 from '../../assets/img/featured-courses/courses-img5.png'



function Courses() {

    const settings = {
        dots: false,
        infinite: true,
        arrows: false,
        autoplay:true,
        autoplaySpeed:1500,
        speed: 1000,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
      };

  return (
    <>
        <section id="courses" className="courses-area fix">
            <div className="container-fluid">
                <div className="row">
                <div className="col-lg-12">
                    <div className="section-title center-align text-center mb-50">
                    <h5>Best Courses</h5>
                    <h2>Featured Courses</h2>
                    </div>
                </div>
                </div>
                <div className="row">
                <div className="col-lg-12 col-md-12">
                    <Slider className="featured-courses-active" {...settings}>

                        <div className="box-courses">
                            <Link to="/coursesdetails">
                              <img src={Courses1} alt="courses-img1" />
                            </Link>
                            <div className="text">
                            <h5>3 Years</h5>
                            <h3>
                                <Link to="/coursesdetails">Civil Engeering</Link>
                            </h3>
                            </div>
                        </div>

                        <div className="box-courses">
                            <Link to="/coursesdetails">
                            {" "}
                            <img src={Courses2} alt="courses-img1" />
                            </Link>
                            <div className="text">
                            <h5>3 Years</h5>
                            <h3>
                                <Link to="/coursesdetails">Civil Engeering</Link>
                            </h3>
                            </div>
                        </div>

                        <div className="box-courses">
                            <Link to="/coursesdetails">
                            {" "}
                            <img src={Courses3} alt="courses-img1" />
                            </Link>
                            <div className="text">
                            <h5>3 Years</h5>
                            <h3>
                                <Link to="/coursesdetails">Civil Engeering</Link>
                            </h3>
                            </div>
                        </div>

                        <div className="box-courses">
                            <Link to="/coursesdetails">
                            {" "}
                            <img src={Courses4} alt="courses-img1" />
                            </Link>
                            <div className="text">
                            <h5>3 Years</h5>
                            <h3>
                                <Link to="/coursesdetails">Civil Engeering</Link>
                            </h3>
                            </div>
                        </div>
                        
                        <div className="box-courses">
                            <Link to="/coursesdetails">
                                <img src={Courses5} alt="courses-img1" />
                            </Link>
                            <div className="text">
                            <h5>3 Years</h5>
                            <h3>
                                <Link to="/coursesdetails">Civil Engeering</Link>
                            </h3>
                            </div>
                        </div>
                        
                        <div className="box-courses">
                            <Link to="/coursesdetails">
                                <img src={Courses1} alt="courses-img1" />
                            </Link>
                            <div className="text">
                            <h5>3 Years</h5>
                            <h3>
                                <Link to="/coursesdetails">Civil Engeering</Link>
                            </h3>
                            </div>
                        </div>

                    </Slider>
                </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Courses