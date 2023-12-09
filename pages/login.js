'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Login = () => {
  const router=useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  // const [isLogIn, setIsLogIn] = useState(false);

  const handleEmailChange=(e)=>{
    setEmail(e.target.value);
  }
  const handlePassChange=(e)=>{
    setPassword(e.target.value);
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    if (email.length < 1 || password.length < 1) {
      setError(true);
    } else {
      const user = JSON.parse(localStorage.getItem('user'));
      if (user && user.email === email && user.password === password) {
        setError(false);
        setEmail('');
        setPassword('');
        localStorage.setItem('loginStatus', 'true'); // Update the key to 'loginStatus'
        router.push('/store');
      } else {
        setError(true);
      }
    }
  };
  return (
    <div className='login'>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        {error && <p className='error-para'>"Email or password is invalid"</p>}
        <div className='email-div'>
          <label htmlFor='email'>Email: </label>
          <input type='email' id='email' value={email} onChange={handleEmailChange} />
        </div>
        <div className='password-div'>
          <label htmlFor='password'>Password: </label>
          <input type='password' id='password' value={password} onChange={handlePassChange} />
        </div>
        <button type='submit' className='login-btn'>
          Log In
        </button>
      </form>
      <div>
        Don't have an account?
        <Link href='/'>
          <button className='register-link'>Register</button>
        </Link>
      </div>
    </div>
  );
};

export default Login;
