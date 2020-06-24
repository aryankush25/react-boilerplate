import { isPresent } from './helper';

export const setLocalStorageTokens = (tokens) => {
  const { userName, accessToken, refreshToken } = tokens;

  window.localStorage.setItem('userName', userName);
  window.localStorage.setItem('accessToken', accessToken);
  window.localStorage.setItem('refreshToken', refreshToken);
};

export const getLocalStorageTokens = () => {
  const userName = window.localStorage.getItem('userName') || '';
  const accessToken = window.localStorage.getItem('accessToken') || '';
  const refreshToken = window.localStorage.getItem('refreshToken') || '';

  return { userName, accessToken, refreshToken };
};

export const isTokensPresentLocalStorage = () => {
  const { userName, accessToken, refreshToken } = getLocalStorageTokens();

  return (
    isPresent(userName) && isPresent(accessToken) && isPresent(refreshToken)
  );
};

export const clearLocalStorage = () => {
  localStorage.clear();
};
