import React from 'react';
import { BiSolidChevronRightCircle } from "react-icons/bi";
import './Experience.css';
import dateimage from '../../../../Assets/date-icon.png';

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
        <div className="title-container mb-4">
          <h2>Professional Experience</h2>
        </div>

        <div className="row align-items-center g-2 my-2">
          {/* Left - Experience years and months */}
          <div className="col-lg-5 col-12 d-flex flex-column align-items-center justify-content-center">
            <img src={dateimage} className='exp-date-image' loading="lazy" alt="Experience Icon" />
            <h1 className="ab-exper-count">
              {years}Y {months}M
            </h1>
            <p className="ab-content">Years Of Experience Working</p>
          </div>

          {/* Right - Description and Services */}
          <div className="col-lg-7 col-12 mt-4 d-flex flex-column align-items-start justify-content-center">
            <h2 className="fw-bold mb-1">React Developer & UI Designer</h2>
            <p className="mb-4">OneYes Infotech Solutions</p>

            {/* 3 Points */}
            <div className="row">
              <div className="col-12 mb-3 d-flex flex-column align-items-start">
                <div className="d-flex align-items-start">
                  <BiSolidChevronRightCircle className='me-2 color-style exp-icon' />
                  <h5 className="exp-company-title">Creative UI Development</h5>
                </div>  
                <p className="p-2 pt-0 pb-0 line-spaceing-experience">
                  Gained real-time project experience in designing responsive UIs, focusing on clean layout and accessibility across all screen sizes.
                </p>
              </div>

              <div className="col-12 mb-3 d-flex flex-column align-items-start">
                <div className="d-flex align-items-start">
                  <BiSolidChevronRightCircle className="me-2 color-style exp-icon" />
                  <h5 className="exp-company-title">Dashboard Projects</h5>
                </div>
                <p className="p-2 pt-0 pb-0 line-spaceing-experience">
                  Worked on complete dashboard structures — implementing layouts, state management, and connecting UI logic in React efficiently.
                </p>
              </div>

              <div className="col-12 mb-3 d-flex flex-column align-items-start">
                <div className="d-flex align-items-start">
                 <BiSolidChevronRightCircle className="me-2 color-style exp-icon" />
                 <h5 className="exp-company-title">Clean Code & Integration</h5>
                </div>
                <p className="p-2 pt-0 line-spaceing-experience">
                  I take pride in translating designs into production-ready React code with proper structure, reusability, and responsive behavior.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;
