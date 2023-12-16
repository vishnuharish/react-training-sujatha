import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { App } from "./App";
import TodoState from "./components/contexts/TodoState";
import { Products } from "./components/products/Products";
import { Product} from './components/products/Product';
import { ProductState } from "./components/products/contexts/ProductsState";
import {
  BrowserRouter,
  Link,
  Route,
  Routes,
} from "react-router-dom";
import { TodoFunc } from "./components/functional-components/TodoFunc";
import ProductClass from './Products';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ProductState>
      <TodoState>
        <BrowserRouter >
          <Link to="todos">Todos</Link> | {' '} 
          <Link to="/app/products" state={{model: "2023"}}>Products 2023</Link> | {' '}
          <Link to="products">Products</Link>
          <Routes>
            <Route path="/app">
              <Route path="" element={<App/>}/>
              <Route path="products" element={<ProductClass /> }/>
            </Route>
            <Route path="/products">
              <Route path="" element={<Products />} />
              <Route path=":id" element={<Product /> }/>
            </Route>
            <Route path="/todos" element={<TodoFunc />} />
            <Route path="*" element={<Products />} />
          </Routes>
        </BrowserRouter>
      </TodoState>
    </ProductState>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
