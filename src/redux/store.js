import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import { persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './root.reducer';
import rootSaga from './root-saga';

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

// eslint-disable-next-line no-undef
if (process.env.NODE_ENV === 'development') middleware.push(logger);

export const store = createStore(rootReducer, applyMiddleware(...middleware));

// Add sagas
sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
