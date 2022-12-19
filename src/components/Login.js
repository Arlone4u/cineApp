import React, { useState } from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const history = useHistory();
  const handleOnClick = () => history.push('/');

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
            data-testid="email"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </label>
      <br />
      <label>
        Password:
        <input
            data-testid="password"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </label>
      <br/>
      <button type="submit" data-testid="logi" disabled={isLoading} onClick={handleOnClick}>
        {isLoading ? 'Logging in...' : 'Log in'}
      </button>
    </form>
  );
}

export default LoginForm;
