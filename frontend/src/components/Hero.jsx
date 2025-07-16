import React from 'react';

const Hero = ({ title, imageUrl }) => {
  return (
    <div className="hero container">
      <div className="banner">
        <h1>{title}</h1>
        <p style={{ textAlign: 'justify' }}>
  At SPCare Medical Institute, we are committed to delivering compassionate, high-quality, and patient-centered healthcare. <br />
  Our team of skilled medical professionals is dedicated to your well-being, offering advanced diagnostics, expert treatments, and personalized care. <br />
  Whether you need routine checkups or specialized services, we ensure that you and your family receive the best possible care in a safe and supportive environment.
</p>

      </div>
      <div className="banner">
        <img src={imageUrl} alt="hero" className="animated-image" />
        <span>
          <img src="/Vector.png" alt="vector" />
        </span>
      </div>
    </div>
  );
};

export default Hero;
