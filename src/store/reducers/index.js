import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { reducer as toastrReducer } from 'react-redux-toastr';
import history from '../../utils/history';

// If you want to use redux-form just run command `yarn add redux-form`
// and uncomment the commented code in this file

// import { reducer as formReducer } from 'redux-form';

import userData from './userData';

const rootReducer = combineReducers({
  userData,

  router: connectRouter(history),
  toastr: toastrReducer
  // form: formReducer
});

export default rootReducer;
