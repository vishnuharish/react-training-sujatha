import React, {useState} from 'react';
import {TodoForm} from "../Todoform"
import {TodoList} from '../Todolist'

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
      <TodoForm onSubmit={onSubmit}/>
      <TodoList todos={todos} removeItem={removeItem}/>
    </div>
  )
}
