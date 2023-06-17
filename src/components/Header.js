import React, { useContext } from "react"
import { NavLink } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai"
import { BiSearchAlt2 } from "react-icons/bi"
import { CartContext } from "../../utils/context/CartContext";

const Header = () => {
    const { cartState } = useContext(CartContext)

    const numberOfItems = Object.values(cartState.items).length

    return (
        <div className="w-full bg-primary text-white flex justify-between items-center py-2 px-16 fixed">
            <h1 className="font-bold text-3xl">YumYum <span className="text-secondary text-base font-chango">Good Food Made Easy</span></h1>
            <ul className="flex items-center">
                <li className="p-4 list-none inline-block transition ease-in-out duration-100 hover:scale-105">
                    <NavLink className={({ isActive, isPending }) =>
                        isPending ? "text-white" : isActive ? "text-secondary" : ""} to="/search">
                        <div className="flex items-center gap-2">
                            <BiSearchAlt2 className="text-xl" />
                            <span>Search</span>
                        </div>
                    </NavLink>
                </li>
                <li className="p-4 list-none inline-block transition ease-in-out duration-100 hover:scale-105">
                    <NavLink className={({ isActive, isPending }) =>
                        isPending ? "text-white" : isActive ? "text-secondary" : ""} to="/">Home</NavLink>
                </li>
                <li className="p-4 list-none inline-block transition ease-in-out duration-100 hover:scale-105">
                    <NavLink className={({ isActive, isPending }) =>
                        isPending ? "text-white" : isActive ? "text-secondary" : ""} to="/about">About</NavLink>
                </li>
                <li className="p-4 list-none inline-block transition ease-in-out duration-100 hover:scale-105">
                    <NavLink className={({ isActive, isPending }) =>
                        isPending ? "text-white" : isActive ? "text-secondary" : ""} to="/help">Help</NavLink>
                </li>
                <li className="p-4 list-none inline-block transition ease-in-out duration-100 hover:scale-105">
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
    )
}

export default Header;