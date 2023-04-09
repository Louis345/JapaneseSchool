import React from 'react'
import Servisebg from '../../assets/img/bg/services-bg-aliments.png'
import Teem1 from '../../assets/img/team/team_img01.png'
import Teem2 from '../../assets/img/team/team_img02.png'
import Teem3 from '../../assets/img/team/team_img03.png'
import Teem4 from '../../assets/img/team/team_img04.png'
import { Link } from "react-router-dom";


function Teem() {
  return (
    <>
        <section id="team" className="team-area pb-90 fix" style={{ backgroundImage: `url(${ Servisebg })` , backgroundRepeat: "no-repeat",backgroundPosition: "center" }} >
                <div className="container">
                    <div className="row align-items-center">
                    <div className="col-lg-12">
                        <div className="col-lg-12">
                        <div className="section-title center-align text-center mb-50">
                            <h5>Our Team</h5>
                            <h2>Our Team Members</h2>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="row">
                    <div className="col-lg-3 col-md-6">
                        <div className="single-team text-center mb-30 ">
                        <div className="team-thumb">
                            <div className="brd">
                            <img src={Teem1} alt="img" />
                            </div>
                        </div>
                        <div className="team-info">
                            <h4>
                            <Link to="/teamdetails">Rosalina D. William</Link>
                            </h4>
                            <span>Founder</span>
                            <div className="team-social mt-20">
                            <Link to="#">
                                <i className="fab fa-facebook-f" />
                            </Link>
                            <Link to="#">
                                <i className="fab fa-twitter" />
                            </Link>
                            <Link to="#">
                                <i className="fab fa-behance" />
                            </Link>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="single-team text-center mb-30 ">
                        <div className="team-thumb">
                            <div className="brd">
                            <img src={Teem2} alt="img" />
                            </div>
                        </div>
                        <div className="team-info">
                            <h4>
                            <Link to="/teamdetails">Alina Roboto William</Link>
                            </h4>
                            <span>CEO</span>
                            <div className="team-social mt-20">
                            <Link to="#">
                                <i className="fab fa-facebook-f" />
                            </Link>
                            <Link to="#">
                                <i className="fab fa-twitter" />
                            </Link>
                            <Link to="#">
                                <i className="fab fa-behance" />
                            </Link>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="single-team text-center mb-30 ">
                        <div className="team-thumb">
                            <div className="brd">
                            <img src={Teem3} alt="img" />
                            </div>
                        </div>
                        <div className="team-info">
                            <h4>
                            <Link to="/teamdetails">Rock Alane</Link>
                            </h4>
                            <span>Developer</span>
                            <div className="team-social mt-20">
                            <Link to="#">
                                <i className="fab fa-facebook-f" />
                            </Link>
                            <Link to="#">
                                <i className="fab fa-twitter" />
                            </Link>
                            <Link to="#">
                                <i className="fab fa-behance" />
                            </Link>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="single-team text-center mb-30 ">
                        <div className="team-thumb">
                            <div className="brd">
                            <img src={Teem4} alt="img" />
                            </div>
                        </div>
                        <div className="team-info">
                            <h4>
                            <Link to="/teamdetails">Rock Alane</Link>
                            </h4>
                            <span>Designer</span>
                            <div className="team-social mt-20">
                            <Link to="#">
                                <i className="fab fa-facebook-f" />
                            </Link>
                            <Link to="#">
                                <i className="fab fa-twitter" />
                            </Link>
                            <Link to="#">
                                <i className="fab fa-behance" />
                            </Link>
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

export default Teem