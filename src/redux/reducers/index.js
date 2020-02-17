import { combineReducers } from 'redux';
import posts from './posts/reducer';

const reducer = combineReducers({ posts });

export default reducer;
