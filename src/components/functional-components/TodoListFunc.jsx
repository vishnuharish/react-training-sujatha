import React from 'react';


export const TodoListFunc = (props) => {
const {todos} = props;
    return (
        <div>
          <ul>
            {
              todos?.map( todo => ( <li key={todo.id}>{todo.title}
              <button
                onClick={() => props.removeItem(todo.id)}
              >
                X
              </button>
              </li> ))
            }
          </ul>
        </div>
    )
}