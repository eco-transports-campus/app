/**
 * Root Reducer
 */
import { combineReducers } from 'redux';

// Import Reducers
import base from './modules/base/BaseReducer';
import posts from './modules/posts/PostReducer';
import intl from './modules/intl/IntlReducer';

// Combine all reducers into one root reducer
export default combineReducers({
  base,
  posts,
  intl,
});
