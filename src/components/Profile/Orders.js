import React from 'react'
import useOrders from '../../../utils/hooks/useOrders'
const Orders = () => {
    const { orders, isLoading, isError } = useOrders()

    console.log(orders, isError, isLoading)

    return (
        <div>Orders</div>
    )
}

export default Orders