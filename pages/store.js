import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
function Store() {
  const router =useRouter();
  useEffect(() => {
    if (localStorage.getItem('loginStatus') !== 'true') {
      router.replace('/login');
    }
  }, []);


const handelLogout = () => {
  localStorage.setItem('loginStatus', 'false');
  router.replace('/login'); // Use replace instead of push
};

  return (
    <div className='store'>
      <h2>Welcome to the store!</h2>
      <button className='logout-btn'onClick={handelLogout}>Logout</button>
    </div>
  );
}

export default Store;
