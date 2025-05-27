import React from 'react';
import './Preloader.css';
import { BsFillRSquareFill } from "react-icons/bs";

const Preloader = () => {
  return (
    <div className="preloader">
        <div className="preloader-sub-content">
            <BsFillRSquareFill className="preloader-r-icon-style" />
            <h2>Ram Rangaraj</h2>
        </div>    
        <div className="spinner"></div>
    </div>
  );
};

export default Preloader;
