import React from 'react';
import Slider from "react-slick";
import bannerImage from './../../resources/banner-image.svg';
import bannerImage2 from './../../resources/banner-image-2.svg';

function Banner() {
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <Slider {...settings} className="carousel">
            <div className="banner">
                <img src={bannerImage} alt="" height="100%" />
                <div className="text">
                    <h1><span>Get</span>15%<span> less on RENT</span></h1>
                    <h3>Black friday offer 🎉</h3>
                </div>
            </div>

            <div className="banner">
                <img src={bannerImage2} alt="" height="100%" />
                <div className="text">
                    <h1><span>Get</span>10%<span> less on BUY</span></h1>
                    <h3>Black friday offer 🎉</h3>
                </div>
            </div>
        </Slider>
    )
}

export default Banner
