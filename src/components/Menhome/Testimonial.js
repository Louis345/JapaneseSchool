import React from 'react'
import Slider from "react-slick";
import Avatar from '../../assets/img/testimonial/testi_avatar.png'
import Icon from '../../assets/img/testimonial/qt-icon.png'

function Testimonial() {

    const setting = {
        dots: true,
        infinite: true,
        arrows: false,
        speed: 1000,
        slidesToShow:1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
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
        <section className="testimonial-area pt-120 pb-120" style={{ backgroundImage: "url(assets/img/testimonial/test-bg-aliments.png)", backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundColor: "#fff7f5" }} >
            <div className="container">
                <div className="row">
                <div className="col-lg-6">
                    <div className="about-title second-atitle pt-15">
                    <h5>Testimonial</h5>
                    <h2>
                        See What Our <br />
                        Client Say’s
                    </h2>
                    <p className="pt-15">
                        Curabitur tristique, sem id sagittis varius, lacus ligula mollis
                        dui, ac condimentum felis metus ut nulla. Aenean ut ultricies
                        turpis, sed sollicitudin eros. Aliquam quis dui ut diam lobortis
                        dignissim ut aliquet ex.
                    </p>
                    </div>
                </div>
                <div className="col-lg-6">
                    <Slider className="testimonial-active" {...setting} >
                        
                        <div className="single-testimonial">
                            <div className="testi-author">
                            <img src={Avatar} alt="img" />
                            <div className="ta-info">
                                <h6>Eity Akhter</h6>
                                <span>Student</span>
                            </div>
                            </div>
                            <div className="qt-img">
                            <img src={Icon} alt="img" />
                            </div>
                            <p>
                            Etiam quis lacinia ipsum. Aliquam blandit, mauris nec molestie
                            interdum, quam massa finibus turpis, ut eleifend tellus massa eget
                            nunc. Maecenas luctus diam id augue fringilla ornare. Sed varius
                            massa non sem rutrum malesuada.
                            </p>
                        </div>

                        <div className="single-testimonial">
                            <div className="testi-author">
                            <img src={Avatar} alt="img" />
                            <div className="ta-info">
                                <h6>Margie R. Robinson</h6>
                                <span>Web Developer</span>
                            </div>
                            </div>
                            <div className="qt-img">
                            <img src={Icon} alt="img" />
                            </div>
                            <p>
                            Etiam quis lacinia ipsum. Aliquam blandit, mauris nec molestie
                            interdum, quam massa finibus turpis, ut eleifend tellus massa eget
                            nunc. Maecenas luctus diam id augue fringilla ornare. Sed varius
                            massa non sem rutrum malesuada.
                            </p>
                        </div>

                        <div className="single-testimonial">
                            <div className="testi-author">
                            <img src={Avatar} alt="img" />
                            <div className="ta-info">
                                <h6>Margie R. Robinson</h6>
                                <span>Web Developer</span>
                            </div>
                            </div>
                            <div className="qt-img">
                            <img src={Icon} alt="img" />
                            </div>
                            <p>
                            Etiam quis lacinia ipsum. Aliquam blandit, mauris nec molestie
                            interdum, quam massa finibus turpis, ut eleifend tellus massa eget
                            nunc. Maecenas luctus diam id augue fringilla ornare. Sed varius
                            massa non sem rutrum malesuada.
                            </p>
                        </div>

                    </Slider>
                </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Testimonial