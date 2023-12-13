import React, { useReducer } from "react";
import { ProductsContext } from "./ProductsContext";
import ProductsReducer  from "./ProductReducer";
import { SET_PRODUCTS,GET_PRODUCTS,REMOVE_PRODUCTS } from "./types";

export const ProductState =(props) => {
    const initialState = {
        products:[]
    };

    const [state,dispatch] = useReducer(ProductsReducer,initialState);
    const getProducts = async () => {
      const data = await fetch("/products");
      const productList = await data.json();
      dispatch({ type: GET_PRODUCTS, payload: productList })
    }
    
      const setProducts = async (payload) => {
        const data = await fetch("/products",{
          method:"POST",
          headers:{
            "Content-type": "application/json",
          },
          body:JSON.stringify(payload)
        })
        const productList = await data.json();
        dispatch({type: SET_PRODUCTS, payload: {...productList}})
      }
      const removeProducts = async (payload) => {
        const data = await fetch(`/products/${payload}`, {
          method:"DELETE"
        })
        dispatch({type: REMOVE_PRODUCTS, data})
      }
    
    
      return (
        <ProductsContext.Provider value={{
          products: state.products,
          getProducts,
          setProducts,
          removeProducts
        }}>{props.children}</ProductsContext.Provider>
      )
    }
    
