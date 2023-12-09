import React, {useState} from 'react';
import {TodoFormFunc} from "./TodoFormFunc"
import { TodoListFunc } from './TodoListFunc';

export const TodoFunc = () => {
  const [todos, setTodos] = useState([]);
  const onSubmit = (value) => {
    setTodos([...todos, {...value}])
  }

  const removeItem = (id) => {
    setTodos( todos.filter(todo => todo.id !== id))
  }

return(
    <div>
      <h1> Todos </h1>
      <TodoFormFunc onSubmit={onSubmit}/>
      <TodoListFunc todos={todos} removeItem={removeItem}/>
    </div>
  )
}
