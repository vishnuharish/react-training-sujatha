import React from "react";
import { TodoFormFunc } from "./TodoFormFunc";
import { TodoListFunc } from "./TodoListFunc";

export const TodoFunc = () => {
  return (
    <div>
      <h1>Todos</h1>
      <TodoFormFunc />
      <TodoListFunc />
    </div>
  );
};
