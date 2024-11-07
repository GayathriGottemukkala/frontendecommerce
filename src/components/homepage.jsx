import React, { useState } from "react";
import "./home.css"

// Navbar Component
import Navbar from "./Navbar.js";
// Footer Component
import Footer from "./Footer.jsx";
// Main Content Component
import MainContent from "./MainContent.js";

function HomePage() {
  return (
    <div className="App">
      <Navbar />
      <MainContent />
      <Footer />
    </div>
  );
};

export default HomePage;
