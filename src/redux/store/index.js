import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import RootReducer from '../reducers';

export const middleWare = [thunk];
/* if ((process.env.NODE_ENV = 'development')) {
  middleWare = [...middleWare, logger];
} */
export const createStoreWithMiddleWare = applyMiddleware(...middleWare)(
  createStore
);

export const store = createStoreWithMiddleWare(RootReducer);
