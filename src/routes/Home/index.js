import React from 'react';
import { useHomeHook } from '../../hooks/homeHooks';

const Home = () => {
  const { logoutRequestHandler } = useHomeHook();

  return (
    <div>
      <div>This is login route</div>
      <button onClick={logoutRequestHandler}>LogOut</button>
    </div>
  );
};

export default Home;
