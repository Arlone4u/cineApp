import React, { useState } from 'react';
import axios from 'axios';

function LoginButton() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleClick = async () => {
    setIsLoading(true);

    try {
      const response = await axios.get('https://reqres.in/api/login');
      console.log(response);
      setIsLoggedIn(true);
      setIsLoading(false);
      setError('');
    } catch (error) {
      console.error(error);
      setIsLoading(false);
      setError('An error occurred while checking login status.');
    }
  };

  return (
    <>
      {error && <p className="error">{error}</p>}
      <button onClick={handleClick} disabled={isLoading}>
        {isLoading ? 'Checking login status...' : 'Check login status'}
      </button>
      {isLoggedIn && <p>You are logged in!</p>}
    </>
  );
}

export default LoginButton;
