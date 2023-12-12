import React, { useContext, useEffect, useState } from "react";
import { TodoFormFunc } from "./TodoFormFunc";
import { TodoListFunc } from "./TodoListFunc";
import { TodoContext } from "../contexts/TodoContext";
import { v4 as uuidv4 } from "uuid";

export const TodoFunc = () => {
 const todoContext = useContext(TodoContext);
// useEffect(() => {
//   generateTodos()
// },[])
//  const generateTodos = () => {
//   let data = []
//   for(let i=0; i<=10; i++) {
//     todoContext.setTodos({id:uuidv4(),title:`Test-${i+1}`,isCompleted:false})
//   }
 
//  }
  return (
    <div>
      <h1>Todos</h1>
      <TodoFormFunc />
      <TodoListFunc />
    </div>
  );
};
