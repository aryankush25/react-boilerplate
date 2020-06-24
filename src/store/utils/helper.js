import { createBrowserHistory } from 'history';
let history = createBrowserHistory();

export const navigateTo = (route) => {
  history.go(route);
};
