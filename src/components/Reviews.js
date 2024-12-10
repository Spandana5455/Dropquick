import React from 'react'
import './Reviews.css'
import Slider from "react-slick";
import img1 from '../images/reviewpro.png';
import img2 from '../images/reviewpro1.png';
import img3 from '../images/reviewpro2.png';
import img4 from '../images/reviewpro3.png';
import img5 from '../images/reviewpro4.png';
import img6 from '../images/reviewpro5.png';
import img7 from '../images/reviewpro6.png';
import img8 from '../images/reviewpro7.png'

 


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
                    <img src={img2} alt="" className='rounded-circle user-pic-in-review' />
                  </div>
                  <div className="user-name">
                    <h3>Sridhar Rao</h3>
                    <div>⭐⭐⭐⭐</div>
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
                    <h3>Rohini</h3>
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
                  <p>“Best shopping experience ever
                    I found exactly what i was looking for and received my order quickly.”</p>
                </div>
                <div className="presonal-data-review">
                  <div className="review-user-pic">
                    <img src={img3} alt="" className='rounded-circle user-pic-in-review' />
                  </div>
                  <div className="user-name">
                    <h3>Rajesh Kumar</h3>
                    <div>⭐⭐⭐⭐</div>
                  </div>
                </div>
              </div>

              <div className="review-card-main d-none d-md-block" >
                <div className="review-cards">
                  <p>“The product i ordered was exactly as described 
                    and even better in person.” </p>
                </div>
                <div className="presonal-data-review">
                  <div className="review-user-pic">
                    <img src={img4} alt="" className='rounded-circle user-pic-in-review' />
                  </div>
                  <div className="user-name">
                    <h3>Meera</h3>
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
                  <p>“ I had a small issue with my order, and the 
                    customer service team resolved it instantly.”</p>
                </div>
                <div className="presonal-data-review">
                  <div className="review-user-pic">
                    <img src={img5} alt="" className='rounded-circle user-pic-in-review' />
                  </div>
                  <div className="user-name">
                    <h3>Mounika Raj</h3>
                    <div>⭐⭐⭐⭐</div>
                  </div>
                </div>
              </div>

              <div className="review-card-main d-none d-md-block" >
                <div className="review-cards">
                  <p>“ I’ve made several purchases and have never been disappointed.
                     Every time arrive in perfect condition.”</p>
                </div>
                <div className="presonal-data-review">
                  <div className="review-user-pic">
                    <img src={img6} alt="" className='rounded-circle user-pic-in-review' />
                  </div>
                  <div className="user-name">
                    <h3>Vivek Vardhan</h3>
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
                  <p>“ I’ve tried many products before, 
                    but this one truly stands out.” </p>
                </div>
                <div className="presonal-data-review">
                  <div className="review-user-pic">
                    <img src={img7} alt="" className='rounded-circle user-pic-in-review' />
                  </div>
                  <div className="user-name">
                    <h3>Ram Nand</h3>
                    <div>⭐⭐⭐⭐⭐</div>
                  </div>
                </div>
              </div>

              <div className="review-card-main d-none d-md-block" >
                <div className="review-cards">
                  <p>“ From the seamless ordering process to the quick delivery, 
                    this company has mastered convenience.” </p>
                </div>
                <div className="presonal-data-review">
                  <div className="review-user-pic">
                    <img src={img8} alt="" className='rounded-circle user-pic-in-review' />
                  </div>
                  <div className="user-name">
                    <h3>Dhrushika</h3>
                    <div>⭐⭐⭐⭐</div>
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
