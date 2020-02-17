import { combineReducers } from 'redux';
import { appReducer } from './appReducer';
import success from './successReducer';

const reducer = combineReducers({ success });

export default reducer;
