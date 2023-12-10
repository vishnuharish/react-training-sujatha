import React, { useContext, useState } from "react";
import { TodoContext } from "../contexts/TodoContext";
import { v4 as uuidv4 } from "uuid";

export const TodoFormFunc = () => {
  const todoContext = useContext(TodoContext);
  const {setTodos} = todoContext;
  const [value, setValue] = useState("");

  const onChange = (event) => {
    setValue(event.target.value);
  };
  const onClick = () => {
    let id = uuidv4();
    setTodos({ id: id, title: value, isCompleted: false });
    setValue("");
  };
  return (
    <div>
      <label htmlFor="todo">Todo</label>
      <input value={value} id="todo" onChange={onChange} />
      <button
        onClick={() => {
          onClick();
        }}
      >
        Add Todo
      </button>
    </div>
  );
};
