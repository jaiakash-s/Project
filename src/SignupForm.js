// SignupForm.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignupForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();

    if (!username || !password || !confirmPassword) {
      setError('Please fill in all fields.');
    } else if (password !== confirmPassword) {
      setError('Passwords do not match.');
    } else {
      setError('');
      console.log(`Signing up with username: ${username} and password: ${password}`);
      // Add your signup logic here (e.g., API request, validation, etc.)
    }
  };

  return (
    <div className="form-container">
      <h2>Signup</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSignup}>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <label>
          Confirm Password:
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </label>
        <br />
        <button type="submit"><Link to="/">Signup</Link></button>
      </form>
      <p>
        Already have an account?{' '}
        <Link to="/LoginForm">Login</Link>
      </p>
    </div>
  );
};

export default SignupForm;
