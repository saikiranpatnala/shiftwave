import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './Ourprocess.css';
import Lottie from "lottie-react";
import circleanim from "./circle.json";
import develop from "./develop.json";
import design from "./Design.json";
import result from "./result.json";
import ourProcessicon from "./our-head-icon.svg";

const Ourprocess = () => {
  return (
    <>
        <div className='container ourprocess-main padding-1'>

            <div className='heading-with-icon'>
                <img src={ourProcessicon} alt="Our Process" />
                <h2>Our Process</h2>
            </div>

            <div className="ourprocess-sub">
                <div className="ourprocess-box">
                    <div className='box-main'>
                        <div className='box-lottie'>
                            <Lottie animationData={circleanim} loop={true} />
                            <div>01</div>
                        </div>
                        <h3>Ideate</h3>
                        <p>Our services are crafted by experts who are deeply into any industry, ensuring your project stands out in a crowded market.</p>
                    </div>
                </div>
                <div className="ourprocess-box">
                    <div className='box-main'>
                        <div className='box-lottie'>
                        <Lottie animationData={develop} loop={true} />
                            <div>02</div>
                        </div>
                        <h3>Develop</h3>
                        <p>Our services are crafted by experts who are deeply into any industry, ensuring your project stands out in a crowded market.</p>
                    </div>
                </div>
                <div className="ourprocess-box">
                    <div className='box-main'>
                        <div className='box-lottie'>
                        <Lottie animationData={design} loop={true} />
                            <div>03</div>
                        </div>
                        <h3>Design</h3>
                        <p>Our services are crafted by experts who are deeply into any industry, ensuring your project stands out in a crowded market.</p>
                    </div>
                </div>
                <div className="ourprocess-box">
                    <div className='box-main'>
                        <div className='box-lottie'>
                        <Lottie animationData={result} loop={true} />
                            <div>04</div>
                        </div>
                        <h3>Result</h3>
                        <p>Our services are crafted by experts who are deeply into any industry, ensuring your project stands out in a crowded market.</p>
                    </div>
                </div>
                
            </div>
        </div>
    </>
  )
};

export default Ourprocess
