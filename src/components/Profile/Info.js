import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../../../utils/context/user/UserContext'
import toast from 'react-hot-toast'

const Info = () => {
    const { userState, removeUser } = useContext(UserContext)
    const navigate = useNavigate()

    const handleLogout = () => {
        removeUser()
        navigate('/')
        toast.success("Logged out successfully")
    }
    return (
        <div className='flex justify-center'>
            <div className='my-8 md:p-4 w-full md:w-2/3 lg:w-2/4'>
                <h2 className='text-xl font-semibold'>User Info</h2>
                <div className='shadow-lg rounded-lg p-4'>
                    <div className='my-8 flex flex-col gap-4'>
                        <h3><span className='font-medium'>Name: </span>{userState.user.result.name}</h3>
                        <h3><span className='font-medium'>Email: </span> {userState.user.result.email}</h3>
                    </div>
                    <button className="btn_primary" onClick={handleLogout}>Logout</button>
                </div>
            </div>
        </div>
    )
}

export default Info