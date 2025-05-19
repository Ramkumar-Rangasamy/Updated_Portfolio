import React from "react";
import SetData from "../../../Data/SetData";
import "./Features.css"; // optional for enhancements like animation or theme

const Features = () => {
  const { FeaturesDatas } = SetData;

  return (
    <section className="features-section" id="service">
      <div className="container-lg">
        <div className="title-container  mb-4">
          <h2>What I Provide To My Client</h2>
          <p className="col-12 col-md-6">
            MERN Stack Web Developer focused on building scalable, high-performance web applications with seamless user experiences.
          </p>

        </div>

        <div className="row g-4 justify-content-center">
          {FeaturesDatas.map((feature, index) => (
            <div
              className="col-12 col-sm-6 col-md-6 col-lg-4 padding-0-css"
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="feature-card card h-100 border-0 p-3 p-sm-3 p-md-4 shadow-sm">
                <div className="icon-wrapper">
                  <div className="icon-shadow"></div>
                  <div className="icon-image">
                    {feature.icon}
                  </div>
                </div>
                <h5>{feature.title}</h5>
                <p>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
};

export default Features;
