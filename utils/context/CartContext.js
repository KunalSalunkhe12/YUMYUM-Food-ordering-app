import { createContext, useReducer } from 'react';
import { cartReducer } from './cartReducer';

export const CartContext = createContext(null)

const storedCartData = localStorage.getItem("cartData");
const initialState = {
    items: {}
}
const initialCartState = storedCartData ? JSON.parse(storedCartData) : initialState;

export const CartProvider = ({ children }) => {

    const [cartState, dispatch] = useReducer(cartReducer, initialCartState)

    const addToCart = (item) => {
        dispatch({
            type: "ADD_TO_CART",
            item: item
        })
    }

    const removeFromCart = (id) => {
        dispatch({
            type: "REMOVE_FROM_CART",
            id: id
        })
    }

    return (
        < CartContext.Provider value={{ cartState, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider >
    )
}