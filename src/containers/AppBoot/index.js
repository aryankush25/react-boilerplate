import React from 'react';
import { Provider } from 'react-redux';
import store from '../../store';
import AppRoutes from '../../routes';

import './styles.scss';

function App() {
  return (
    <Provider store={store}>
      <div className="app-container">
        <AppRoutes />
      </div>
    </Provider>
  );
}

export default App;
