import {combineReducers, createStore} from 'redux';
import {composeWithDevTools} from '@redux-devtools/extension';
import {commentReducer} from './commentReducer';
import {tokenReducer} from './tokenReducer';

const rootReducer = combineReducers({
  token: tokenReducer,
  comment: commentReducer,
});

export const store = createStore(rootReducer, composeWithDevTools());
