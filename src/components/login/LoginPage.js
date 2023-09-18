import React, { useState } from 'react';

function LoginPage(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSignInClick = () => {
    // Perform validation on email and password fields
    if (email !== '' && password !== '') {
      // Navigate to the dashboard page
      props.history.push('/dashboard');
    } else {
      alert('Please enter a valid email and password');
    }
  };

  return (
    <div className="login-page">
      <h1>Sign In</h1>
      <div className="form-group">
        <label>Email</label>
        <input type="email" value={email} onChange={handleEmailChange} required />
      </div>
      <div className="form-group">
        <label>Password</label>
        <input type="password" value={password} onChange={handlePasswordChange} required />
      </div>
      <button onClick={handleSignInClick}>Sign In</button>
    </div>
  );
}

export default LoginPage;