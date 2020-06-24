import React from 'react';
import { useHomeHook } from './hooks';
import SharedButton from '../../components/shared/SharedButton';

const Home = () => {
  const { logoutRequestHandler } = useHomeHook();

  return (
    <div>
      <div>This is home route</div>
      <SharedButton label="LogOut" onClick={logoutRequestHandler} />
    </div>
  );
};

export default Home;
