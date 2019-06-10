import { combineReducers } from 'redux';

import communication from './communication';
import posts from './posts';
import todos from './todos';

const appReducer = combineReducers({
  communication,
  posts,
  todos,
});

export default function (state, action = {}) {
  return appReducer(state, action);
}
