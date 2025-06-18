import React from 'react';
import SetData from '../../../Data/SetData';
import './Experience.css';

const Experience = () => {
  const { education, experience } = SetData;

  return (
    <section id="myjourney" className="experience-section">
      <div className="container-lg">
        <div className="title-container mb-5">
          <h2>Career Timeline</h2>
          <p className="col-12 col-md-6">A snapshot of my journey through academic achievements and hands-on professional experiences that have shaped my skills, mindset, and growth as a developer."</p>
        </div>

        <div className="row">
          {/* Education Section */}
          <div className="col-md-6">
            <header className="title mb-3 ps-3">
              <h3>EDUCATION</h3>
            </header>
            <div className="contents border-start ps-3">
              {education.map((edu, index) => (
                <div className="box" key={index}>
                  <h4>{edu.year}</h4>
                  <h3>{edu.degree}</h3>
                  <p>{edu.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Experience Section */}
          <div className="col-md-6 mt-4 mt-md-0">
            <header className="title mb-3 ps-3">
              <h3>EXPERIENCE</h3>
            </header>
            <div className="contents border-start ps-3">
              {experience.map((exp, index) => (
                <div className="box" key={index}>
                  <h4>{exp.year}</h4>
                  <h3>{exp.role}</h3>
                  <p>{exp.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
