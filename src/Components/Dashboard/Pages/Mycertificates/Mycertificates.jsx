import React from 'react';
import setData from '../../../Data/SetData'; // adjust path as needed
import './Mycertificates.css'; // your custom styles
import { FaLink } from "react-icons/fa";

const Mycertificates = () => {
  const { certificates } = setData;

  const handleView = (url) => {
    window.open(url, '_blank');
  };

  return (
    <section className="certifications-section" id="certifications">
      <div className="container-lg">
        <div className="title-container mb-4">
          <h2>Certifications</h2>
          <p className="col-12 col-md-6">
            Recognized credentials from Coursera and other platforms showcasing my skills in web development and Full MERN Stack Developer
          </p>
        </div>

        <div className="row gy-4 gx-3 justify-content-center">
          {certificates.map((cert, index) => (
            <div
              className="col-12 col-sm-6 col-md-4 d-flex justify-content-center"
              key={index}
            >
              <div className="card certificate-card d-flex flex-column p-3">
                <div className="d-flex align-items-start gap-4 m-2">
                    <img
                        src={cert.logimage}
                        alt={`${cert.issuer} logo`}
                        className="certificate-logo"
                    />
                    <div>
                        <h5 className="card-title mb-1">{cert.title}</h5>
                        <p className="card-text mb-1"><span>Issuer:</span> {cert.issuer}</p>
                        <button
                          className="view-cer-btn d-flex align-items-center gap-2"
                          onClick={() => handleView(cert.link)}
                        >
                         <FaLink /> View Certificate
                       </button>
                    </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mycertificates;
