import React, { useState } from 'react';
import useAuth from './useAuth';
import './loginpage.css';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login, error } = useAuth();

  const handleLogin = (e) => {
    e.preventDefault();
    login(username, password);
  };

  return (
    <div>
      <div className="header">
        <h2>Login</h2>
      </div>
      <div className="login">
        <div>
          <form onSubmit={handleLogin}>
            <div className="username">
              <input 
                type="text" 
                placeholder="Username" 
                value={username} 
                onChange={(e) => setUsername(e.target.value)} 
              />
            </div>
            <div className="password">
              <input 
                type="password" 
                placeholder="Password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
              />
            </div>
            <button type="submit">Login</button>
          </form>
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
