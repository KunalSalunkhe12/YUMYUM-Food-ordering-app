import React, { useEffect } from "react"
import { CDN_IMG_URL } from "../constant";

const MenuCard = ({ item }) => {

    console.log(item);
    return (
        <>
            <div className="flex justify-between items-center my-12 gap-2">
                <div className="leading-7">
                    <p className="font-bold">{item?.name}</p>
                    <p className="">₹{item?.price / 100 || item?.defaultPrice / 100}</p >
                    <p className="font-sm text-gray-500">{item?.description?.substring(0, 200)}</p>
                </div>
                <div className="flex flex-col gap-1 justify-center items-center">
                    <div className="w-32">
                        <img className="rounded-md" src={CDN_IMG_URL + item?.imageId} alt="Menu Item Image" />
                    </div>
                    <button className="bg-primary text-sm text-secondary p-2 rounded-lg font-semibold">Add +</button>
                </div>
            </div>
            <hr />
        </>
    )
}

export default MenuCard;