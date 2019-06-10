import * as actionType from '../actiontypes/todoTypes';
import * as dataSource from '../../dataSource/requests';

const GET_TODOS_URL = '/todos';

export const updateTodos = todos => ({
  type: actionType.UPDATE_TODOS,
  payload: todos,
});

export function fetchTodos(id) {
  return async (dispatch) => {
    try {
      const todos = await dataSource.get(GET_TODOS_URL, id);
      console.log('log action', todos);
      dispatch(updateTodos(todos));
    } catch (exception) {
      console.error(`actions/fetchPosts -> ${exception}`);
    }
  };
}
