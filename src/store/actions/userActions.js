import actionTypes from '../actionTypes';

export const requestUserRequest = (userName, password) => {
  return {
    type: actionTypes.USER_REQUEST,
    payload: { userName, password }
  };
};

export const requestUserSuccess = (data) => {
  return {
    type: actionTypes.USER_SUCCESS,
    payload: data
  };
};

export const requestUserFailure = () => {
  return { type: actionTypes.USER_FAILURE, payload: {} };
};

export const startLogout = () => {
  return {
    type: actionTypes.LOGOUT
  };
};
