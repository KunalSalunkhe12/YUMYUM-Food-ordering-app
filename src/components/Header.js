import React, { useContext } from "react"
import { NavLink, Link } from "react-router-dom";
import { AiOutlineShoppingCart, AiOutlineMenu } from "react-icons/ai"
import { BiSearchAlt2 } from "react-icons/bi"
import { CartContext } from "../../utils/context/CartContext";
import { UserContext } from "../../utils/context/UserContext";

const Header = () => {
    const { cartState } = useContext(CartContext)
    const { userState, removeUser } = useContext(UserContext)

    const numberOfItems = Object.values(cartState.items).length

    return (
        <>
            <div className="w-full bg-primary text-white flex justify-between items-center py-4 px-10 lg:px-16 fixed top-0 right-0">
                <Link to="/">
                    <h1 className="font-bold sm:text-xl md:text-2xl">YumYum <span className="text-secondary text-xs md:text-sm font-chango">Good Food Made Easy</span></h1>
                </Link>
                <div className="hidden md:block">
                    <ul className=" flex items-center text-base gap-8">
                        <li className="list-none inline-block transition ease-in-out duration-100 hover:scale-105">
                            <NavLink className={({ isActive, isPending }) =>
                                isPending ? "text-white" : isActive ? "text-secondary" : ""} to="/search">
                                <div className="flex items-center gap-2">
                                    <BiSearchAlt2 className="md:text-xl" />
                                    <span>Search</span>
                                </div>
                            </NavLink>
                        </li>
                        <li className="list-none inline-block transition ease-in-out duration-100 hover:scale-105">
                            <NavLink className={({ isActive, isPending }) =>
                                isPending ? "text-white" : isActive ? "text-secondary" : ""} to="/">Home</NavLink>
                        </li>
                        <li className="list-none inline-block transition ease-in-out duration-100 hover:scale-105">
                            <NavLink className={({ isActive, isPending }) =>
                                isPending ? "text-white" : isActive ? "text-secondary" : ""} to="/about">About</NavLink>
                        </li>
                        <li className="list-none inline-block transition ease-in-out duration-100 hover:scale-105">
                            <NavLink className={({ isActive, isPending }) =>
                                isPending ? "text-white" : isActive ? "text-secondary" : ""} to="/help">Help</NavLink>
                        </li>
                        {userState.user ?
                            <>
                                <li className="list-none inline-block transition ease-in-out duration-100 hover:scale-105">
                                    <NavLink className={({ isActive, isPending }) =>
                                        isPending ? "text-white" : isActive ? "text-secondary" : ""} to="/cart">
                                        <div className="flex items-center gap-2">
                                            <AiOutlineShoppingCart className="md:text-xl" />
                                            <span>{numberOfItems}</span>
                                        </div>
                                    </NavLink>

                                </li>
                                <button onClick={removeUser}>
                                    Logout
                                </button>
                            </>
                            :
                            <button>
                                <NavLink className={({ isActive, isPending }) =>
                                    isPending ? "text-white" : isActive ? "text-secondary border-2 border-secondary py-1 px-4 rounded-md" : "border-2 border-secondary py-1 px-4 rounded-md"} to="/auth">Sign in</NavLink>
                            </button>
                        }
                    </ul>
                </div>
            </div >
            <div className="fixed bottom-0 right-0 bg-primary text-white w-full px-4 py-6 md:hidden">
                <ul className="justify-around flex text-sm">
                    <li className="list-none inline-block transition ease-in-out duration-100 hover:scale-105">
                        <NavLink className={({ isActive, isPending }) =>
                            isPending ? "text-white" : isActive ? "text-secondary" : ""} to="/search">
                            <div className="flex items-center gap-2">
                                <BiSearchAlt2 className="text-xl" />
                                <span>Search</span>
                            </div>
                        </NavLink>
                    </li>
                    <li className="list-none inline-block transition ease-in-out duration-100 hover:scale-105">
                        <NavLink className={({ isActive, isPending }) =>
                            isPending ? "text-white" : isActive ? "text-secondary" : ""} to="/">Home</NavLink>
                    </li>
                    <li className="list-none inline-block transition ease-in-out duration-100 hover:scale-105">
                        <NavLink className={({ isActive, isPending }) =>
                            isPending ? "text-white" : isActive ? "text-secondary" : ""} to="/about">About</NavLink>
                    </li>
                    <li className="list-none inline-block transition ease-in-out duration-100 hover:scale-105">
                        <NavLink className={({ isActive, isPending }) =>
                            isPending ? "text-white" : isActive ? "text-secondary" : ""} to="/help">Help</NavLink>
                    </li>
                    <li className="list-none inline-block transition ease-in-out duration-100 hover:scale-105">
                        <NavLink className={({ isActive, isPending }) =>
                            isPending ? "text-white" : isActive ? "text-secondary" : ""} to="/cart">
                            <div className="flex items-center gap-2">
                                <AiOutlineShoppingCart className="text-xl" />
                                <span>{numberOfItems}</span>
                            </div>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Header;