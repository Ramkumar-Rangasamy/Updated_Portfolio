import React, { useState, useEffect, useMemo } from 'react';
import './Home.css';
import profileImage from '../../../../Assets/back.jpg';
import SetData from '../../../Data/SetData';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Home = () => {
  const { name, role, rolesall, homerightarrow } = useMemo(() => SetData.home, []);
  const [index, setIndex] = useState(0);

  // Auto-cycle through roles
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => (prev + 1) % rolesall.length);
    }, 2400);
    return () => clearInterval(interval);
  }, [rolesall]);

  // Smooth scroll to section
  const handleScrollTo = (id) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: 'smooth' });
  };

  //using Aos effective logic
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 120,
      easing: 'ease-in-out',
      once: false,
      mirror: true,
      anchorPlacement: 'top-bottom',
    });
  }, []);

  return (
    <section id="home" className="home-banner-01 d-flex align-items-center justify-content-center">
      <div className="container-lg">
        {/* Status Section */}
        <div className="home-availability-container text-center text-lg-start" data-aos="fade-down">
          <span className="home-status-dot" />
          <p className="home-status-text">Available for works</p>
          <p className="home-role-text">{rolesall[index]}</p>
        </div>

        <div className="row align-items-center gy-4 my-2">
          {/* Left Content */}
          <div className="col-lg-7 order-2 order-lg-1 mobileview-style">
            <h2 className="hs-hello" data-aos="fade-right">Hello,</h2>
            <h1 className="hs-name mb-4" data-aos="fade-left">I'm {name}</h1>
            <h4 className="hs-role mb-4 mb-lg-5" data-aos="fade-up">
              As a <span className="hs-role-span">{role}</span>, I specialize in building scalable, high-performance web applications that prioritize user experience and solve real-world problems.
            </h4>

            {/* CTA Buttons */}
            <div className="d-flex align-items-center gap-3 flex-wrap mobile-tyle-btn-btns" data-aos="zoom-in">
              <button onClick={() => handleScrollTo('about')} className="px-btn theme">
                <span>About Me</span>
                {homerightarrow}
              </button>
              <button onClick={() => handleScrollTo('portfolio')} className="px-btn theme">
                <span>See Portfolio</span>
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="col-lg-5 order-1 order-lg-2 text-center">
            <div className="profile-container mb-4" data-aos="fade-up">
              <img
                src={profileImage}
                alt="Profile"
                className="img-fluid profile-img"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
