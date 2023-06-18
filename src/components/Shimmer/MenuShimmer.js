import React from 'react'

const MenuShimmer = () => {
    return (
        <div className='w-3/4 mx-auto py-28 px-4'>
            <div className='bg-gray-200 h-32'></div>
            <p className='bg-gray-200 h-6 w-40 my-6'></p>
            <p className='bg-gray-200 h-6 w-40 my-6'></p>
            {
                Array(15).fill(" ").map((el, index) => <div key={index} className='bg-gray-200 h-28 my-4'></div>)
            }
        </div>
    )
}

export default MenuShimmer