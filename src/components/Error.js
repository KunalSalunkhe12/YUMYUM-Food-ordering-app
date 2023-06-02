import React from 'react'
import { isRouteErrorResponse, useRouteError } from 'react-router-dom'

function Error() {

    const error = useRouteError();
    console.log(error)

    return (
        <div className='flex flex-col w-screen h-screen justify-center items-center'>
            <div>{error?.status}</div>
            <div>{error?.statusText || error?.error?.message}</div>
            <div className='text-2xl font-semibold'>Something Went Wrong!!</div>
        </div>)

}

export default Error