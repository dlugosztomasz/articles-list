import { combineReducers } from 'redux';
import articles from './articles';

const appReducer = combineReducers({
  articles
});

export default appReducer;
