import { takeLatest, delay, put } from 'redux-saga/effects';
import actionTypes from '../actionTypes';
import { requestUserSuccess, requestUserFailure } from '../actions/userActions';
import {
  setLocalStorageTokens,
  clearLocalStorage
} from '../../services/utils/helper';

function* fetchUserAsync(action) {
  try {
    const {
      payload: { userName, password }
    } = action;

    console.log({ userName, password });

    // Do api call here

    yield delay(1000);

    const data = {
      userName: userName,
      accessToken: 'jhsdbfuhswfhubasugiuaughuqgd87',
      refreshToken: 'hgzvxchgvsubvub'
    };

    setLocalStorageTokens({
      userName: data.userName,
      accessToken: data.accessToken,
      refreshToken: data.refreshToken
    });

    yield put(requestUserSuccess(data));
  } catch (error) {
    console.log(error);
    yield put(requestUserFailure());
  }
}

export function* logout(action) {
  try {
    yield delay(1000);

    console.log('hello');

    clearLocalStorage();
  } catch (error) {
    console.log(error);
  }
}

export default [
  takeLatest(actionTypes.USER_REQUEST, fetchUserAsync),
  takeLatest(actionTypes.LOGOUT, logout)
];
