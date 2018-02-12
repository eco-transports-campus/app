// Import Actions
import { TOGGLE_ADD_POST } from './BaseActions';

// Initial State
const initialState = {
  showAddPost: false,
};

const BaseReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_ADD_POST:
      return {
        showAddPost: !state.showAddPost,
      };

    default:
      return state;
  }
};

/* Selectors */

// Get showAddPost
export const getShowAddPost = state => state.base.showAddPost;

// Export Reducer
export default BaseReducer;
