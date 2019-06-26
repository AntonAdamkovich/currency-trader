import { createStore, applyMiddleware } from 'redux';

// router
import history from './history';
import { routerMiddleware } from 'connected-react-router'

// middlewares
import createSagaMiddleware from 'redux-saga';

//helpers
import createRootReducer from 'reducers';
import rootSaga from 'sagas';

// constants
const initialState = {};

const sagaMiddleware = createSagaMiddleware();
const middleware = [
  sagaMiddleware,
  routerMiddleware(history),
];

const store = createStore(
  createRootReducer(history),
  initialState,
  applyMiddleware(...middleware),
);

sagaMiddleware.run(rootSaga);

export default store;
