import React, { useState } from 'react';
import axios from 'axios';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      const response = await axios.post('https://reqres.in/api/login', {
        email,
        password
      });
      console.log(response);
      setIsLoading(false);
      setError('');
    } catch (error) {
      console.error(error);
      setIsLoading(false);
      setError('An error occurred while logging in.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <p className="error">{error}</p>}
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </label>
      <br />
      <button type="submit" disabled={isLoading}>
        {isLoading ? 'Logging in...' : 'Log in'}
      </button>
    </form>
  );
}

export default LoginForm;
