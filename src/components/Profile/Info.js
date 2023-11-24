import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../../../utils/context/user/UserContext'

const Info = () => {
    const { userState, removeUser } = useContext(UserContext)
    const navigate = useNavigate()

    const handleLogout = () => {
        removeUser()
        navigate('/')
    }
    return (
        <div className='flex justify-center'>
            <div className='mt-8 shadow-lg rounded-lg p-4 w-full md:w-2/5 lg:w-2/6'>
                <h2 className='text-xl font-semibold'>User Info</h2>
                <div className='my-8 flex flex-col gap-4 text-lg'>
                    <h3><span className='font-medium'>Name: </span>{userState.user.result.name}</h3>
                    <h3><span className='font-medium'>Email: </span> {userState.user.result.email}</h3>
                </div>
                <button className="btn_primary" onClick={handleLogout}>Logout</button>
            </div>
        </div>
    )
}

export default Info