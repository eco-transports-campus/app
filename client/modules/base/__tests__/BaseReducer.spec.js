import test from 'ava';
import { reducerTest } from 'redux-ava';
import baseReducer, { getShowAddPost } from '../BaseReducer';
import { toggleAddPost } from '../BaseActions';

test('action for TOGGLE_ADD_POST is working', reducerTest(
  baseReducer,
  { showAddPost: false },
  toggleAddPost(),
  { showAddPost: true },
));

test('getShowAddPost selector', t => {
  t.is(getShowAddPost({
    app: { showAddPost: false },
  }), false);
});
