import React from "react";
import './Header.css';
import { FaBars } from "react-icons/fa6";

const Header = ({ toggleSidebar }) => {
  return (
    <header className="header ">
      <h1 className="m-0">My Portfolio</h1>
      <FaBars className="menu-icon"  onClick={toggleSidebar} />
    </header>
  );
};

export default Header;
