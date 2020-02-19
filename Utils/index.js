import CheckPropTypes from 'check-prop-types';
import { applyMiddleware, createStore } from 'redux';
import rootReducer from '../src/redux/reducers/';
import { middleWare } from '../src/redux/store/';

export const findByTestAtr = (component, atr) => {
  const wrapper = component.find(`[data-test='${atr}']`);
  return wrapper;
};

export const checkProps = (component, expectedProps) => {
  const propsError = CheckPropTypes(
    component.propTypes,
    expectedProps,
    'props',
    component.name
  );
  return propsError;
};

export const testStore = initialState => {
  const createStoreWithMiddleware = applyMiddleware(...middleWare)(createStore);
  return createStoreWithMiddleware(rootReducer, initialState);
};
