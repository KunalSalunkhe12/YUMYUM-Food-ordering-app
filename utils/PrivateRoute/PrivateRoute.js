import React, { useContext } from 'react'
import { UserContext } from '../context/user/UserContext'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({ children }) => {
    const { userState } = useContext(UserContext)

    return (
        userState.user ? children : <Navigate to='/auth' state={{ message: "Please Sign in first" }} />
    )
}

export default PrivateRoute