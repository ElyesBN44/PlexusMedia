import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (values) => {
    try {
      const res = await axios.post('http://localhost:4000/auth/login', values);
      console.log('res =>', res.data.token);
      await localStorage.setItem('token', res.data.token);
      navigate('/app/privateRoute');
    } catch (err) {
      console.log(err);
      setError('Invalid email or password'); 
    }
  };

  const closeErrorPopup = () => {
    setError('');
  };

  return (
    <div className="body">
      <div className="container">
        <h1>Login</h1>
        <h2>mar7be , 7el kontouk </h2>
        <form className="form" action="#">
          {/* ... Your existing code ... */}
          <fieldset className="form-fieldset ui-input __second">
            <input
              type="email"
              id="email"
              tabIndex={0}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label>
              <span data-text="E-mail Address">E-mail Address</span>
            </label>
          </fieldset>

          <fieldset className="form-fieldset ui-input __fourth">
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label>
              <span data-text="Repeat New Password">Password</span>
            </label>
          </fieldset>

          <div className="form-footer">
            <button
              className="btn"
              type="button"
              onClick={() => handleLogin({ email, password })}
            >
              Haya Logi
            </button>
          </div>
        </form>
      </div>
      {/* Error Popup */}
      {error && (
        <div className="error-popup">
          <p>{error}</p>
          <button onClick={closeErrorPopup}>Close</button>
        </div>
      )}
    </div>
  );
};

export default Login;
