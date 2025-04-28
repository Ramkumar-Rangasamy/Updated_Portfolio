import React from 'react';
import { FaAnglesRight } from "react-icons/fa6";
import './Experience.css'; // Your CSS file

const calculateExperience = (startDate) => {
  const start = new Date(startDate);
  const now = new Date();
  let years = now.getFullYear() - start.getFullYear();
  let months = now.getMonth() - start.getMonth();
  if (months < 0) {
    years--;
    months += 12;
  }
  return { years, months };
};

const Experience = () => {
  const experienceStartDate = "March 01, 2024";
  const { years, months } = calculateExperience(experienceStartDate);

  return (
    <section id="experience" className="experience-section">
      <div className="container-lg">
        <div className="row align-items-center">

          {/* Left - Experience years and months */}
          <div className="col-md-3 col-sm-4 d-flex flex-column justify-content-center">
            <h1 className="ab-exper-count mb-sm-4 ps-lg-4">
              {years}Y {months}M
            </h1>
            <p className="ab-content ps-lg-4">Years Of Experience Working</p>
          </div>

          {/* Right - Description and Services */}
          <div className="col-xl-8 col-md-9 col-sm-8 offset-xl-1 ps-xl-0 pe-xl-5 mt-sm-0 mt-4">
            <h2 className="fw-bold mb-4">
              Software Developer & React Developer
            </h2>
            <p className="mb-4">OneYes Infotech Solutions</p>

            {/* 3 Points with same right arrow icon */}
            <div className="row">
              <div className="col-12 mb-3 d-flex align-items-start">
                <FaAnglesRight size={20} className="me-3  mt-1" />
                <div>
                  <h5 className="fw-bold mb-1">Creative UI Development</h5>
                  <p className="mb-0">Building interactive and user-friendly interfaces with React.js.</p>
                </div>
              </div>
              <div className="col-12 mb-3 d-flex align-items-start">
                <FaAnglesRight size={20} className="me-3  mt-1" />
                <div>
                  <h5 className="fw-bold mb-1">API Integration</h5>
                  <p className="mb-0">Connecting front-end applications with RESTful APIs and backend services.</p>
                </div>
              </div>
              <div className="col-12  mb-3 d-flex align-items-start">
                <FaAnglesRight size={20} className="me-3  mt-1" />
                <div>
                  <h5 className="fw-bold mb-1">Performance Optimization</h5>
                  <p className="mb-0">Optimizing React apps for speed, scalability, and better user experience.</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;
