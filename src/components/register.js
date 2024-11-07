import React, { useState } from 'react';
import axios from 'axios';
import './Register.css';  // Importing the CSS for styling

const Register = () => {
  // States for user input and response messages
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [loading, setLoading] = useState(false);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Show loading indicator

    try {
      // Send POST request to backend register route
      const response = await axios.post('https://e-commerce-ong6.onrender.com/api/auth/register', {
        email,
        password,
      });

      // On success, show the success message
      setSuccessMessage(response.data.message);
      setErrorMessage('');
      setEmail(''); // Clear the email field
      setPassword(''); // Clear the password field
    } catch (error) {
      // Handle error from backend (e.g., email already exists)
      setErrorMessage(error.response?.data?.message || 'Registration failed');
      setSuccessMessage('');
    }

    setLoading(false); // Hide loading indicator
  };

  return (
    <div className="register-container">
      <form className="register-form" onSubmit={handleSubmit}>
        <h2>Register</h2>

        {/* Error and success messages */}
        {errorMessage && <p className="error">{errorMessage}</p>}
        {successMessage && <p className="success">{successMessage}</p>}

        <div>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Enter your email"
          />
        </div>

        <div>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Enter your password"
          />
        </div>

        <p> If you already have an account <a href="/login">Login</a></p>
        <button type="submit" disabled={loading}>
          {loading ? 'Registering...' : 'Register'}
        </button>
      </form>
    </div>
  );
};

export default Register;
