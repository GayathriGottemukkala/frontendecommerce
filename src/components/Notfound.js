// src/components/NotFound.js
import React from 'react';
  // We'll style the NotFound component in a separate CSS file
import notFoundImage from "../assests/notfound.jpg" // Import the image

const NotFound = () => {
  return (
    <div className="not-found">
      <img src={notFoundImage} alt="Not Found" className="not-found-img" />
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
    </div>
  );
};

export default NotFound;
