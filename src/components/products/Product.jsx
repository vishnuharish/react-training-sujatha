import React, { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ProductsContext } from './contexts/ProductsContext';


export const Product = () => {
  const productContext = useContext(ProductsContext);
  const params = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  useEffect(() => {
    if(params && params.id){
      setProduct(productContext.products.find(product => product.id === Number(params.id))) 
    }
  }, [])
  const goBack = () => {
    navigate("/products")
  }
  return(
  <div>
      <p>Product Name: {product?.name}</p>
      <p>Quantity: {product?.quantity}</p>
      <p>{ product && product.inStock ? "In Stock" : "Out of Stock"}</p>
      <button onClick={goBack}> Go Back </button>
    </div>
  )
}
