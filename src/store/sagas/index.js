import { all } from 'redux-saga/effects';

import userAuth from './userAuth';

export const tasks = [...userAuth];

const rootSaga = function* rootSaga() {
  yield all(tasks);
};

export default rootSaga;
