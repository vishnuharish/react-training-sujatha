import React, { useContext } from "react";
import { ProductsForm } from "./Products-form";
import { ProductsContext } from "./ProductsContext";
import {ProductsList} from './Products-list';


export const Products = () => {
const productsContext = useContext(ProductsContext)
    return (<div>
        <ProductsForm />
        <ProductsList />
    </div>

    )
}