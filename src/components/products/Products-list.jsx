import React, { useContext, useEffect } from "react";
import { ProductsContext } from "./contexts/ProductsContext";
import { Link, Outlet } from "react-router-dom";

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
            <Link to={`/products/${product.id}`}>{product.name}</Link>
          </li>
        ))}
      </ul>
      <Outlet/>
    </div>
  );
};
