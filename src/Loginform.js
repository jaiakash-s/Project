// LoginForm.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './LoginForm.css';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    if (!username || !password) {
      setError('Please enter both username and password.');
    } else {
      setError('');
      console.log(`Logging in with username: ${username} and password: ${password}`);
    }
  };

  return (
    <div className="form-container">
      <h2>Login</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleLogin}>
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
        <button type="submit"><Link to="/">Login</Link></button>
      </form>
      <p>
        Don't have an account?{' '}
        <Link to="/SignupForm">Signup</Link>
      </p>
    </div>
  );
};

export default LoginForm;
