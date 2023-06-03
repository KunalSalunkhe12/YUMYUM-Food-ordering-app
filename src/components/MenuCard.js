import React from "react"
import { CDN_IMG_URL } from "../constant";

const MenuCard = ({ menu }) => {
    console.log(menu)
    return (
        <>
            <div className="flex justify-between items-center my-6">
                <div>
                    <p className="font-bold">{menu.name}</p>
                    <p className="">₹{menu.price.toString().substr(0, 3)}</p>
                    <p className="font-sm text-gray-500 mt-4">{menu.description}</p>
                </div>
                <div className="flex flex-col gap-2 justify-center items-center">
                    <div className="w-32">
                        <img className="rounded-md" src={CDN_IMG_URL + menu.imageId} alt="Menu Item Image" />
                    </div>
                    <button className="bg-primary text-sm text-secondary p-2 rounded-lg font-semibold">Add +</button>
                </div>
            </div>
            <hr />
        </>

    )
}

export default MenuCard;