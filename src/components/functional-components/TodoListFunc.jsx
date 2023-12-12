import React, { useContext, useEffect } from 'react';
import { TodoContext } from '../contexts/TodoContext';


export const TodoListFunc = () => {
  const todoContext = useContext(TodoContext)
  const {todos, removeTodos, getTodos} = todoContext;
  useEffect(() => {
    getTodos()
    //eslint-disable-next-line
  }, [])
    return (
        <div>
          <ul>
            {
              todos?.map( todo => ( <li key={todo.id}>{todo.title}
              <button
                onClick={() => removeTodos(todo.id)}
              >
                X
              </button>
              </li> ))
            }
          </ul>
        </div>
    )
}
