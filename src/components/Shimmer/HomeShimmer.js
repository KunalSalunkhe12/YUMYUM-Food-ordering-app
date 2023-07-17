import React from 'react'
import ShimmerCard from './ShimmerCard'

const HomeShimmer = () => {
    return (
        <>
            <div className='flex justify-between pt-28 px-16 pb-6'>
                <div className='h-8 bg-gray-200 w-60'></div>
            </div>
            <p className='px-4 text-center'>It may take some time due to server inactivity, please check out other pages till then😊</p>
            <hr />
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-20 p-16'>
                {
                    Array(15).fill(" ").map((el, index) => <ShimmerCard key={index} />)
                }
            </div >
        </>
    )
}

export default HomeShimmer