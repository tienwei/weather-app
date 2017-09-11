import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import ReduxThunk from 'redux-thunk'
import { createLogger } from 'redux-logger';

import reducer from './reducers';
import mainSaga from './main-saga';

const NODE_ENV = process.env.NODE_ENV || 'development';

const configureStore = (initialState = {}) => {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [applyMiddleware(sagaMiddleware), applyMiddleware(ReduxThunk)];
  if (NODE_ENV === 'development') {
    middlewares.push(applyMiddleware(createLogger()));
  }
  const enhancer = compose.apply(null, middlewares);
  const store = createStore(reducer, initialState, enhancer);
  sagaMiddleware.run(mainSaga);
  return store;
};

export default configureStore;
