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
    title: 'MedxBay – Healthcare Web Application',
    image: medxbay,
    TechStack:"MERN (MongoDB, Express.js, React.js, Node.js)",
    Overview:"MedxBay is a feature-rich, responsive healthcare platform designed for doctors, hospitals, and medical suppliers. The platform connects healthcare providers with users to streamline access to medical services and resources.",
    KeyFeatures:`- Frontend Development: Developed a responsive and user-friendly UI that ensures smooth navigation and usability across devices.
    - Automated Meeting System: Implemented automated scheduling and meeting features for doctors and patients.
    - Provider Profiles: Designed and integrated detailed profiles for doctors and hospitals.
    - Subscription & Booking Flow: Built intuitive subscription models and appointment booking functionalities.
    - Condition Library: Contributed to a searchable condition library to enhance user education and provider reference.
    - Integrated chatbot to handle platform-related user queries.
    - Chatbot Integration: Created a chatbot to assist users with platform-related queries and improve customer support experience.
    - Performance Optimization: Ensured high-performance frontend rendering and seamless user interaction.`,

  },
   {
    id: 2,
    title: 'C-SUITE ACADEMY ',
    image: csuite,
    TechStack:"MERN (MongoDB, Express.js, React.js, Node.js)",
    Overview:"C-SUITE ACADEMY is a digital learning and leadership platform tailored for top-level executives and professionals aiming to enhance their strategic, operational, and leadership capabilities. Leveraging modern web technologies, the platform provides scalable, user-centric, and secure access to high-quality educational resources.",
    KeyFeatures:`-Secure login/signup with JWT and Role-based access (Admin, Mentor, Learner).
    -Video lessons, quizzes, downloadable resources and Progress tracking per course.
    -Calendar-based webinar scheduling and Zoom/Google Meet API integration for live sessions.
    -Insights on user progress, course popularity, and engagement Admin dashboard for managing content and users.
    -Direct messaging/chat and Session booking and feedback system.
    -Seamless experience across desktops, tablets, and mobile devices.
    -Admin panel to add/edit courses, upload resources, and manage mentors.
    -Real-time updates on course status, new content, and session reminders.
    -Stripe/PayPal integration for purchasing premium content or subscriptions.`,
  },
   {
    id: 3,
    title: 'WoW HR Project',
    image: WowHR,
    TechStack:"MERN (MongoDB, Express.js, React.js, Node.js)",
    Overview:"WoW HR (World of Work Human Resources) is a modern, interactive HR platform designed to bring together HR professionals, thought leaders, and learners across industries. It offers a centralized hub for knowledge sharing, certification, networking, and career growth. The platform celebrates innovation in HR by providing tools, content, and community to advance human resource practices globally.",
    KeyFeatures:`-Manual login via email and password and Social login with LinkedIn OAuth integration.
    -Users can enroll in certified HR programs and Automatic certificate generation upon course completion,Certificates can be downloaded and shared on LinkedIn.
    -Badge system to showcase "Proud WoW HR Member, Verified profiles get a public badge on their dashboard and profile.
    -Option to display badges on LinkedIn and digital resumes.
    -Personalized dashboard showing enrolled courses, certificates, events.
    -HR toolkit: ready-made templates, policy documents, case studies.
    -Webinar & event registration with calendar integration.
    -Access to expert sessions and live Q&A, Real-time alerts for upcoming sessions, new certifications, and news.
    -Integrated chat support,FAQ and help articles for self-service.`
  },
   {
    id: 4,
    title: 'CheapOair Flight Booking Application',
    image: CheapOair,
    TechStack:"MySQL, Express.js, React.js, Node.js",
    Overview:"The CheapOair Flight Booking Application is a custom-built flight booking system designed to provide a seamless and efficient experience for users to search, compare, and book flights. It is not a clone, but an original implementation tailored to offer essential booking features, secure payment, and admin-level management with a clean UI and performance-optimized backend.",
    KeyFeatures:`-Real-time flight search across domestic and international routes.
    -Smart filters for airline, duration, stops, price range, and departure times.
    -Manual registration/login and Password encryption with bcrypt and session/token handling via JWT.
    -Multi-step flight booking wizard,Passenger info, seat selection, add-ons.
    -Secure backend validation of availability and pricing.
    -Flight listings management (CRUD), View/manage all bookings, user analytics, revenue.
    -Block suspicious users, add offers/coupons,
    -Users receive certified booking confirmation.
    -Built with React.js and Bootstrap, Optimized for mobile, tablet, and desktop users.
    -Role-based access for admin and users, HTTPS setup and security headers for production.`

  },
   {
    id: 5,
    title: 'Architecture-blueprints-AI',
    image: Architecture,
    TechStack:"MySQL, Express.js, React.js, Node.js",
    Overview:"Architecture Blueprints AI is an intelligent web application designed to assist architects, designers, and civil engineers in generating, managing, and visualizing architectural blueprints with AI support. It blends AI-assisted design recommendations with a robust blueprint management system, enabling professionals to optimize layout planning, resource estimation, and structural compliance in real-time.The platform provides a collaborative environment for design teams, allows users to store and retrieve blueprint data from a relational database (MySQL), and uses modern UI/UX principles to ensure efficiency in project workflows.",
    KeyFeatures:`-Generate layout suggestions based on input dimensions, room types, and structural preferences.
    -AI recommendations for space optimization and energy-efficient designs.
    -Drag-and-drop components (walls, doors, windows, etc.).
    -Auto-saving of blueprint drafts with versioning.
    -Structured storage of users, blueprints, assets, and configurations.
    -Query-optimized backend for fast blueprint retrieval and modifications.
    -Upload blueprints (PDF, CAD, SVG),Categorize by type, version, client, or project phase.
    -Downloadable and printable outputs, Auto-generated material lists from blueprint data.
    -Real-time cost calculator based on region and quantity.
    -Works across desktop, tablet, and mobile devices.
    -Built with React.js and styled using Bootstrap`

  }, {
    id: 6,
    title: 'Inventory Management Web Application',
    image: InventoryManagement,
    TechStack:"MySQL, Express.js, React.js, Node.js",
    Overview:"The Inventory Management Web Application is a full-stack solution designed to help businesses efficiently manage their stock, monitor product levels, and track orders in real-time. The application supports multi-role access, category-wise stock control, and real-time inventory updates.With a clean, user-friendly React interface and a robust backend powered by Express and MySQL, it ensures secure, scalable inventory management for SMEs, warehouses, and retailers.",
    KeyFeatures:`-Add, update, and delete products with dynamic stock tracking.
    -Categorization of items (SKU, product name, quantity, supplier, price).
    -Automatic low-stock alerts and restock indicators.
    -Manage purchase and sales orders.
    -Track delivery status and order history.
    -Filter by quantity, date added, supplier, or status.
    -Track every update, user, timestamp, and change reason.
    -Built with React.js using Bootstrap.
    -Fully responsive and optimized for mobile, tablet, and desktop.`

  },
  // Add more projects if needed
];

const Portfolio = () => {
  const [selectedImage, setSelectedImage] = useState(null);

   const openModal = (project) => {
    setSelectedImage(project);
  };

  const closeModal = () => {
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
                    <h6  onClick={() => openModal(project)}>View Portfolio</h6>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {selectedImage && (
          <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <span className="close-button" onClick={closeModal}>&times;</span>
              <div className="modal-body">
                <div className="modal-left">
                   <h3>{selectedImage.title}</h3>
                  <img src={selectedImage.image} alt={selectedImage.title} />
                 
                </div>
                <div className="modal-right">
                  <p><strong>Technologies Used:</strong> {selectedImage.TechStack}</p>
                  <p><strong>Overview:</strong> {selectedImage.Overview}</p>
                  {selectedImage.KeyFeatures && (
                    <div className="all-project-desc">
                      <span><strong>Key Features & Contributions:</strong></span>
                      <ul className="key-features-list">
                        {selectedImage.KeyFeatures.split('\n').map((feature, index) => (
                          <li key={index}>{feature.trim()}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default Portfolio;
