import React from 'react';
import banner from "../../assets/banner.mp4";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './Hero.css';




const Hero = () => {
    return (
        <>
            <div className="banner-video">
                <video className='banner-video' autoPlay loop muted>
                    <source src={banner} type='video/mp4' />
                </video>
                <div className="red-box">
                    <div className="banner-h1">
                        <h1>Your Trusted Partner for Digital Marketing & Website Development Solutions, powered by AI.</h1>
                    </div>
                    <div className="banner-buttons">
                        <button>Let's Talk</button>
                        <button>Request a Quote</button>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Hero
