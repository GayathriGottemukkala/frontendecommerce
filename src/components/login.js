import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 

const LoginPage = () => {
  // State to store email and password
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); 
  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();  // Prevent page reload on form submit
    setLoading(true);     // Show loading state
    setError(null);       // Reset error

    const credentials = { email, password };

    try {
      const response = await fetch("https://e-commerce-ong6.onrender.com/api/auth/login", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });

      if (!response.ok) {
        throw new Error('Invalid login credentials');
      }

      const data = await response.json();
      console.log('Login successful:', data);
      // Handle success: Redirect or save the token
      alert('Login successful!');
      navigate('/'); 
      // e.g., redirect user to a dashboard
    } catch (error) {
      setError(error.message);  // Set error message if login fails
    } finally {
      setLoading(false); // Hide loading state
    }
  };

  return (
 
    <div className="login-container" >
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
        </div>

        {error && <div className="error-message">{error}</div>}
<p> If you dont have account <a href="/Register">Create Account</a></p>
        <button type="submit" disabled={loading}>
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </form>
    </div>

  );
};

export default LoginPage;
