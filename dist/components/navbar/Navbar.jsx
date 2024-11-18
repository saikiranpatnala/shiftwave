import React from 'react'
import logo from '../../assets/logo.png';
import { FaBars } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './Navbarstyle.css';
import Lottie from "lottie-react";
import groovyWalkAnimation from "./groovyWalk.json";


const Navbar = () => {
  return (
    <>
        <header>
            <div className='container nav-main'>
                <div className="row">
                    <div className='col-5 col-md-3 col-lg-3'>
                        <img className='logo' src={logo} alt="Shiftwave" />
                    </div>
                    <div className='col-md-6 col-lg-6 desk-menu'>
                        <ul>
                            <li><a href="/about">About</a></li>
                            <li><a href="/blog">Blog</a></li>
                            <li><a href="/services">Services</a></li>
                            <li><a href="/portfolio">Portfolio</a></li>
                            <li><a href="/testimonial">Testimonial</a></li> 
                        </ul>
                    </div>
                    <div className='col-7 col-md-3 col-lg-3'>
                        <div className="content">
                            <div className="row">
                                <div className='col-9'>
                                    <button className='book-button'>Book a Call</button>
                                </div>
                                <div className='col-3'>
                                    <a data-bs-toggle="modal" data-bs-target="#mob-menu"><FaBars /></a>      
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>


              <div className="modal mobMenu" id="mob-menu" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="termsLabel" aria-hidden="true">
                  <div className="modal-dialog">
                      <div className="modal-content">
                          <div className="modal-body">
                              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" id="nvlink-btn"><RxCross1 /></button>
                              <div className="menu">

                                  <div className="box-menu">
                                      <h3>Company</h3>
                                      <ul>
                                          <li className="menu-item"><a href="#">Home</a></li>
                                          <li className="menu-item"><a href="#">About Us</a></li>
                                          <li className="menu-item"><a href="#">Industries We Serve</a></li>
                                          <li className="menu-item"><a href="#">Contact Us</a></li>
                                          <li className="menu-item"><a href="#">Portfolio</a></li>
                                          <li className="menu-item"><a href="#">Careers</a></li>
                                          <li className="menu-item"><a href="#">Testimonials</a></li>
                                          <li className="menu-item"><a href="#">Blog</a></li>
                                          <li className="menu-item"><a href="#">FAQ</a></li>
                                          <li className="menu-item"><a href="#">Terminated Employees</a></li>
                                      </ul>
                                  </div>

                                  <div className="box-menu">
                                      <h3>Website Services</h3>
                                      <ul>
                                          <li className="menu-item"><a href="#">Web Design</a></li>
                                          <li className="menu-item"><a href="#">Web Development</a></li>
                                          <li className="menu-item"><a href="#">E-Commerce Website</a></li>
                                          <li className="menu-item"><a href="#">CRM System</a></li>
                                          <li className="menu-item"><a href="#">Lead Management</a></li>
                                         
                                      </ul>
                                  </div>

                                  <div className="box-menu">
                                      <h3>Digital Marketing</h3>
                                      <ul>
                                          <li className="menu-item"><a href="#">SEO Services</a></li>
                                          <li className="menu-item"><a href="#">PPC Services</a></li>
                                          <li className="menu-item"><a href="#">Social Media Marketing</a></li>
                                          <li className="menu-item"><a href="#">Local Listing</a></li>
                                          <li className="menu-item"><a href="#">Content Marketing</a></li>
                                          <li className="menu-item"><a href="#">Conversion Rate Optimization</a></li>
                                          <li className="menu-item"><a href="#">Email Marketing</a></li>
                                          
                                      </ul>
                                  </div>

                                  <div className="box-menu">
                                      <Lottie animationData={groovyWalkAnimation} loop={true} />;
                                  </div>
                                  
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
        </header>
    </>
  )
};

export default Navbar
