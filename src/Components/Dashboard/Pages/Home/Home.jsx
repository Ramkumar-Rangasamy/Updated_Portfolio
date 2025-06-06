import React, { useState, useEffect, useMemo } from 'react';
import './Home.css';
import profileImage from '../../../../Assets/back.jpg';
import SetData from '../../../Data/SetData';



const Home = () => {
  const { name, role, rolesall,homerightarrow } = useMemo(() => SetData.home, []);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => (prev + 1) % rolesall.length);
    }, 2400);

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, [rolesall]);

  useEffect(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  });

  const elements = document.querySelectorAll(".animate");
  elements.forEach((el) => observer.observe(el));

  return () => elements.forEach((el) => observer.unobserve(el));
}, []);

  // 👉 handle scroll to section
  const handleNavClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="/" className="home-banner-01 d-flex align-items-center justify-content-center">
      <div className="container-lg">
        <div className="home-availability-container">
          <span className="home-status-dot" />
          <p className="home-status-text">Available for works</p>
          <p className="home-role-text">{rolesall[index]}</p>
        </div>

        <div className="row align-items-center gy-lg-5 gy-sm-4 my-2 animate">

          {/* Left column (Text and buttons) */}
          <div className="col-lg-7   order-2 order-lg-1 mobileview-style animate">
            <h2 className='hs-hello'>Hello,</h2>
            <h1 className="hs-name mb-4">I'm {name}</h1>
            <h4 className="hs-role mb-lg-5 mb-sm-4 mb-4">
              As a <span className="hs-role-span">{role}</span> I specialize in crafting scalable, high-performance web applications that prioritize user experience and solve real-world problems.
            </h4>

            <div className='d-flex align-items-center mobile-tyle-btn-btns'>
              <div className="btn-bar">
                <button onClick={() => handleNavClick('about')} className="px-btn theme">
                  <span>About Me</span>
                  {homerightarrow}
                </button>
              </div>

              <div className="btn-bar">
                <button onClick={() => handleNavClick('portfolio')} className="px-btn theme">
                  <span>See Portfolio</span>
                </button>
              </div>
            </div>

          </div>

          {/* Right column (Profile image) */}
          <div className="col-lg-5 order-1 order-lg-2 animate ">
            <div className="d-flex flex-column align-items-center justify-content-center h-100">
              <div className="profile-container mb-4">
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
      </div>
    </section>
  );
};

export default Home;
