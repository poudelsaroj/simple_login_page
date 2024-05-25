import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './loginpage.css';

// Mock JSON data for credentials
import credentials from './credentials.json';

const Loginpage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    const user = credentials.find(cred => cred.username === username && cred.password === password);
    if (user) {
      // If credentials are correct, navigate to the homepage
      navigate('/home');
    } else {
      // If credentials are incorrect, show error message
      setError('Invalid username or password');
    }
  };

  return (
    <>
      <div className="header">Login Page</div>
      <div className='login'>
        <div>
          <div className="username">
            <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
          </div>
          <div className="password">
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
        </div>
        <div className="login">
          <button onClick={handleLogin}>Login</button>
          {error && <div className="error">{error}</div>}
        </div>
      </div>
    </>
  );
};

export default Loginpage;



