import { createContext, useEffect, useReducer } from "react";
import { userReducer } from "./userReducer";
import { jwtDecode } from 'jwt-decode'
import toast from "react-hot-toast";

export const UserContext = createContext(null);

const storedUserData = localStorage.getItem('profile')
const initialState = {
    user: null
}
const initialUserState = storedUserData ? { user: JSON.parse(storedUserData) } : initialState

export const UserProvider = ({ children }) => {
    const [userState, dispatch] = useReducer(userReducer, initialUserState);

    const saveUser = (user) => {
        dispatch({
            type: "SAVE_USER",
            user: user
        })
    }

    const removeUser = () => {
        dispatch({
            type: "REMOVE_USER",
        })
    }

    useEffect(() => {
        const token = userState.user?.token
        if (token) {

            const decodedToken = jwtDecode(token)
            if (decodedToken.exp * 1000 < new Date().getTime()) {
                removeUser()
                toast.error("Session expired Please Sign In")
            }
        }
    }, [])

    return (
        <UserContext.Provider value={{ userState, saveUser, removeUser }}>
            {children}
        </UserContext.Provider>
    )
}