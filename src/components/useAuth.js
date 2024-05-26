import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const useAuth = () => {
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const login = async (username, password) => {
    try {
      const response = await fetch('/credentials.json');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const credentials = await response.json();

      const user = credentials.find(
        (cred) => cred.username === username && cred.password === password
      );

      if (user) {
        localStorage.setItem('authenticated', 'true');
        navigate('/home');
      } else {
        setError('Invalid username or password');
      }
    } catch (error) {
      console.error('Error fetching credentials:', error);
      setError('Error logging in. Please try again later.');
    }
  };

  return { login, error };
};

export default useAuth;
