import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import ReduxToastr from 'react-redux-toastr';
import history from '../../utils/history';
import store from '../../store';
import AppRoutes from '../../routes';

import 'react-redux-toastr/lib/css/react-redux-toastr.min.css';
import './styles.scss';

function App() {
  return (
    <Provider store={store}>
      <div className="app-container">
        <ConnectedRouter history={history}>
          <AppRoutes />
        </ConnectedRouter>

        <ReduxToastr
          timeOut={4000}
          newestOnTop={false}
          preventDuplicates
          position="bottom-left"
          getState={(state) => state.toastr}
          transitionIn="fadeIn"
          transitionOut="fadeOut"
          progressBar
          closeOnToastrClick
        />
      </div>
    </Provider>
  );
}

export default App;
