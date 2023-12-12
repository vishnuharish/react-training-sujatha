import React, { useReducer } from "react";
import { TodoContext } from "./TodoContext";
import TodosReducer from "./TodosReducer";
import { GET_TODOS, REMOVE_TODOS, SET_TODOS } from "./types";

const TodoState = (props) => {
  const initialState = {
    todos: [],
  };

  const [state, dispatch] = useReducer(TodosReducer, initialState);

  const getTodos = async () => {
    const res = await fetch("/todos");
    const data = await res.json();
    dispatch({ type: GET_TODOS, payload: data });
  };

  const setTodos = async (payload) => {
    const res = await fetch("/todos", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    const data = await res.json();
    dispatch({ type: SET_TODOS, payload: { ...data } });
  };
  const removeTodos = async (payload) => {
    await fetch(`/todos/${payload}`, {
      method: "DELETE",
    });
    dispatch({ type: REMOVE_TODOS, payload });
  };

  return (
    <TodoContext.Provider
      value={{
        todos: state.todos,
        getTodos,
        setTodos,
        removeTodos,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoState;
