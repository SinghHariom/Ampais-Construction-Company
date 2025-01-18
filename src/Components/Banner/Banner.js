import React from 'react';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';

const BannerFaqSliderWrap = () => {
  return (
    <div className="banner-faq-slider-wrap">
      <div className="container">
        <div className="row d-flex align-items-center position-relative" style={{ marginTop: "0!important" }}>
          <div className="col-7 col-lg-9 banner-faq-slider-dynamic-wrap owl-carousel owl-theme owl-loaded owl-drag" id="banner-faq-slider">
            <div className="owl-stage-outer">
              <div className="owl-stage" style={{ transform: "translate3d(-1798px, 0px, 0px)", transition: "0.25s", width: "6293px" }}>
                <div className="owl-item cloned" style={{ width: "889px", marginRight: "10px" }}>
                  <div className="item w-100 bfsw__item">
                    <p>How much land is required for the construction of football turf?</p>
                  </div>
                </div>
                <div className="owl-item cloned" style={{ width: "889px", marginRight: "10px" }}>
                  <div className="item w-100 bfsw__item">
                    <p>What are the maintenance charges for artificial football grass?</p>
                  </div>
                </div>
                <div className="owl-item active" style={{ width: "889px", marginRight: "10px" }}>
                  <div className="item w-100 bfsw__item">
                    <p>What is the construction cost of an artificial football turf?</p>
                  </div>
                </div>
                <div className="owl-item" style={{ width: "889px", marginRight: "10px" }}>
                  <div className="item w-100 bfsw__item">
                    <p>How much land is required for the construction of football turf?</p>
                  </div>
                </div>
                <div className="owl-item" style={{ width: "889px", marginRight: "10px" }}>
                  <div className="item w-100 bfsw__item">
                    <p>What are the maintenance charges for artificial football grass?</p>
                  </div>
                </div>
                <div className="owl-item cloned" style={{ width: "889px", marginRight: "10px" }}>
                  <div className="item w-100 bfsw__item">
                    <p>What is the construction cost of an artificial football turf?</p>
                  </div>
                </div>
                <div className="owl-item cloned" style={{ width: "889px", marginRight: "10px" }}>
                  <div className="item w-100 bfsw__item">
                    <p>How much land is required for the construction of football turf?</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="owl-nav disabled">
              <button type="button" role="presentation" className="owl-prev">
                <span aria-label="Previous">‹</span>
              </button>
              <button type="button" role="presentation" className="owl-next">
                <span aria-label="Next">›</span>
              </button>
            </div>
            <div className="owl-dots disabled"></div>
          </div>
          <div className="px-0 col-5 col-lg-3 bfsw__faq_link">
            <span>
              <a href="#lp_faq_main" className="scroll-to-div">Get Solution Here</a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerFaqSliderWrap;
