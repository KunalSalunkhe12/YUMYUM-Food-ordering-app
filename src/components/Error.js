import { useRouteError } from 'react-router-dom'

function Error() {

    const error = useRouteError();

    return (
        <div className='flex flex-col w-screen h-screen justify-center items-center'>
            <p>{error?.status}</p>
            <p>{error?.statusText || error?.error?.message}</p>
            <p className='text-2xl font-semibold'>Something Went Wrong!!</p>
        </div>)

}

export default Error