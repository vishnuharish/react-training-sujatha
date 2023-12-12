import React, { useContext, useRef } from "react";
import { ProductsContext } from "./contexts/ProductsContext";
import { v4 as uuidv4 } from "uuid";

export const ProductsForm = () => {
  const productsContext = useContext(ProductsContext);
  const titleRef = useRef();
  const quantityRef = useRef();
  const { setProducts } = productsContext;

  const onSubmit = () => {
    let id = uuidv4();
    setProducts({
      id: id,
      name: titleRef.current.value,
      quantity: quantityRef.current.value,
      inStock: true,
    });
    titleRef.current.value = "";
    quantityRef.current.value = "";
  };

  return (
    <div>
      <label htmlFor="products">Welcome to list of products</label>
      <br />
      <label>
        Name of the product:
        <input id="products" ref={titleRef} />
      </label>
      <br />
      <label>
        Quantity of the product:
        <input id="products" ref={quantityRef} />
      </label>
      <br />
      <button onClick={() => onSubmit()}>Add Product</button>
    </div>
  );
};
