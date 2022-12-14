import React, { useState } from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom';
import '../CSS/login.css';

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
    <div className='login'>
      <h1>Login</h1>
      <p>input your credentials to proceed to checkout.</p>
    <form className='form' onSubmit={handleSubmit}>
      {error && <p className="error">{error}</p>}
      <label>
        <input
          className='input'
            data-testid="email"
          type="email"
          value={email}
          placeholder="email"
          onChange={(event) => setEmail(event.target.value)}
        />
      </label>
      <br />
      <label>
        <input
          className='input'
            data-testid="password"
          type="password"
          value={password}
          placeholder="password"
          onChange={(event) => setPassword(event.target.value)}
        />
      </label>
      <br/>
      <button type="submit" data-testid="loginbtn" disabled={isLoading} onClick={handleOnClick}>
        {isLoading ? 'Logging in...' : 'Log in'}
      </button>
    </form>
    </div>
  );
}

export default LoginForm;
