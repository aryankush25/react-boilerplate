import { takeLatest, delay, put } from 'redux-saga/effects';
import types from '../actionTypes';
import { requestUserSuccess, requestUserFailure } from '../actions/userActions';
import { setLocalStorageTokens } from '../../services/utils/helper';

function* fetchUserAsync(action) {
  try {
    const { payload } = action;

    const data = {
      userName: payload.payload,
      accessToken: '',
      refreshToken: ''
    };

    yield delay(1000);

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

export default [takeLatest(types.USER_REQUEST, fetchUserAsync)];
