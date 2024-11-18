import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './Footer.css';
import logo from '../../assets/logo.png';

const Footer = () => {
  return (
    <>
        <div className='footer padding-1'>
            <div className='container'>
                <div className="row">
                    <div className="col-12 col-md-3 footer-logo">
                        <img src={logo} alt="Shiftwave" />
                        <div>
                            <div className='follow-text'>Follow us</div>
                            <div></div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="row">
                            <div className="col-md-4">
                                <p>Quick Links</p>
                                <ul>
                                    <li><a href="#">Home</a></li>
                                    <li><a href="#">About Us</a></li>
                                    <li><a href="#">Our Services</a></li>
                                    <li><a href="#">Portfolio</a></li>
                                    <li><a href="#">Careers</a></li>
                                    <li><a href="#">Testimonials</a></li>
                                    <li><a href="#">Contact Us</a></li>
                                    <li><a href="#">Blog</a></li>
                                    <li><a href="#">FAQ</a></li>
                                </ul>
                            </div>

                            <div className="col-md-4">

                                {/* <div className="dropdown">
                                    <button>
                                        Website Services
                                        <span className="arrow-down">&#9660;</span> 
                                        <span className="arrow-up" style="display: none;">&#9650;</span> 
                                    </button>
                                    <div className="dropdown-content">
                                        <a href="#">Link 1</a>
                                        <a href="#">Link 2</a>
                                        <a href="#">Link 3</a>
                                    </div>
                                </div> */}

                                <p>Website Services</p>
                                <p>Policy</p>
                            </div>
                            <div className="col-md-4">
                                <p>Digital Marketing</p>
                            </div>
                            
                        </div>
                    </div>
                    <div className="col-12 col-md-3">
                        <div className='footer-jumbo'>Reach out to us anytime</div>
                    </div>
                </div>
            </div>

        </div>
    </>
  )
};

export default Footer
