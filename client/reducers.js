/**
 * Root Reducer
 */
import { combineReducers } from 'redux';

// Import Reducers
import app from './App/AppReducer';
import posts from './posts/PostReducer';
import intl from './Intl/IntlReducer';

// Combine all reducers into one root reducer
export default combineReducers({
  app,
  posts,
  intl,
});
