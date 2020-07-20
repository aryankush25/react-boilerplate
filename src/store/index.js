import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'connected-react-router';
import rootReducer from './reducers';
import rootSaga from './sagas';
import history from '../utils/history';

const reduxLogger = createLogger({});
const sagaMiddleware = createSagaMiddleware();
const routerHistoryMiddleware = routerMiddleware(history);

const middlewares = [reduxLogger, sagaMiddleware, routerHistoryMiddleware];

const enhancer = applyMiddleware(...middlewares);

const finalCreateStore = compose(enhancer)(createStore);

const store = finalCreateStore(rootReducer);

sagaMiddleware.run(rootSaga);

export default store;
