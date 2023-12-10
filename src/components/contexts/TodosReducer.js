import {GET_TODOS, SET_TODOS, REMOVE_TODOS} from './types';

const reducer = (state, action) => {
  switch(action.type){
    case SET_TODOS: {
      return {
        todos: [...state.todos, action.payload]
      }
    }
    case REMOVE_TODOS: {
      return {
        todos: [...state.todos.filter(todo => todo.id !== action.payload)]
      }
    }
    case GET_TODOS: {
      return {
        todos: [...action.payload]
      }
    }
    default: {
      return state
    }
  }
}

export default reducer;
