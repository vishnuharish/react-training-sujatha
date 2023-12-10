import React, { useContext } from 'react';
import { TodoContext } from '../contexts/TodoContext';


export const TodoListFunc = () => {
  const todoContext = useContext(TodoContext)
  const {todos, removeTodos} = todoContext;
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
