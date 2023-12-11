import React, { useContext, useRef } from "react";
import { TodoContext } from "../contexts/TodoContext";
import { v4 as uuidv4 } from "uuid";

export const TodoFormFunc = () => {
  const todoContext = useContext(TodoContext);
  const titleRef = useRef();
  const {setTodos} = todoContext;
  // const [value, setValue] = useState("");
  // const onChange = (event) => {
  //   setValue(event.target.value);
  // };
  // {
  // id: uuid,
  // productName: string,
  // quantity: number,
  // inStock: true
  // }
  const onClick = () => {
    let id = uuidv4();
    setTodos({ id: id, title: titleRef.current.value, isCompleted: false });
  };
  return (
    <div>
      <label htmlFor="todo">Todo</label>
      <input ref={titleRef} id="todo"/>
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
