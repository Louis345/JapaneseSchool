import React from 'react'
import One from '../../assets/img/blog/inner_b3.jpg'
import Two from '../../assets/img/blog/inner_b2.jpg'
import Three from '../../assets/img/blog/inner_b1.jpg'
import Slider from "react-slick";
import Inner1 from '../../assets/img/blog/inner_b1.jpg'
import Inner2 from '../../assets/img/blog/inner_b2.jpg'
import QuoteOne from '../../assets/img/bg/quote_bg.png'
import Black from '../../assets/img/icon/blockquote.png'
import { Link } from "react-router-dom";
 

function First() {

    const settings = {
        dots: false,
        infinite: true,
        arrows: true,
        speed: 1500,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        // prevArrow: '<button type="button" className="slick-prev"> <i class="fas fa-arrow-left"> </i> </button>',
        // nextArrow: '<button type="button" className="slick-next"><i class="fas fa-arrow-right"> </i> </button>'
        };

  return (
    <>
        <section className="inner-blog pt-120 pb-120">
            <div className="container">
                <div className="row">
                <div className="col-lg-8">
                    <div className="bsingle__post mb-50">
                    <div className="bsingle__post-thumb">
                        <img src={Inner1} alt="" />
                    </div>
                    <div className="bsingle__content">
                        <div className="admin">
                        <a href="#">
                            <i className="far fa-user" /> by Hetmayar
                        </a>
                        </div>
                        <h2>
                        <Link to="/blogdetails">
                            Lorem ipsum dolor sit amet, consectetur cing elit, sed do
                            eiusmod tempor.
                        </Link>
                        </h2>
                        <p>
                        Novia's spaciously two bedroom apartments are perfect for families
                        and even business partners. Look out into the Manhattan skyline
                        from the open fully equipped kitchen.
                        </p>
                        <div className="meta-info">
                        <ul>
                            <li>
                            <i className="fal fa-eye" /> 100 Views
                            </li>
                            <li>
                            <i className="fal fa-comments" /> 35 Comments
                            </li>
                            <li>
                            <i className="fal fa-calendar-alt" /> 24th March 2019
                            </li>
                        </ul>
                        </div>
                    </div>
                    </div>
                    <div className="bsingle__post mb-50">
                    <div className="bsingle__post-thumb video-p">
                        <img src={Inner2} alt="" />
                        <a href="https://www.youtube.com/watch?v=gyGsPlt06bo" className="video-i popup-video" >
                        <i className="fas fa-play" />
                        </a>
                    </div>
                    <div className="bsingle__content">
                        <div className="admin">
                        <a href="#">
                            <i className="far fa-user" /> by Hetmayar
                        </a>
                        </div>
                        <h2>
                        <Link to="/blogdetails">
                            Lorem ipsum dolor sit amet, consectetur cing elit, sed do
                            eiusmod tempor.
                        </Link>
                        </h2>
                        <p>
                        Novia's spaciously two bedroom apartments are perfect for families
                        and even business partners. Look out into the Manhattan skyline
                        from the open fully equipped kitchen.
                        </p>
                        <div className="meta-info">
                        <ul>
                            <li>
                            <i className="fal fa-eye" /> 100 Views
                            </li>
                            <li>
                            <i className="fal fa-comments" /> 35 Comments
                            </li>
                            <li>
                            <i className="fal fa-calendar-alt" /> 24th March 2019
                            </li>
                        </ul>
                        </div>
                    </div>
                    </div>
                    <div className="bsingle__post mb-50">
                    <Slider className="bsingle__post-thumb blog-active" {...settings}>
                        <div className="slide-post">
                        <img src={One} alt="" />
                        </div>
                        <div className="slide-post">
                        <img src={Two} alt="" />
                        </div>
                        <div className="slide-post">
                        <img src={Three} alt="" />
                        </div>
                    </Slider>
                    <div className="bsingle__content">
                        <div className="admin">
                        <a href="#">
                            <i className="far fa-user" /> by Hetmayar
                        </a>
                        </div>
                        <h2>
                        <Link to="/blogdetails">
                            Lorem ipsum dolor sit amet, consectetur cing elit, sed do
                            eiusmod tempor.
                        </Link>
                        </h2>
                        <p>
                        Novia's spaciously two bedroom apartments are perfect for families
                        and even business partners. Look out into the Manhattan skyline
                        from the open fully equipped kitchen.
                        </p>
                        <div className="meta-info">
                        <ul>
                            <li>
                            <i className="fal fa-eye" /> 100 Views
                            </li>
                            <li>
                            <i className="fal fa-comments" /> 35 Comments
                            </li>
                            <li>
                            <i className="fal fa-calendar-alt" /> 24th March 2019
                            </li>
                        </ul>
                        </div>
                    </div>
                    </div>
                    <div className="bsingle__post mb-50">
                    <div className="bsingle__post-thumb embed-responsive embed-responsive-16by9">
                        <iframe height={300} allow="autoplay"
                        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/547295505&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true" />
                    </div>
                    <div className="bsingle__content">
                        <div className="admin">
                        <a href="#">
                            <i className="far fa-user" /> by Hetmayar
                        </a>
                        </div>
                        <h2>
                        <Link to="/blogdetails">
                            Lorem ipsum dolor sit amet, consectetur cing elit, sed do
                            eiusmod tempor.
                        </Link>
                        </h2>
                        <p>
                        Novia's spaciously two bedroom apartments are perfect for families
                        and even business partners. Look out into the Manhattan skyline
                        from the open fully equipped kitchen.
                        </p>
                        <div className="meta-info">
                        <ul>
                            <li>
                            <i className="fal fa-eye" /> 100 Views
                            </li>
                            <li>
                            <i className="fal fa-comments" /> 35 Comments
                            </li>
                            <li>
                            <i className="fal fa-calendar-alt" /> 24th March 2019
                            </li>
                        </ul>
                        </div>
                    </div>
                    </div>
                    <div className="bsingle__post mb-50">
                    <div className="bsingle__content">
                        <h2>
                        <Link to="/blogdetails">
                            Lorem ipsum dolor sit amet, consectetur cing elit, sed do
                            eiusmod tempor.
                        </Link>
                        </h2>
                        <p>
                        Novia's spaciously two bedroom apartments are perfect for families
                        and even business partners. Look out into the Manhattan skyline
                        from the open fully equipped kitchen.
                        </p>
                        <div className="meta-info">
                        <ul>
                            <li>
                            <i className="fal fa-eye" /> 100 Views
                            </li>
                            <li>
                            <i className="fal fa-comments" /> 35 Comments
                            </li>
                            <li>
                            <i className="fal fa-calendar-alt" /> 24th March 2019
                            </li>
                        </ul>
                        </div>
                    </div>
                    </div>
                    <div className="bsingle__post mb-50">
                    <div className="bsingle__content quote-post" style={{ backgroundImage: `url(${ QuoteOne })` }} > 
                        <div className="quote-icon">
                        <img src={Black} alt="" />
                        </div>
                        <h2>
                        <Link to="/blogdetails">
                            We denounce with of righteous one indignation and dislike men.
                        </Link>
                        </h2>
                        <div className="meta-info">
                        <ul>
                            <li>
                            <i className="fal fa-eye" /> 100 Views
                            </li>
                            <li>
                            <i className="fal fa-comments" /> 35 Comments
                            </li>
                            <li>
                            <i className="fal fa-calendar-alt" /> 24th March 2019
                            </li>
                        </ul>
                        </div>
                    </div>
                    </div>
                    <div className="pagination-wrap">
                    <nav>
                        <ul className="pagination">
                        <li className="page-item">
                            <a href="#">
                            <i className="fas fa-angle-double-left" />
                            </a>
                        </li>
                        <li className="page-item active">
                            <a href="#">1</a>
                        </li>
                        <li className="page-item">
                            <a href="#">2</a>
                        </li>
                        <li className="page-item">
                            <a href="#">3</a>
                        </li>
                        <li className="page-item">
                            <a href="#">...</a>
                        </li>
                        <li className="page-item">
                            <a href="#">10</a>
                        </li>
                        <li className="page-item">
                            <a href="#">
                            <i className="fas fa-angle-double-right" />
                            </a>
                        </li>
                        </ul>
                    </nav>
                    </div>
                </div>
               
                <div className="col-sm-12 col-md-12 col-lg-4">
                    <aside className="sidebar-widget">
                    <section id="search-3" className="widget widget_search">
                        <h2 className="widget-title">Search</h2>
                        <form role="search" method="get" className="search-form" action="http://wordpress.zcube.in/finco/" >

                        <label>
                            <span className="screen-reader-text">Search for:</span>
                            <input type="search"
                            className="search-field"
                            placeholder="Search …"
                            defaultValue=""
                            name="s" />

                        </label>
                        <input type="submit"
                            className="search-submit"
                            defaultValue="Search" />

                        </form>
                    </section>
                    <section id="custom_html-5"
                        className="widget_text widget widget_custom_html">

                        <h2 className="widget-title">Follow Us</h2>
                        <div className="textwidget custom-html-widget">
                        <div className="widget-social">
                            <a href="#">
                            <i className="fab fa-twitter" />
                            </a>
                            <a href="#">
                            <i className="fab fa-pinterest-p" />
                            </a>
                            <a href="#">
                            <i className="fab fa-facebook-f" />
                            </a>
                            <a href="#">
                            <i className="fab fa-instagram" />
                            </a>
                            <a href="#">
                            <i className="fab fa-wordpress" />
                            </a>
                        </div>
                        </div>
                    </section>
                    <section id="categories-1" className="widget widget_categories">
                        <h2 className="widget-title">Categories</h2>
                        <ul>
                        <li className="cat-item cat-item-16">
                            <a href="#">Branding</a> (4)
                        </li>
                        <li className="cat-item cat-item-23">
                            <a href="#">Corporat</a> (3)
                        </li>
                        <li className="cat-item cat-item-18">
                            <a href="#">Design</a> (3)
                        </li>
                        <li className="cat-item cat-item-22">
                            <a href="#">Gallery</a> (3)
                        </li>
                        </ul>
                    </section>
                    <section id="recent-posts-4" className="widget widget_recent_entries">
                        <h2 className="widget-title">Recent Posts</h2>
                        <ul>
                        <li>
                            <a href="#">
                            User Experience Psychology And Performance Smshing
                            </a>
                            <span className="post-date">August 19, 2020</span>
                        </li>
                        <li>
                            <a href="#">Monthly Web Development Up Cost Of JavaScript</a>
                            <span className="post-date">August 19, 2020</span>
                        </li>
                        <li>
                            <a href="#">
                            There are many variation passages of like available.
                            </a>
                            <span className="post-date">August 19, 2020</span>
                        </li>
                        </ul>
                    </section>
                    <section id="tag_cloud-1" className="widget widget_tag_cloud">
                        <h2 className="widget-title">Tag</h2>
                        <div className="tagcloud">
                        <a href="#"
                            className="tag-cloud-link tag-link-28 tag-link-position-1"
                            style={{ fontSize: "8pt" }}
                            aria-label="app (1 item)" >
                            app
                        </a>
                        <a href="#"
                            className="tag-cloud-link tag-link-17 tag-link-position-2"
                            style={{ fontSize: "8pt" }}
                            aria-label="Branding (1 item)" >
                            Branding
                        </a>
                        <a href="#"
                            className="tag-cloud-link tag-link-20 tag-link-position-3"
                            style={{ fontSize: "8pt" }}
                            aria-label="corporat (1 item)" >
                            corporat
                        </a>
                        <a href="#"
                            className="tag-cloud-link tag-link-24 tag-link-position-4"
                            style={{ fontSize: "16.4pt" }}
                            aria-label="Design (2 items)" >
                            Design
                        </a>
                        <a href="#"
                            className="tag-cloud-link tag-link-25 tag-link-position-5"
                            style={{ fontSize: "22pt" }}
                            aria-label="gallery (3 items)" >
                            gallery
                        </a>
                        <a href="#"
                            className="tag-cloud-link tag-link-26 tag-link-position-6"
                            style={{ fontSize: "8pt" }}
                            aria-label="video (1 item)" >
                            video
                        </a>
                        <a href="#"
                            className="tag-cloud-link tag-link-29 tag-link-position-7"
                            style={{ fontSize: "16.4pt" }}
                            aria-label="web design (2 items)" >
                            web design
                        </a>
                        </div>
                    </section>
                    </aside>
                </div>
                
                </div>
            </div>
        </section>
    </>
  )
}

export default First