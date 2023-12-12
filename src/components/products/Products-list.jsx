import React, { useContext, useEffect } from "react";
import { ProductsContext } from "./contexts/ProductsContext";

export const ProductsList = () => {
  const productsContext = useContext(ProductsContext);
  const { products, removeProducts,getProducts } = productsContext;
  useEffect(() => {
    getProducts()
  }, [])
  return (
    <div>
      <ul>
        {products?.map((product) => (
          <li key={product.id}>
            {product.name}
            {product.quantity}
            <button onClick={() => removeProducts(product.id)}>
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
