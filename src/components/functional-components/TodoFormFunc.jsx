import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

export const TodoFormFunc = (props) => {
  const [value, setValue] = useState("");
  
  useEffect(() => {
    console.log("Component Mounted")
  }, [])

  useEffect(() => {
    console.log(value)
  }, [value])

  const onChange = (event) => {
    setValue(event.target.value);
  };
  const onClick = () => {
    let id = uuidv4();
    props.onSubmit({ id: id, title: value, isCompleted: false });
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
