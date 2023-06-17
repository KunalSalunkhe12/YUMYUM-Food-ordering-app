import React, { useContext } from 'react'
import { CartContext } from '../../utils/context/CartContext'
import MenuCard from './MenuCard'

const Cart = () => {

    const { cartState } = useContext(CartContext)
    const itemTotal = cartState.items && Object.values(cartState.items)
        .map((cartItem) => (cartItem.item.price / 100 || cartItem.item.defaultPrice / 100) * cartItem.quantity)
        .reduce((acc, curr) => acc + curr, 0);

    const deliveryCharge = 39
    const platformFee = 2
    const GST = Math.round(itemTotal * 0.18)

    const TotalPrize = itemTotal + deliveryCharge + platformFee + GST

    return (
        <div className='flex flex-col pt-24 gap-6 items-center'>
            {
                cartState.items ?
                    <>
                        <h1 className='text-3xl font-semibold'>Checkout</h1>
                        <div className='w-2/5 shadow-2xl rounded-lg'>
                            <div className='h-80 px-4 overflow-y-auto'>
                                {
                                    Object.values(cartState.items).map(cartItem => {
                                        return <MenuCard item={cartItem.item} />
                                    })
                                }
                                <div className='p-4'>
                                    <p className='text-lg font-semibold'>Bill details</p>
                                    <div className='flex justify-between mt-1'>
                                        <div className=''>Item Total</div>
                                        <div>₹ {itemTotal}</div>
                                    </div>
                                    <div className='flex justify-between mt-1'>
                                        <div className=''>Delivery Fee</div>
                                        <div>₹ {deliveryCharge}</div>
                                    </div>
                                    <hr />
                                    <div className='flex justify-between mt-1'>
                                        <div className=''>Platform Fee</div>
                                        <div>₹ {platformFee}</div>
                                    </div>
                                    <div className='flex justify-between mt-1'>
                                        <div className=''>GST</div>
                                        <div>₹ {GST}</div>
                                    </div>
                                </div>
                            </div>
                            <div className='flex justify-between items-center p-4 bg-primary text-xl font-semibold'>
                                <p className='text-white'>To Pay: ₹ {TotalPrize}</p>
                                <button className='text-primary bg-secondary p-2 rounded-lg'>Checkout</button>
                            </div>
                        </div>
                    </> : <div>Your Cart is Empty!</div>
            }

        </div>
    )
}

export default Cart