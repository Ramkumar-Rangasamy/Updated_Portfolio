import React, { useState, useEffect } from 'react';
import "./App.css";
import { Helmet } from 'react-helmet';
import { Analytics } from '@vercel/analytics/react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from "react-router-dom";
import Dashboard from "./Components/Dashboard/Dashboard";
import Preloader from "./Components/Preloader/Preloader";

function App() {
  const [loading, setLoading] = useState(true);
  const [showWelcome, setShowWelcome] = useState(false);
  const [dontShowAgain, setDontShowAgain] = useState(false);

  useEffect(() => {
    const skipWelcome = localStorage.getItem('skipWelcomePopup') === 'true';

    // Simulate loading delay for demo; replace with real asset loading or event
    const timer = setTimeout(() => {
      setLoading(false);
      if (!skipWelcome) setShowWelcome(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleEnterSite = () => {
    if (dontShowAgain) {
      localStorage.setItem('skipWelcomePopup', 'true');
    }
    setShowWelcome(false);
  };

  if (loading) return <Preloader />;

  return (
    <>
      <Helmet>
        <title>Ramkumar Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:description" content="Explore my projects, skills, and experience as a Software  Developer." />
        <meta property="og:image" content="https://ramkumar-portfolio-xi.vercel.app/favicon.ico" />
        <meta property="og:url" content="https://ramkumar-portfolio-xi.vercel.app" />
        <meta property="og:type" content="website" />
      </Helmet>

      <BrowserRouter>
        {showWelcome ? (
          <div className="welcome-popup">
            <h2>Preloading Complete!</h2>
            <p>Thanks for waiting. Welcome to my portfolio.</p>

            <label style={{ display: 'block', marginBottom: '10px', cursor: 'pointer' }}>
              <input
                type="checkbox"
                checked={dontShowAgain}
                onChange={e => setDontShowAgain(e.target.checked)}
                style={{ marginRight: '8px' }}
              />
              Don't show this again
            </label>

            <button onClick={handleEnterSite}>Enter Site</button>
          </div>
        ) : (
          <Dashboard />
        )}
      </BrowserRouter>
      <Analytics />
    </>
  );
}

export default App;
