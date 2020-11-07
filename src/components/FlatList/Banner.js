import React from 'react';
import bannerImage from './../../resources/banner-image.svg';

function Banner() {
    return (
        <div className="banner">
            <img src={bannerImage} alt="" height="100%"/>
            <div className="text">
                <h1><span>Get</span>15%</h1>
                <h3>Black friday offer 🎉</h3>
            </div>
        </div>
    )
}

export default Banner
