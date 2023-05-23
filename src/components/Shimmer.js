import React from 'react'
import ShimmerCard from './ShimmerCard'

const Shimmer = () => {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-20 p-16'>
            {
                Array(10).fill(" ").map(element => <ShimmerCard key={element.id} />)
            }
        </div >
    )
}

export default Shimmer