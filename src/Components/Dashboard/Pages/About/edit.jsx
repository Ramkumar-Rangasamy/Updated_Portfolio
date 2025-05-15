import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import './About.css';
import SetData from "../../../Data/SetData";

const About = () => {
  const { aboutData } = SetData;

  // Animate every time the stats section scrolls into view
  const { ref, inView } = useInView({
    triggerOnce: false, // re-trigger every time
    threshold: 0.3,
  });
    // 👉 handle scroll to section
  const handleNavClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="about-section">
      <div className="container-lg about-padding">
        <div className="row align-items-center g-5">
          <div className="col-lg-5 order-1 order-lg-1">
            <div className="d-flex flex-column align-items-center justify-content-center h-100">
              <img
                src={aboutData.image}
                alt="Profile"
                className="img-fluid profile-about-img"
                loading="lazy"
              />
            </div>
          </div>

          <div className="col-lg-7 order-2 order-lg-2 right-size-about">
            <h2>{aboutData.heading}</h2>
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

            <div className="d-flex gap-3 mt-3">
              <a
                href={aboutData.cv}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-glass download-btn"
              >
                Download CV
              </a>

              <button
                className="btn-glass contact-btn"
                onClick={() => handleNavClick('contact')}
              >
                Contact Us
              </button>
            </div>


          </div>
        </div>
      </div>

      {/* Scroll-triggered count up */}
      <div className="stats row" ref={ref}>
        {aboutData.stats?.map((stat, index) => (
            <div key={index} className="stat-item col-6 col-lg pb-4">
              <h3 className="stat-number text-center">
               {inView ? (
                  <>
                    <CountUp
                      key={stat.label + "-countup-" + inView} // key to reset animation
                      start={0}
                      end={stat.value}
                      duration={2}
                      separator=","
                    />
                   {stat.suffix}
                  </>
                ) : (
                  `0 ${stat.suffix}`
                )}

              </h3>
              <p className="stat-label mb-0">{stat.label}</p>
            </div>
        ))}
      </div>
    </section>
  );
};

export default About;
