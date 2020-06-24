import { combineReducers } from 'redux';

// If you want to use redux-form just run command `yarn add redux-form`
// and uncomment the commented code in this file

// import { reducer as formReducer } from 'redux-form';

import userData from './userData';

const allReducers = combineReducers({
  userData

  // form: formReducer
});

export default allReducers;
