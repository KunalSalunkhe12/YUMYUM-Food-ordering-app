import React, { useContext } from 'react'
import { CartContext } from '../../utils/context/CartContext'

const Cart = () => {

    const cartItems = useContext(CartContext)

    console.log(cartItems);

    return (
        <button className='mt-96'>Click</button>
    )
}

export default Cart