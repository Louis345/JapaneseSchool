import React from 'react'
import { Link } from 'react-router-dom'
import C1 from '../../assets/img/featured-courses/courses-img1.png'
import C2 from '../../assets/img/featured-courses/courses-img2.png'
import C3 from '../../assets/img/featured-courses/courses-img3.png'
import C4 from '../../assets/img/featured-courses/courses-img4.png'
import C5 from '../../assets/img/featured-courses/courses-img5.png'
import Avatar from '../../assets/img/testimonial/testi_avatar.png'
import Bg from '../../assets/img/bg/blog-bg-aliments.png'


function First() {
  return (
    <>
        <section className="shop-area pt-120 pb-120 p-relative " style={{ backgroundImage: `url(${ Bg })`, backgroundRepeat: "no-repeat", backgroundPosition: "center center", backgroundAttachment: "fixed" }} >
            <div className="container">
                    <div className="row align-items-center">
                    <div className="col-lg-4 col-md-6">
                        <div className="product couress-box mb-40">
                        <div className="product__img">
                            <Link to="/coursesdetails">
                                 <img src={C1} alt="" />
                            </Link>
                        </div>
                        <div className="product__content pt-30">
                            <ul className="course-meta course-meta2 review style2 clearfix mb-30">
                            <li className="author">
                                <div className="thumb">
                                <img src={Avatar} alt="image" />
                                </div>
                                <div className="text">
                                <Link to="#">Robto Jone</Link>
                                <p>Teacher</p>
                                </div>
                            </li>
                            </ul>
                            <div className="price">$95.00</div>
                            <h4 className="pro-title">
                            <Link to="/coursesdetails">Zero to Hero in Python 3</Link>
                            </h4>
                            <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur
                            accusamus hic ea in autem debitis minima.
                            </p>
                            <ul className="course-meta desc">
                            <li>
                                <h6>1 year</h6>
                                <span> Course</span>
                            </li>
                            <li>
                                <h6>25</h6>
                                <span> Class Size</span>
                            </li>
                            <li>
                                <h6>
                                <span className="course-time">7:00 - 10:00</span>
                                </h6>
                                <span> Class Duration</span>
                            </li>
                            </ul>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="product couress-box mb-40">
                        <div className="product__img">
                            <Link to="/coursesdetails">
                            <img src={C2} alt="" />
                            </Link>
                        </div>
                        <div className="product__content pt-30">
                            <ul className="course-meta course-meta2 review style2 clearfix mb-30">
                            <li className="author">
                                <div className="thumb">
                                <img src={Avatar} alt="image" />
                                </div>
                                <div className="text">
                                <Link to="#">Robto Jone</Link>
                                <p>Teacher</p>
                                </div>
                            </li>
                            </ul>
                            <div className="price">$95.00</div>
                            <h4 className="pro-title">
                            <Link to="/coursesdetails">Microsoft Excel Beginner</Link>
                            </h4>
                            <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur
                            accusamus hic ea in autem debitis minima.
                            </p>
                            <ul className="course-meta desc">
                            <li>
                                <h6>1 year</h6>
                                <span> Course</span>
                            </li>
                            <li>
                                <h6>25</h6>
                                <span> Class Size</span>
                            </li>
                            <li>
                                <h6>
                                <span className="course-time">7:00 - 10:00</span>
                                </h6>
                                <span> Class Duration</span>
                            </li>
                            </ul>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="product couress-box mb-40">
                        <div className="product__img">
                            <Link to="/coursesdetails">
                            <img src={C3} alt="" />
                            </Link>
                        </div>
                        <div className="product__content pt-30">
                            <ul className="course-meta course-meta2 review style2 clearfix mb-30">
                            <li className="author">
                                <div className="thumb">
                                <img src={Avatar} alt="image" />
                                </div>
                                <div className="text">
                                <Link to="#">Robto Jone</Link>
                                <p>Teacher</p>
                                </div>
                            </li>
                            </ul>
                            <div className="price">$95.00</div>
                            <h4 className="pro-title">
                            <Link to="/coursesdetails">Digital Marketing Course</Link>
                            </h4>
                            <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur
                            accusamus hic ea in autem debitis minima.
                            </p>
                            <ul className="course-meta desc">
                            <li>
                                <h6>1 year</h6>
                                <span> Course</span>
                            </li>
                            <li>
                                <h6>25</h6>
                                <span> Class Size</span>
                            </li>
                            <li>
                                <h6>
                                <span className="course-time">7:00 - 10:00</span>
                                </h6>
                                <span> Class Duration</span>
                            </li>
                            </ul>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="product couress-box mb-40">
                        <div className="product__img">
                            <Link to="/coursesdetails">
                            <img src={C4} alt="" />
                            </Link>
                        </div>
                        <div className="product__content pt-30">
                            <ul className="course-meta course-meta2 review style2 clearfix mb-30">
                            <li className="author">
                                <div className="thumb">
                                <img src={Avatar} alt="image" />
                                </div>
                                <div className="text">
                                <Link to="#">Robto Jone</Link>
                                <p>Teacher</p>
                                </div>
                            </li>
                            </ul>
                            <div className="price">$95.00</div>
                            <h4 className="pro-title">
                            <Link to="/coursesdetails">React JS, Angular</Link>
                            </h4>
                            <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur
                            accusamus hic ea in autem debitis minima.
                            </p>
                            <ul className="course-meta desc">
                            <li>
                                <h6>1 year</h6>
                                <span> Course</span>
                            </li>
                            <li>
                                <h6>25</h6>
                                <span> Class Size</span>
                            </li>
                            <li>
                                <h6>
                                <span className="course-time">7:00 - 10:00</span>
                                </h6>
                                <span> Class Duration</span>
                            </li>
                            </ul>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="product couress-box mb-40">
                        <div className="product__img">
                            <Link to="/coursesdetails">
                            <img src={C5} alt="" />
                            </Link>
                        </div>
                        <div className="product__content pt-30">
                            <ul className="course-meta course-meta2 review style2 clearfix mb-30">
                            <li className="author">
                                <div className="thumb">
                                <img src={Avatar} alt="image" />
                                </div>
                                <div className="text">
                                <Link to="#">Robto Jone</Link>
                                <p>Teacher</p>
                                </div>
                            </li>
                            </ul>
                            <div className="price">$95.00</div>
                            <h4 className="pro-title">
                            <Link to="/coursesdetails">Laravel API Development</Link>
                            </h4>
                            <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur
                            accusamus hic ea in autem debitis minima.
                            </p>
                            <ul className="course-meta desc">
                            <li>
                                <h6>1 year</h6>
                                <span> Course</span>
                            </li>
                            <li>
                                <h6>25</h6>
                                <span> Class Size</span>
                            </li>
                            <li>
                                <h6>
                                <span className="course-time">7:00 - 10:00</span>
                                </h6>
                                <span> Class Duration</span>
                            </li>
                            </ul>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="product couress-box mb-40">
                        <div className="product__img">
                            <Link to="/coursesdetails">
                            <img src={C1} alt="" />
                            </Link>
                        </div>
                        <div className="product__content pt-30">
                            <ul className="course-meta course-meta2 review style2 clearfix mb-30">
                            <li className="author">
                                <div className="thumb">
                                <img src={Avatar} alt="image" />
                                </div>
                                <div className="text">
                                <Link to="#">Robto Jone</Link>
                                <p>Teacher</p>
                                </div>
                            </li>
                            </ul>
                            <div className="price">$95.00</div>
                            <h4 className="pro-title">
                            <Link to="/coursesdetails">Zero to Hero in Python 1</Link>
                            </h4>
                            <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur
                            accusamus hic ea in autem debitis minima.
                            </p>
                            <ul className="course-meta desc">
                            <li>
                                <h6>1 year</h6>
                                <span> Course</span>
                            </li>
                            <li>
                                <h6>25</h6>
                                <span> Class Size</span>
                            </li>
                            <li>
                                <h6>
                                <span className="course-time">7:00 - 10:00</span>
                                </h6>
                                <span> Class Duration</span>
                            </li>
                            </ul>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="row">
                    <div className="col-12">
                        <div className="pagination-wrap mt-50 text-center">
                        <nav>
                            <ul className="pagination">
                            <li className="page-item">
                                <Link to="#">
                                <i className="fas fa-angle-double-left" />
                                </Link>
                            </li>
                            <li className="page-item active">
                                <Link to="#">1</Link>
                            </li>
                            <li className="page-item">
                                <Link to="#">2</Link>
                            </li>
                            <li className="page-item">
                                <Link to="#">3</Link>
                            </li>
                            <li className="page-item">
                                <Link to="#">...</Link>
                            </li>
                            <li className="page-item">
                                <Link to="#">10</Link>
                            </li>
                            <li className="page-item">
                                <Link to="#">
                                <i className="fas fa-angle-double-right" />
                                </Link>
                            </li>
                            </ul>
                        </nav>
                        </div>
                    </div>
                    <div />
                    </div>
            </div>
        </section>

    </>
  )
}

export default First