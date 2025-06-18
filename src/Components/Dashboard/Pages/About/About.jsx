import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import "./About.css";
import SetData from "../../../Data/SetData";

// Calculate years and months of experience
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

const About = () => {
  const { aboutData } = SetData;
  const experienceStartDate = "March 01, 2024";
  const { years, months } = calculateExperience(experienceStartDate);

  // Update experience stat dynamically
  const updatedStats = aboutData.stats.map((stat) =>
    stat.label === "Year Of Experience"
      ? {
          ...stat,
          value: parseFloat((years + months / 12).toFixed(1)),
          suffix: "+",
          label: "Year Of Experience",
        }
      : stat
  );

  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.3 });

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = aboutData.cv;
    link.setAttribute("download", "Ramkumar_resume.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleNavClick = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="about" className="about-section">
      <div className="container-lg">
        <div className="row align-items-center gy-5">
          <div className="col-lg-5 order-2 order-lg-1">
            <div className="d-flex flex-column align-items-center justify-content-center h-100">
              <img
                src={aboutData.image}
                alt="Profile"
                className="img-fluid profile-about-img"
                loading="lazy"
              />
            </div>
          </div>

          <div className="col-lg-7 order-lg-2 right-size-about">
            <h2 className="py-2">{aboutData.heading}</h2>
            <p className="mb-4">{aboutData.description}</p>

            <div className="info-cards d-flex flex-wrap">
              {aboutData.infoCards?.map((card, index) => (
                <div key={index} className="info-card mb-4">
                  <div className="d-flex align-items-center mb-1">
                    <h3 className="me-3 one-two-icons">{card.icon}</h3>
                    <h3>{card.title}</h3>
                  </div>
                  <p className="m-0">{card.text}</p>
                </div>
              ))}
            </div>

            <div className="button-group d-flex gap-3 mt-3">
              <button onClick={handleDownload} className="btn-glass download-btn">
                Download CV
              </button>
              <button className="btn-glass contact-btn" onClick={() => handleNavClick("contact")}>
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="container">
        <div className="stats row" ref={ref}>
          {updatedStats.map((stat, index) => (
            <div key={index} className="stat-item col-6 col-lg py-4">
              <h3 className="stat-number">
                {inView ? (
                  <>
                    <CountUp
                      key={`${stat.label}-${inView}`}
                      start={0}
                      end={parseFloat(stat.value)}
                      duration={2}
                      decimals={stat.label.includes("Experience") ? 1 : 0}
                      separator=","
                    />
                    {stat.suffix}
                  </>
                ) : (
                  `0${stat.suffix}`
                )}
              </h3>
              <p className="stat-label mb-0">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
