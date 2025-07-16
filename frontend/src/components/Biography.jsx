import React from 'react';

const Biography = ({ imageUrl }) => {
  return (
    <div className="container biography">
      <div className="banner">
        <img src={imageUrl} alt="Healthcare team" />
      </div>
      <div className="banner">
        <p>Biography</p>
        <h3>Who We Are</h3>
        <p>
          We are a dedicated team of healthcare professionals and technologists committed to improving patient outcomes through innovative medical solutions.
        </p>
        <p>
          Our focus lies in integrating advanced healthcare technologies with compassionate care to ensure every patient receives personalized treatment.
        </p>
        <p>
          By collaborating closely with hospitals, clinics, and research institutions, we bring cutting-edge tools that streamline diagnostics and patient management.
        </p>
        <p>
          We prioritize data security, compliance, and ethical standards to build trust and foster long-term partnerships within the healthcare community.
        </p>
        <p>
          Our mission is to empower healthcare providers with technology that enhances efficiency, accuracy, and accessibility in medical care.
        </p>
      </div>
    </div>
  );
};

export default Biography;
