import React from 'react'

function ShimmerCard() {
    return (
        <div className="shadow-3xl rounded-lg">
            <div className="bg-gray-200 h-52"></div>
            <div className="flex flex-col gap-4 p-6">
                <h3 className="h-6 bg-gray-200"></h3>
                <p className='h-6 bg-gray-200'></p>
                <p className="h-6 bg-gray-200"></p>
            </div>
        </div>
    )
}

export default ShimmerCard