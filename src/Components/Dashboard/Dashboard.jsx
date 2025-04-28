import React, { useState, useEffect, useCallback, useMemo } from "react";
import './Dashboard.css';
import Sidebar from "./Sidebar/Sidebar";
import Header from "./Header/Header";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Features from "./Pages/Features/Features";
import Experience from "./Pages/Experience/Experience";
// Import other sections...

const Dashboard = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(() => window.innerWidth > 1200);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1200);
  const [activeSection, setActiveSection] = useState("home");

  // Memoize toggleSidebar to avoid re-creations
  const toggleSidebar = useCallback(() => setSidebarOpen(prev => !prev), []);

  // Memoize the handleResize function
  const handleResize = useMemo(() => {
    return () => {
      const isNowMobile = window.innerWidth <= 1200;
      if (isNowMobile !== isMobile) {
        setIsMobile(isNowMobile);
        setSidebarOpen(!isNowMobile);
      }
    };
  }, [isMobile]);

  // Debounced scroll event to optimize scroll performance
  const handleScroll = useCallback(() => {
    const sections = document.querySelectorAll("section");
    let current = "home";
    sections.forEach((section) => {
      const top = section.offsetTop - 100;
      if (window.scrollY >= top) {
        current = section.getAttribute("id");
      }
    });
    setActiveSection(current);

    // Update URL hash only when necessary
    if (window.location.hash !== `#${current}`) {
      window.history.pushState(null, "", `#${current}`);
    }
  }, []);

  useEffect(() => {
    // Add event listeners with cleanup
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    // Remove event listeners on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleResize, handleScroll]);

  // Reset URL hash on load (to clear any existing hash)
  useEffect(() => {
    if (window.location.hash) {
      window.history.pushState(null, "", window.location.pathname);
    }
  }, []);

  return (
    <div className="dashboard-container">
      <Sidebar
        isOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
        activeSection={activeSection}
        onNavigate={setActiveSection}
      />
      {isSidebarOpen && isMobile && <div className="overlay" onClick={toggleSidebar}></div>}

      <div className="main-content">
        {isMobile && <Header toggleSidebar={toggleSidebar} isHidden={isSidebarOpen} />}
        <div className="dashboard-content">
          <section id="home"><Home /></section>
          <section id="about"><About /></section>
          <section id="service"><Features /></section>
          <section id="experience"><Experience /></section>

          {/* Add other sections wrapped in <section id="..."> */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
