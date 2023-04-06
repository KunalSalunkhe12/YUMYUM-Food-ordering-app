import React from "react"

const Header = () => {
    return (
        <div className="bg-primary text-white flex justify-between items-center py-4 px-16">
            <h1 className="font-bold text-3xl">YumYum <span className="text-secondary text-base font-chango">Good Food Made Easy</span></h1>
            <ul>
                <li className="inline p-4 list-none"><a className="inline-block transition ease-in-out duration-100 hover:text-secondary hover:scale-105" href="/">Home</a></li>
                <li className="inline p-4 list-none"><a className="inline-block transition ease-in-out duration-100 hover:text-secondary hover:scale-105" href="/">About</a></li>
                <li className="inline p-4 list-none"><a className="inline-block transition ease-in-out duration-100 hover:text-secondary hover:scale-105" href="/">Contact</a></li>
                <li className="inline p-4 list-none"><a className="inline-block transition ease-in-out duration-100 hover:text-secondary hover:scale-105" href="/">Cart</a></li>
            </ul>
        </div>
    )
}

export default Header;