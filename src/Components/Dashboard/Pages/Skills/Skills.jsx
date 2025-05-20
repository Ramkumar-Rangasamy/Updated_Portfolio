import React from "react";
import setData from "../../../Data/SetData";
import "./Skills.css";

const Skills = () => {
  return (
    <section className="skills-section" id="skills">
      <div className="container-lg">
        <div className="title-container mb-4">
          <h2>Skills & Expertise</h2>
          <p className="col-12 col-md-6 mx-auto mx-md-0 text-muted">
            I develop modern web applications with the MERN stack: MongoDB, Express.js, React, and Node.js.
          </p>
        </div>
        <div className="row p-3">
          {setData.skills.map((skill, idx) => (
            <div key={idx} className="col-lg-3 col-md-6 mb-5">
              <div className="feature-gd">
                <div className="icon">
                  {skill.icon}
                </div>
                <h4 className="icon-info">
                  {skill.title}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
