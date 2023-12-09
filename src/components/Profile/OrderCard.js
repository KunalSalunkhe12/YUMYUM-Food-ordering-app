import React from 'react'

const OrderCard = ({ order }) => {
    const address = `${order?.customer_details?.address?.line1}, ${order?.customer_details?.address?.city}, ${order?.customer_details?.address?.state}, ${order?.customer_details?.address?.postal_code}`
    const date = new Date(order?.created * 1000).toLocaleString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
    });


    return (
        <div className='shadow-lg rounded-lg p-4 flex flex-col gap-2'>
            <p><span className='font-medium underline'>Order Will be Delivered in 30mins</span></p>
            <p><span className='font-medium'>Payment Id: </span> {order?.payment_intent}</p>
            <p><span className='font-medium'>Total Amount: </span>Rs. {order?.amount_total / 100}</p>
            <p><span className='font-medium'>Ordered At: </span> {date}</p>
            <p><span className='font-medium'>Address: </span> {address}</p>
            <h2 className='font-medium text-lg'>Items: </h2>
            <div className='overflow-y-auto h-24 flex flex-col gap-2'>
                {
                    order?.line_items?.data?.map(item => (
                        <div key={item.id} className='p-3 rounded-lg bg-slate-100'>
                            <p className='font-medium'>Name: <span className='font-normal'>{item?.description}</span></p>
                            <p className='font-medium'>Quantity: <span className='font-normal'>{item?.quantity}</span></p>
                            <p className='font-medium'>Total: <span className='font-normal'>{item?.amount_total / 100}</span></p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default OrderCard