// src/LogoSlider.js
import React from 'react';
import './LogoSlider.css';
import logo1 from './logos/5am.png';
import logo2 from './logos/bodcor.png';
import logo3 from './logos/manbhum.png';
import logo4 from './logos/soshuku.png';

const LogoSlider = () => {
  const logos = [logo1, logo2, logo3, logo4];

  return (
    <div className="logo-slider">
      <div className="logo-track">
        {/* Render the logos 3 times for a seamless infinite scroll */}
        {[...Array(5)].map((_, i) => 
          logos.map((logo, index) => (
            <div key={`${i}-${index}`} className="logo-item">
              <img src={logo} alt={`Logo ${index + 1}`} />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default LogoSlider;
