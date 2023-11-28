import OrderCard from './OrderCard'
import useOrders from '../../../utils/hooks/useOrders'
import OrderShimmer from '../Shimmer/OrderShimmer'
import Error from "../Error"

const Orders = () => {
    const { orders, isLoading, isError } = useOrders()

    if (isError) {
        return <Error />
    }

    return (
        <div className='flex justify-center mb-20'>
            <div className='my-8 md:p-4 w-full md:w-2/3 lg:w-2/4'>
                <h2 className='text-xl font-semibold mb-6'>Order History</h2>
                <div className='flex flex-col gap-4'>
                    {
                        isLoading ? <OrderShimmer /> : orders.length > 0 ? orders?.map(order => <OrderCard key={order._id} order={order} />) : <h2>No orders</h2>
                    }
                </div>
            </div>
        </div>
    )
}

export default Orders