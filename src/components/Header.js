import React from "react"
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div className="bg-primary text-white flex justify-between items-center py-4 px-16">
            <h1 className="font-bold text-3xl">YumYum <span className="text-secondary text-base font-chango">Good Food Made Easy</span></h1>
            <ul>
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
                        isPending ? "text-white" : isActive ? "text-secondary" : ""} to="/cart">Cart</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Header;