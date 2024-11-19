import React from 'react'
import './Reviews.css'
import Slider from "react-slick";
import img1 from '../images/reviewpro.png';
import img2 from '../images/reviewpro1.png'
 


function SampleNextArrow(props) {
  const { className, style,  } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none", background: "red" }}
    
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none", background: "green" }}
      onClick={onClick}
    />
  );
}

export default function Reviews() {
  const settings = {
    fade: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: false,
    nextArrow:<SampleNextArrow/>,
    prevArrow:<SamplePrevArrow/>
  };
  return (
    <>
   
      <div className="slider-container container">
        <Slider {...settings}  >
          <div className="container">
            <div className="review-parent">
              <div className="review-card-main" >
                <div className="review-cards">
                  <p>“Amazing quality and Fast delivery!
                    Fast shipping, Great customer service, and unbeatable quality”.</p>
                </div>
                <div className="presonal-data-review">
                  <div className="review-user-pic">
                    <img src={img1} alt="" className='rounded-circle user-pic-in-review' />
                  </div>
                  <div className="user-name">
                    <h3>Rohit Kumar</h3>
                    <div>⭐⭐⭐⭐⭐</div>
                  </div>
                </div>
              </div>

              <div className="review-card-main d-none d-md-block" >
                <div className="review-cards">
                  <p>“ Great Value for money!”
                    The prices are reasonable,
                    and the quality is excellent.” </p>
                </div>
                <div className="presonal-data-review">
                  <div className="review-user-pic">
                    <img src={img2} alt="" className='rounded-circle user-pic-in-review' />
                  </div>
                  <div className="user-name">
                    <h3>Srikanth Juturi</h3>
                    <div>⭐⭐⭐⭐⭐</div>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div className="container">
            <div className="review-parent">
              <div className="review-card-main" >
                <div className="review-cards">
                  <p>“Amazing quality and Fast delivery!
                    Fast shipping, Great customer service, and unbeatable quality”.</p>
                </div>
                <div className="presonal-data-review">
                  <div className="review-user-pic">
                    <img src={img2} alt="" className='rounded-circle user-pic-in-review' />
                  </div>
                  <div className="user-name">
                    <h3>Manikantha Kagga</h3>
                    <div>⭐⭐⭐⭐⭐</div>
                  </div>
                </div>
              </div>

              <div className="review-card-main d-none d-md-block" >
                <div className="review-cards">
                  <p>“ Great Value for money!”
                    The prices are reasonable,
                    and the quality is excellent.” </p>
                </div>
                <div className="presonal-data-review">
                  <div className="review-user-pic">
                    <img src={img1} alt="" className='rounded-circle user-pic-in-review' />
                  </div>
                  <div className="user-name">
                    <h3>Srikanth Juturi</h3>
                    <div>⭐⭐⭐⭐⭐</div>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div className="container">
            <div className="review-parent">
              <div className="review-card-main" >
                <div className="review-cards">
                  <p>“ Great Value for money!”
                    The prices are reasonable,
                    and the quality is excellent.” </p>
                </div>
                <div className="presonal-data-review">
                  <div className="review-user-pic">
                    <img src={img1} alt="" className='rounded-circle user-pic-in-review' />
                  </div>
                  <div className="user-name">
                    <h3>Mohan Krishana</h3>
                    <div>⭐⭐⭐⭐⭐</div>
                  </div>
                </div>
              </div>

              <div className="review-card-main d-none d-md-block" >
                <div className="review-cards">
                  <p>“Amazing quality and Fast delivery!
                    Fast shipping, Great customer service, and unbeatable quality”.</p>
                </div>
                <div className="presonal-data-review">
                  <div className="review-user-pic">
                    <img src={img2} alt="" className='rounded-circle user-pic-in-review' />
                  </div>
                  <div className="user-name">
                    <h3>Jagdesh Nandola</h3>
                    <div>⭐⭐⭐⭐⭐</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </>
  )
}
