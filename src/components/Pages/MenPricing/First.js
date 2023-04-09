import React from 'react'

function First() {
  return (
    <>
        <section id="pricing" className="pricing-area pt-120 pb-90">
            <div className="container">
                <div className="row">
                <div className="col-lg-12">
                    <div className="section-title center-align text-center mb-50">
                    <h5>Pricing</h5>
                    <h2>Our Plan</h2>
                    </div>
                </div>
                </div>
                <div className="row">
                <div className="col-lg-4 col-md-12">
                    <div className="pricing-box text-center mb-60 ">
                    <div className="pricing-head">
                        <div className="glyph-icon flaticon-pie-chart" />
                        <h4>Basic Plan</h4>
                    </div>
                    <div className="pricing-body mb-30 text-center">
                        <p>Morbi sollicitudin eros urna, eu posuere est pulvinar nec.</p>
                        <p>Sed pharetra ligula et tempus tincidunt.</p>
                        <p>Proin sed rhoncus neque.</p>
                    </div>
                    <div className="price-count mb-30">
                        <h2>
                        $49 <span>/ Monthly</span>
                        </h2>
                    </div>
                    <div className="pricing-btn">
                        <a href="#" className="btn">
                        Join Now
                        </a>
                    </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-12">
                    <div className="pricing-box active text-center mb-60 ">
                    <div className="pricing-head">
                        <div className="glyph-icon flaticon-graphic" />
                        <h4>Standard Plan</h4>
                    </div>
                    <div className="pricing-body mb-30 text-center">
                        <p>Morbi sollicitudin eros urna, eu posuere est pulvinar nec.</p>
                        <p>Sed pharetra ligula et tempus tincidunt.</p>
                        <p>Proin sed rhoncus neque.</p>
                    </div>
                    <div className="price-count mb-30">
                        <h2>
                        $99 <span>/ Monthly</span>
                        </h2>
                    </div>
                    <div className="pricing-btn">
                        <a href="#" className="btn">
                        Join Now
                        </a>
                    </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-12">
                    <div className="pricing-box text-center mb-60 ">
                    <div className="pricing-head">
                        <div className="glyph-icon flaticon-research" />
                        <h4>Premium Plan</h4>
                    </div>
                    <div className="pricing-body mb-30 text-center">
                        <p>Morbi sollicitudin eros urna, eu posuere est pulvinar nec.</p>
                        <p>Sed pharetra ligula et tempus tincidunt.</p>
                        <p>Proin sed rhoncus neque.</p>
                    </div>
                    <div className="price-count mb-30">
                        <h2>
                        $149 <span>/ Monthly</span>
                        </h2>
                    </div>
                    <div className="pricing-btn">
                        <a href="#" className="btn">
                        Join Now
                        </a>
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