import React from 'react';
import { useLoginHook } from './hooks';
import SharedButton from '../../components/shared/SharedButton';

const Login = () => {
  const { signInRequestHandler } = useLoginHook();

  return (
    <div>
      <div>This is login route</div>
      <SharedButton label="Sign In" onClick={signInRequestHandler} />
    </div>
  );
};

export default Login;
