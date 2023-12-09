'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import {useRouter} from "next/router";

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [loginStatus,setLoginStatus]=useState(false);

  const router=useRouter();
  useEffect(()=>{
    localStorage.setItem('loginStatus',loginStatus);
  },[loginStatus]);

  const handleEmailChange=(e)=>{
    setEmail(e.target.value);
  }

  const handlePassChange=(e)=>{
    setPassword(e.target.value);
  }

  const handleSubmitChange=(e)=>{
    e.preventDefault();
    if (email.length < 1 || password.length < 1) {
      setError(true);
    } else {
      localStorage.setItem('user', JSON.stringify({ email, password }));
      setLoginStatus(true);
      setError(false);
      setEmail('');
      setPassword('');
      router.push('/login');
    }
  };

  return (
    <div className='register'>
      <h2>Register</h2>
      <form className='sign-up-form' onSubmit={handleSubmitChange}>
        {error &&
        <p className='error-para'>"Email or password isn't entered!"</p>}
        <div className='email-div'>
          <label htmlFor='email'>Email: </label>
          <input type='email' id='email'value={email} onChange={handleEmailChange}/>
        </div>
        <div className='password-div'>
          <label htmlFor='password'>Password: </label>
          <input type='password' id='password' value={password} onChange={handlePassChange}/>
        </div>
        <button type='submit' className='register-btn'>
          Register
        </button>
      </form>
      <div>
        Already have an account?
        <Link href='/login'>
          <button className='login-link'>Login</button>
        </Link>
      </div>
    </div>
  );
}

export default Register;
