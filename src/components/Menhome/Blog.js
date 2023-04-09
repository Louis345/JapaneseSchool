import React from 'react'
import { Link } from 'react-router-dom'
import Blog1 from '../../assets/img/blog/blog_img01.png'
import Blog2 from '../../assets/img/blog/blog_img02.png'
import Blog3 from '../../assets/img/blog/blog_img03.png'


function Blog() {
  return (
    <>
        <section id="blog" className="blog-area  p-relative pt-120 pb-90 fix" style={{ backgroundImage: "url(assets/img/bg/blog-bg-aliments.png)", backgroundRepeat: "no-repeat", backgroundPosition: "center" }} >
            <div className="container">
                <div className="row align-items-center">
                <div className="col-lg-12">
                    <div className="col-lg-12">
                    <div className="section-title center-align text-center mb-50">
                        <h5>Our Blog</h5>
                        <h2>Latest News Feed</h2>
                    </div>
                    </div>
                </div>
                </div>
                <div className="row">
                <div className="col-lg-4 col-md-12">
                    <div className="single-post2 mb-30  wow fadeInDown  animated">
                    <div className="blog-thumb2">
                        <Link to="/blogdetails">
                        <img src={Blog1} alt="img" />
                        </Link>
                    </div>
                    <div className="blog-content2 text-center">
                        <div className="b-meta">
                        <div className="row">
                            <div className="col-lg-12 col-md-12">
                            <div className="date-b">
                                <i className="fal fa-calendar-alt" /> 7 March, 2019
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="row">
                        <div className="col-lg-12">
                            <h4>
                            <Link to="/blogdetails">
                                How do I Sell Affiliate Products to My Customers
                            </Link>
                            </h4>
                            <div className="blog-btn">
                            <Link to="/blogdetails">
                                <i className="fal fa-chevron-circle-right" /> Read More
                            </Link>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-12">
                    <div className="single-post2 mb-30  wow fadeInUp  animated">
                    <div className="blog-thumb2">
                        <Link to="/blogdetails">
                        <img src={Blog2} alt="img" />
                        </Link>
                    </div>
                    <div className="blog-content2 text-center">
                        <div className="b-meta">
                        <div className="row">
                            <div className="col-lg-12 col-md-12">
                            <div className="date-b">
                                <i className="fal fa-calendar-alt" /> 7 March, 2019
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="row">
                        <div className="col-lg-12">
                            <h4>
                            <Link to="/blogdetails">
                                How do I Sell Affiliate Products to My Customers
                            </Link>
                            </h4>
                            <div className="blog-btn">
                            <Link to="/blogdetails">
                                <i className="fal fa-chevron-circle-right" /> Read More
                            </Link>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-12">
                    <div className="single-post2 mb-30 wow fadeInDown  animated">
                    <div className="blog-thumb2">
                        <Link to="/blogdetails">
                        <img src={Blog3} alt="img" />
                        </Link>
                    </div>
                    <div className="blog-content2 text-center">
                        <div className="b-meta">
                        <div className="row">
                            <div className="col-lg-12 col-md-12">
                            <div className="date-b">
                                <i className="fal fa-calendar-alt" /> 7 March, 2019
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="row">
                        <div className="col-lg-12">
                            <h4>
                            <Link to="/blogdetails">
                                How do I Sell Affiliate Products to My Customers
                            </Link>
                            </h4>
                            <div className="blog-btn">
                            <Link to="/blogdetails">
                                <i className="fal fa-chevron-circle-right" /> Read More
                            </Link>
                            </div>
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

export default Blog