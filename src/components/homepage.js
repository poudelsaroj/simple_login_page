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
      <div className="footer">
      <button className="logout" onClick={handleLogout}>Logout</button>

      </div>
    </div>
  );
};

export default HomePage;
