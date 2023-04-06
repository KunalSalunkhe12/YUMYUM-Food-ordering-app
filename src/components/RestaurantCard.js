import React from "react"
import { CDN_IMG_URL } from "../constant"
import { AiFillStar } from "react-icons/ai"

const RestaurantCard = ({ restaurant }) => {
    return (
        <div className="card cursor-pointer shadow-3xl rounded-lg">
            <img className="w-full object-contain rounded-t-lg" src={CDN_IMG_URL +
                restaurant.cloudinaryImageId} alt="" />
            <div className="card-info p-3 flex flex-col gap-4">
                <h3 className="font-semibold text-xl">{restaurant.name}</h3>
                <p>{restaurant.cuisines.join(", ")}</p>
                <p className="flex text-sm justify-between">
                    <span className="flex items-center gap-1 bg-primary text-secondary font-semibold p-1 rounded-md"><AiFillStar /> {restaurant.avgRating}</span>
                    <span className="">{restaurant.deliveryTime} mins</span>
                    <span>{restaurant.costForTwoString}</span>
                </p>
            </div>
        </div>
    )
}

export default RestaurantCard;