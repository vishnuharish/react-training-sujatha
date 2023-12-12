import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { App } from "./App";
import TodoState from "./components/contexts/TodoState";
import { TodoFormFunc } from "./components/functional-components/TodoFormFunc";
import { TodoListFunc } from "./components/functional-components/TodoListFunc";
import { Products } from "./components/products/Products";
import { ProductState } from "./components/products/ProductsState";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App name="React" />
    <ProductState>
    <Products />
    </ProductState>
   
    <TodoState>
      <TodoFormFunc/>
      <TodoListFunc/>
    </TodoState>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
