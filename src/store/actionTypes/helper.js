import _ from 'lodash';

/*
  Example
  createAsyncActionType('LOGIN')
  will return an object
  {
    LOGIN_REQUEST: 'LOGIN_REQUEST',
    LOGIN_SUCCESS: 'LOGIN_SUCCESS',
    LOGIN_FAILURE: 'LOGIN_FAILURE'
  }
*/
export const createAsyncActionType = (prefix) => {
  const obj = {};
  obj[`${prefix}_REQUEST`] = `${prefix}_REQUEST`;
  obj[`${prefix}_SUCCESS`] = `${prefix}_SUCCESS`;
  obj[`${prefix}_FAILURE`] = `${prefix}_FAILURE`;
  return obj;
};
/*
  Example
  createSyncActionType('CHANGE_TAB')
  will return an object
  {
    CHANGE_TAB: 'CHANGE_TAB'
  }
*/
export const createSyncActionType = (prefix) => {
  const obj = {};
  obj[`${prefix}`] = prefix;
  return obj;
};
// These functions are for generating a list of types
export const createAsyncActions = (...col) => {
  const actionsObj = col.reduce(
    (acc, el) => _.merge(acc, createAsyncActionType(el)),
    {}
  );
  return actionsObj;
};

export const createSyncActions = (...col) => {
  const actionsObj = col.reduce(
    (acc, el) => _.merge(acc, createSyncActionType(el)),
    {}
  );
  return actionsObj;
};
