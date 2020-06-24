import { createBrowserHistory } from 'history';

export const navigateTo = (route) => {
  let history = createBrowserHistory();

  history.go(route);
};
