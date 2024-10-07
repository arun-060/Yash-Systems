import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [role, setRole] = useState('user'); // 'user' or 'admin'
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  // Define the admin email
  const adminEmail = 'admin@example.com';

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isLogin) {
      // Login logic
      if (email === adminEmail && role === 'admin') {
        console.log('Admin logged in');
        navigate('/admin-dashboard'); // Redirect to AdminDashboard for admin login
      } else {
        console.log('User logged in');
        navigate('/'); // Redirect to homepage for regular user login
      }
    } else {
      // Signup logic
      if (password !== confirmPassword) {
        alert("Passwords don't match");
        return;
      }
      console.log('User signed up:', { name, email });
      navigate('/'); // Redirect to homepage after signup
    }
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f7f7f7',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    width: '300px',
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
  };

  const inputStyle = {
    marginBottom: '15px',
    padding: '10px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    fontSize: '16px',
  };

  const buttonStyle = {
    padding: '10px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    fontSize: '16px',
    cursor: 'pointer',
  };

  const toggleButtonStyle = {
    marginTop: '10px',
    padding: '10px',
    backgroundColor: '#6c757d',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    fontSize: '16px',
    cursor: 'pointer',
  };

  return (
    <div style={containerStyle}>
      <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
      <div>
        <button onClick={() => { setRole('user'); setIsLogin(true); }} style={{ marginRight: '10px' }}>User Login</button>
        <button onClick={() => { setRole('admin'); setIsLogin(true); }}>Admin Login</button>
      </div>
      <form onSubmit={handleSubmit} style={formStyle}>
        {!isLogin && (
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={inputStyle}
          />
        )}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={inputStyle}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={inputStyle}
        />
        {!isLogin && (
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            style={inputStyle}
          />
        )}
        <button type="submit" style={buttonStyle}>{isLogin ? 'Login' : 'Sign Up'}</button>
      </form>
      <button onClick={() => setIsLogin(!isLogin)} style={toggleButtonStyle}>
        {isLogin ? 'Go to Sign Up' : 'Go to Login'}
      </button>
    </div>
  );
}

export default AuthPage;
