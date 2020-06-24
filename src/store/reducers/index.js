import { combineReducers } from 'redux';
import { reducer as toastrReducer } from 'react-redux-toastr';

// If you want to use redux-form just run command `yarn add redux-form`
// and uncomment the commented code in this file

// import { reducer as formReducer } from 'redux-form';

import userData from './userData';

const allReducers = combineReducers({
  userData,

  toastr: toastrReducer
  // form: formReducer
});

export default allReducers;
