import actionTypes from '../actionTypes';

export const requestUserRequest = (data) => {
  return {
    type: actionTypes.USER_REQUEST,
    payload: data
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
