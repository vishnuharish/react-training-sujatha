import React, { useReducer } from 'react';
import { TodoContext } from './TodoContext';
import TodosReducer from './TodosReducer';
import { GET_TODOS, SET_TODOS, REMOVE_TODOS } from './types';


const TodoState = props => {
  const initialState = {
    todos: []
  };

  const [state, dispatch] = useReducer(TodosReducer, initialState);

  const getTodos = () => {
    dispatch({type: GET_TODOS, payload: state.todos})
  }

  const setTodos = (payload) => {
    dispatch({type: SET_TODOS, payload: {...payload}})
  }
  const removeTodos = (payload) => {
    dispatch({type: REMOVE_TODOS, payload})
  }


  return (
    <TodoContext.Provider value={{
      todos: state.todos,
      getTodos,
      setTodos,
      removeTodos
    }}>{props.children}</TodoContext.Provider>
  )
}

export default TodoState;
