import React, { useContext, useEffect, useState } from "react";
import { TodoFormFunc } from "./TodoFormFunc";
import { TodoListFunc } from "./TodoListFunc";
import { TodoContext } from "../contexts/TodoContext";
import { v4 as uuidv4 } from "uuid";

export const TodoFunc = () => {
  return (
    <div>
      <h1>Todos</h1>
      <TodoFormFunc />
      <TodoListFunc />
    </div>
  );
};
