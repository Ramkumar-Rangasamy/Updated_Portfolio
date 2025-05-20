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
    title: 'csuite',
    image: csuite,
  },
   {
    id: 3,
    title: 'WowHR',
    image: WowHR,
  },
   {
    id: 4,
    title: 'CheapOair',
    image: CheapOair,
  },
   {
    id: 5,
    title: 'Architecture',
    image: Architecture,
  }, {
    id: 6,
    title: 'InventoryManagement',
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
    <section className="portfolio-section" id="portfolio">
      <div className="container-lg">
        <div className="title-container mb-4">
          <h2>Portfolio</h2>
          <p className="col-12 col-md-6">
            Explore a selection of my latest web development projects.
            With experience serving both local and global clients, I bring ideas to life through code and design.
          </p>
        </div>  

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
    </section>
  );
};

export default Portfolio;
