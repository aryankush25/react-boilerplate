import React from 'react';
import { Redirect } from 'react-router-dom';
import { isTokensPresentLocalStorage } from '../services/utils/helper';
import { HOME_ROUTE, LOGIN_ROUTE } from '../utils/routesNavigationConstants';

const Landing = () => {
  if (isTokensPresentLocalStorage()) {
    return <Redirect to={HOME_ROUTE} />;
  }

  return <Redirect to={LOGIN_ROUTE} />;
};

export default Landing;
