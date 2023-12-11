import { SET_PRODUCTS, GET_PRODUCTS, REMOVE_PRODUCTS } from "./types";

const reducer = (state, action) => {
    switch (action.type) {
        case SET_PRODUCTS: {
            return {
                products: [...state.products, action.payload]
            }
        }
        case REMOVE_PRODUCTS: {
            return {
                products: [...state.products.filter(product => product.id !== action.payload)]
            }
        }
        case GET_PRODUCTS: {
            return {
                products: [...action.payload]
            }
        }
        default: {
            return state
        }
    }
}
export default reducer;