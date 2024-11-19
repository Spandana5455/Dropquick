import React from "react";
import Slider from "react-slick";
import "./HomeSlider.css";

// Import images statically
import s1 from "../src/images/s1.png";
import s2 from "../src/images/s2.png";
import s3 from "../src/images/s3.png";
import s4 from "../src/images/s4.png";
import s5 from "../src/images/s5.png";
import s6 from "../src/images/s6.png";

export default function HomeSlider() {
    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        waitForAnimate: false,
        pauseOnHover: false,
        appendDots: dots => (
            <div style={{ position: "absolute", bottom: "20px", width: "100%" }}>
                <ul style={{ margin: "0px", padding: "0px", display: "flex", justifyContent: "center" }}>{dots}</ul>
            </div>
        ),
        customPaging: i => (
            <div
                style={{
                    width: "12px",
                    height: "12px",
                    borderRadius: "50%",
                    background: "white",
                    opacity: 2,
                    transition: "opacity 0.3s ease, transform 0.3s ease"
                }}
                className="dot"
            ></div>
        )
        
    };
   
     
    const data = [
        { name: ' Explore a wide selection of top-brand electronics with fast shipping and customer support you can count on. Shop now for everything from headphones to gaming consoles! ', path: s1 },
        { name: '    Feature a beautiful outdoor setting with weather-resistant furniture, a stylish table, and lounge chairs surrounded by greenery, inviting customers to envision relaxing or hosting gatherings. ', path: s2 },
        { name: '  Present a modern home office with an ergonomic desk, comfortable chair, and smart storage, blending functionality with sleek design to inspire productivity and style.', path: s3 },
        { name: ' Discover the perfect blend of Technology and Style with our wide range of premium Modern Furniture', path: s4 },
        { name: ' Step into the future with innovative electronics designed to make life easier. Shop for smart home systems, high-tech appliances, and more, all in one place', path: s5 },
        { name: '  Showcase a stylish, cozy living room featuring sleek furniture, warm lighting, and soft cushions, offering an inviting blend of comfort and elegance.', path: s6 }
    ];

    return (
        <div className="home-slider-container">
            <div className="search-bar-container">
                <input type="text" placeholder="Search here..." className="search-bar" />
                <span className="material-symbols-outlined search-icon">search</span>
            </div>
            <Slider {...settings}>
                {data.map((item, index) => (
                    <div key={index} className="home-slide">
                        <img src={item.path} alt='Slide' className="full-width-image" />
                        <div className="gradient-overlay" />  
                        <div className="text-overly-home">
                            <h1 className="slider-text">{item.name}</h1>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}
