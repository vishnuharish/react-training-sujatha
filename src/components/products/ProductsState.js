import React, { useReducer } from "react";
import { ProductsContext } from "./ProductsContext";
import ProductsReducer  from "./ProductReducer";
import { SET_PRODUCTS,GET_PRODUCTS,REMOVE_PRODUCTS } from "./types";

export const ProductState =(props) => {
    const initialState = {
        products:[]
    };

    const [state,dispatch] = useReducer(ProductsReducer,initialState);
    const getProducts = () => {
        dispatch({type: GET_PRODUCTS, payload: state.products})
      }
    
      const setProducts = (payload) => {
        dispatch({type: SET_PRODUCTS, payload: {...payload}})
      }
      const removeProducts = (payload) => {
        dispatch({type: REMOVE_PRODUCTS, payload})
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
    
