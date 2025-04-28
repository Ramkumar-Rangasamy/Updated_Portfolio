import React from "react";
import "./About.css";
import aboutprofile from "../../../../Assets/aboutprofile.jpg";
import { CgArrowRight } from "react-icons/cg";

// Accurate experience calculation
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

// 👉 Handle smooth scroll to section
const handleNavClick = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

const About = () => {
  const name = "Ramkumar";
  const position = "React.js Developer";
  const experienceStartDate = "March 01, 2024"; // "Join Date"
  const { years, months } = calculateExperience(experienceStartDate);

  return (
    <section id="about" className="about-section">
      <div className="container-lg">
        <div className="title-container col-lg-6 mb-3">
          <h2>About Me</h2>
          <p>
            Let me introduce myself – a passionate developer dedicated to
            crafting impactful digital experiences...
          </p>
        </div>

        <div className="row align-items-center g-5">
          <div className="col-lg-5 order-1 order-lg-1">
            <div className="d-flex flex-column align-items-center justify-content-center h-100">
              <img
                src={aboutprofile}
                alt="Profile"
                className="img-fluid profile-about-img"
                loading="lazy"
              />
            </div>
          </div>

          <div className="col-lg-7 order-2 order-lg-2">
            <h2 className="mb-2">Software Developer | {position}</h2>
            <p>
              I'm {name}, a passionate developer specializing in building
              dynamic, responsive web applications with React.js. I focus on
              creating seamless, user-friendly digital experiences using modern
              web technologies.
            </p>
            <p>
              With {years} Year{years !== 1 ? "s" : ""} and {months} Month{months !== 1 ? "s" : ""} of hands-on experience, I
              specialize in creating seamless digital experiences that blend
              functionality with intuitive design. I develop scalable frontend
              solutions, collaborating with teams to deliver high-quality
              products that meet both business and user needs.
            </p>
            <p>
              Self-motivated and detail-oriented, I am passionate about
              continuous learning and crafting impactful solutions in web
              development.
            </p>
            <p>
              My goal is to build high-performance, user-friendly applications
              that drive engagement and accessibility.
            </p>

            <div className="d-flex align-items-center mobile-tyle-btn-btns">
              <div className="btn-bar">
                <button
                  onClick={() => handleNavClick("about")}
                  className="px-btn theme abouts-buttons"
                >
                  <span>Download CV</span>
                  <CgArrowRight className="arrow" size="1.5rem" />
                </button>
              </div>

              <div className="btn-bar">
                <button
                  onClick={() => handleNavClick("Portfolio")}
                  className="px-btn theme abouts-buttons"
                >
                  <span>Contact Us</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
