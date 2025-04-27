import React, { useCallback } from "react";
import "./Sidebar.css";
import { sidebarItems } from "../../Data/SetData";
import { IoClose } from "react-icons/io5";
import { BsFillRSquareFill } from "react-icons/bs";

const Sidebar = React.memo(({ isOpen, toggleSidebar, activeSection, onNavigate }) => {
  // Memoize handleNavClick to prevent unnecessary re-creations
  const handleNavClick = useCallback((id) => {
    // Scroll to the section smoothly
    const targetSection = document.getElementById(id);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }

    // Update active section
    onNavigate(id);

    // Close sidebar if in mobile view
    if (window.innerWidth <= 1200) toggleSidebar();

    // Update the URL hash based on the section clicked
    const newHash = id === "home" ? window.location.pathname : `#${id}`;
    if (window.location.hash !== newHash) {
      window.history.pushState(null, "", newHash);
    }
  }, [onNavigate, toggleSidebar]);

  return (
    <aside className={`sidebar ${isOpen ? "open" : ""}`}>
      {/* Logo / Header */}
      <div className="sidebar-header">
        <IoClose className="close-icon"size={25} onClick={toggleSidebar} />
      </div>

      <div className="logo-container mt-4">
        <BsFillRSquareFill className="r-icons-style"/>
        <h2>Ram Rangaraj</h2>
      </div>

      {/* Sidebar Nav Items */}
      <ul className="sidebar-menu">
        {sidebarItems.map(({ id, label, icon: Icon }) => (
          <li
            key={id}
            className={`sidebar-item ${activeSection === id ? "active" : ""}`}
            onClick={() => handleNavClick(id)} // Call the updated and memoized function
          >
            <span className="sidebar-items-icons">
              <Icon size="1.2rem" />
            </span>
            <span className="sidebar-items-label">{label}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
});

export default Sidebar;
