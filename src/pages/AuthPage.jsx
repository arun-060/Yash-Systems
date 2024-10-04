import React, { useState } from 'react';

function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Define the admin email
  const adminEmail = 'admin@example.com';

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (isLogin) {
      // Login logic
      if (email === adminEmail) {
        console.log('Admin logged in');
        window.location.href = '/admin-dashboard'; // Redirect to admin dashboard
      } else {
        console.log('Customer logged in');
        window.location.href = '/'; // Redirect to homepage for customers
      }
    } else {
      // Signup logic
      if (password !== confirmPassword) {
        alert("Passwords don't match");
        return;
      }
      console.log('User signed up:', { name, email });
      // Handle the signup logic (e.g., send data to server)
      window.location.href = '/'; // Redirect to homepage after signup
    }
  };

  return (
    <div className="auth-container">
      {/* Authentication form code remains the same */}
    </div>
  );
}

export default AuthPage;
