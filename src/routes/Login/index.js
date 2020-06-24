import React from 'react';
import { useLoginHook } from '../../hooks/loginHooks';

const Login = () => {
  const { signInRequestHandler } = useLoginHook();

  return (
    <div>
      <div>This is login route</div>
      <button onClick={signInRequestHandler}>Sign In</button>
    </div>
  );
};

export default Login;
