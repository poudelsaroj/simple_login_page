import React from 'react';
import { useNavigate } from 'react-router-dom';
import './homepage.css';

const HomePage = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('authenticated');
    navigate('/');
  };

  return (
    <div>
      <div>
        <h2>Welcome, Om Bahadur Chettri.</h2>
      </div>
      <div className="congrats">Congratulations Om Bahadur for Lieutenant post.</div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default HomePage;
