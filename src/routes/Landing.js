import React from 'react';
import { Redirect } from 'react-router-dom';
import { isPresentLocalStorageTokens } from '../utils/tokensHelper';
import { HOME_ROUTE, LOGIN_ROUTE } from '../utils/routesConstants';

const Landing = () => {
  if (isPresentLocalStorageTokens()) {
    return <Redirect to={HOME_ROUTE} />;
  }

  return <Redirect to={LOGIN_ROUTE} />;
};

export default Landing;
