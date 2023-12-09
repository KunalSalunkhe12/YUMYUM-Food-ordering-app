import React from 'react'
import { NavLink, Outlet, } from 'react-router-dom'

const ProfileLayout = () => {

    return (
        <div className='mt-16 px-4 md:px-8 lg:px-16'>
            <nav className='border-b-2 mt-20 p-4'>
                <ul className='flex gap-10 font-medium'>
                    <li>
                        <NavLink className={({ isActive }) =>
                            isActive ? "underline underline-offset-4" : "text-primary"} to="." end>Profile</NavLink>
                    </li>
                    <li>
                        <NavLink className={({ isActive }) =>
                            isActive ? "underline underline-offset-4" : "text-primary"} to="orders">Orders</NavLink>
                    </li>
                </ul>
            </nav>
            <div>
                <Outlet />
            </div>
        </div>
    )
}

export default ProfileLayout