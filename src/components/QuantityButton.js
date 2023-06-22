import React, { useContext } from 'react'
import { CartContext } from '../../utils/context/CartContext'

const QuantityButton = ({ item }) => {

    const { cartState, addToCart, removeFromCart } = useContext(CartContext)
    return (
        <div className="flex gap-3 text-base md:text-lg bg-primary px-3 py-1 rounded-lg font-semibold">
            <button className="text-red-500" onClick={() => removeFromCart(item.id)}>-</button>
            <p className="text-white">{cartState.items[item.id].quantity}</p>
            <button className="text-secondary" onClick={() => addToCart(item)}>+</button>
        </div>
    )
}

export default QuantityButton