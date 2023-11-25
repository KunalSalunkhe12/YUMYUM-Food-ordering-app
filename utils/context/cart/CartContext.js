import { createContext, useReducer } from 'react';
import { cartReducer } from './cartReducer';
import toast from "react-hot-toast";

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
        toast.success("Item added to cart")
    }

    const removeFromCart = (id) => {
        dispatch({
            type: "REMOVE_FROM_CART",
            id: id
        })
        toast.error("Item removed from cart")
    }

    const clearCart = () => {
        dispatch({
            type: "CLEAR_CART"
        })
    }

    return (
        < CartContext.Provider value={{ cartState, addToCart, removeFromCart, clearCart }}>
            {children}
        </CartContext.Provider >
    )
}