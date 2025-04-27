import React from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from "react-router-dom"; // Import BrowserRouter for routing
import Dashboard from "./Components/Dashboard/Dashboard"; // Your Dashboard component

function App() {
  return (
    <BrowserRouter>  {/* Wrap your app with BrowserRouter */}
      <div className="bg-effect">
        <Dashboard />
      </div>
    </BrowserRouter>
  );
}

export default App;
