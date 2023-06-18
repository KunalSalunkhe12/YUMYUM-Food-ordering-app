import React from 'react'
import ShimmerCard from './ShimmerCard'

const SearchShimmer = () => {
    return (
        <>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-20 p-16'>
                {
                    Array(15).fill(" ").map((el, index) => <ShimmerCard key={index} />)
                }
            </div >
        </>
    )
}

export default SearchShimmer