import React from 'react';
import {
  Route,
  Switch,
  Redirect,
  BrowserRouter as Router
} from 'react-router-dom';
import { isTokensPresentLocalStorage } from '../utils/tokensHelper';
import {
  ROOT_ROUTE,
  LOGIN_ROUTE,
  HOME_ROUTE
} from '../utils/routesNavigationConstants';
import Landing from './Landing';
import PageNotFound from './PageNotFound';
import Login from './Login';
import Home from './Home';

const routesConfig = [
  {
    path: ROOT_ROUTE,
    component: Landing,
    name: 'Landing',
    exact: true,
    privateRoute: false
  },
  {
    path: LOGIN_ROUTE,
    component: Login,
    name: 'Login',
    exact: true,
    privateRoute: false
  },
  {
    path: HOME_ROUTE,
    component: Home,
    name: 'Home',
    exact: true,
    privateRoute: true
  }
];

const RoutesProtection = (props) => {
  const { component: Component, privateRoute, ...rest } = props;
  const isUserPresent = isTokensPresentLocalStorage();

  return (
    <Route
      {...rest}
      render={(props) => {
        if (privateRoute) {
          if (isUserPresent) {
            return <Component {...props} />;
          }

          return <Redirect to={LOGIN_ROUTE} />;
        } else {
          if (!isUserPresent) {
            return <Component {...props} />;
          }

          return <Redirect to={HOME_ROUTE} />;
        }
      }}
    />
  );
};

const AppRoutes = () => {
  return (
    <Router>
      <Switch>
        {routesConfig.map((config) => {
          return (
            <Route
              exact={config.exact}
              key={`${config.name}`}
              path={config.path}
              render={(props) => {
                return (
                  <RoutesProtection
                    component={config.component}
                    privateRoute={config.privateRoute}
                    {...props}
                  />
                );
              }}
            />
          );
        })}

        <Route path="*" render={() => <PageNotFound />} />
      </Switch>
    </Router>
  );
};

export default AppRoutes;
