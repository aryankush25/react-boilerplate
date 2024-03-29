import actionTypes from '../actionTypes';
import { getLocalStorageTokens } from '../../utils/tokensHelper';

const initialState = () => {
  const { userName, accessToken, refreshToken } = getLocalStorageTokens();

  return {
    userData: {
      userName,
      accessToken,
      refreshToken
    },
    loginSpinner: false
  };
};

export default function (state = initialState(), action = {}) {
  const { type, payload } = action;

  switch (type) {
    case actionTypes.USER_REQUEST: {
      return {
        ...state,
        loginSpinner: true
      };
    }
    case actionTypes.USER_SUCCESS: {
      return {
        ...state,
        userData: payload,
        loginSpinner: false
      };
    }
    case actionTypes.USER_FAILURE: {
      return {
        ...state,
        loginSpinner: false
      };
    }
    case actionTypes.LOGOUT:
      return initialState;

    default:
      return { ...state };
  }
}
