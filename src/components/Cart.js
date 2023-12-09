import React, { useContext, useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
import { CartContext } from '../../utils/context/cart/CartContext'
import MenuCard from './MenuCard'
import { payment } from '../../api/index'
import Error from './Error'

const Cart = () => {
    const [error, setError] = useState(null);
    const { cartState } = useContext(CartContext)
    const navigate = useNavigate()

    const itemTotal = cartState.items && Object.values(cartState.items)
        .map((cartItem) => (cartItem.item.price / 100 || cartItem.item.defaultPrice / 100) * cartItem.quantity)
        .reduce((acc, curr) => acc + curr, 0);

    const handlePayment = async () => {
        try {
            const response = await payment(cartState.items)
            if (response.status === 200) {
                window.location.href = response.data.url
            }
        }
        catch (error) {
            console.log(error)
            setError(error)
        }
    }

    if (error) {
        return <Error />
    }

    return (
        <div className='flex flex-col my-24 gap-6 items-center p-3'>
            {
                Object.values(cartState.items).length > 0 ?
                    <>
                        <h1 className='text-xl md:text-2xl lg:text-3xl font-semibold'>Checkout</h1>
                        <div className='sm:w-3/4 md:w-2/3 lg:w-2/5 shadow-2xl rounded-lg'>
                            <div className='h-80 px-4 overflow-y-auto'>
                                {
                                    Object.values(cartState.items).map(cartItem => {
                                        return <MenuCard key={cartItem.id} item={cartItem.item} />
                                    })
                                }
                            </div>
                            <div className='flex justify-between items-center p-4 bg-primary text-base md:text-lg lg:text-xl font-semibold'>
                                <p className='text-white'>To Pay: ₹ {itemTotal}</p>
                                <button onClick={handlePayment} className='text-primary bg-secondary p-2 rounded-lg'>Checkout</button>
                            </div>
                        </div>
                    </> :
                    <div className='flex flex-col justify-center gap-5 mt-10'>
                        <p className='text-center text-xl font-semibold'>Your Cart is Empty!</p>
                        <Link to='/'>
                            <button className='btn_primary'>Check All Restaurants</button>
                        </Link>
                    </div>
            }

        </div>
    )
}

export default Cart