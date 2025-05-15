import React, { useState } from 'react';
import './Portfolio.css';
import medxbay from '../../../../Assets/Medxbay.png';
import csuite from '../../../../Assets/c-suite.png';
import WowHR from '../../../../Assets/WowHR.png';
import CheapOair from '../../../../Assets/CheapOair.png';
import Architecture from '../../../../Assets/Architecture-blueprints-AI.png';
import InventoryManagement from '../../../../Assets/Inventory-Management.png';

const portfolioItems = [
  {
    id: 1,
    title: 'medxbay',
    image: medxbay,
  },
   {
    id: 2,
    title: 'medxbay',
    image: csuite,
  },
   {
    id: 3,
    title: 'medxbay',
    image: WowHR,
  },
   {
    id: 4,
    title: 'medxbay',
    image: CheapOair,
  },
   {
    id: 5,
    title: 'medxbay',
    image: Architecture,
  }, {
    id: 6,
    title: 'medxbay',
    image: InventoryManagement,
  },
  // Add more projects if needed
];

const Portfolio = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openPopup = (project) => {
    setSelectedImage(project);
  };

  const closePopup = () => {
    setSelectedImage(null);
  };

  return (
    <div className="portfolio-area container" id="portfolio">
      <h2 className="section-title">Portfolio</h2>
      <p className="portfolio-description">
        Explore a selection of my latest web development projects.<br />
        I specialize in crafting clean, responsive, and user-focused websites and applications.<br />
        With experience serving both local and global clients, I bring ideas to life through code and design.
      </p>

      <div className="row">
        {portfolioItems.map((project) => (
          <div
            key={project.id}
            className="col-lg-4 col-md-6 portfolio-grid-item all photography"
          >
            <div
              className="portfolio-item"
             
            >
              <img src={project.image} alt={project.title} />
              <div className="portfolio-img-overlay">
                <div className="portfolio-content">
                  <h4>{project.title}</h4>
                  <h6  onClick={() => openPopup(project)}>View Portfolio</h6>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="popup-modal" onClick={closePopup}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage.image} alt={selectedImage.title} />
            <h3>{selectedImage.title}</h3>
            <button className="close-btn" onClick={closePopup}>×</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
