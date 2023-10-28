import { createContext, useReducer } from "react";
import { userReducer } from "./userReducer";

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
            type: "REMOVE_USER"
        })
    }

    return (
        <UserContext.Provider value={{ userState, saveUser, removeUser }}>
            {children}
        </UserContext.Provider>
    )
}