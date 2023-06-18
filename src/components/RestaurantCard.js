import React from "react"
import Logo from "../../assets/yumyum-background.svg"
import { Link } from "react-router-dom"
import { CDN_IMG_URL } from "../constant"
import { AiFillStar } from "react-icons/ai"

const RestaurantCard = ({ restaurant }) => {
    return (
        <div className="card cursor-pointer shadow-lg rounded-lg">
            <Link to={'/restaurant/' + restaurant?.id}>
                {
                    restaurant?.cloudinaryImageId ?
                        <img className=" object-contain rounded-t-lg" src={CDN_IMG_URL + restaurant?.cloudinaryImageId} alt="Restaurant Image" /> :
                        <img className="mx-auto w-1/2 rounded-t-lg" src={Logo} alt="Logo" />
                }
                <div className="card-info p-3 flex flex-col gap-4">
                    <h3 className="font-semibold text-lg">{restaurant?.name}</h3>
                    <p>{restaurant?.cuisines?.join(", ")}</p>
                    <p className="flex text-sm justify-between">
                        <span className="flex items-center gap-1 bg-primary text-secondary font-semibold p-1 rounded-md"><AiFillStar /> {restaurant.avgRating}</span>
                        <span className="">{restaurant?.sla?.deliveryTime} mins</span>
                        <span>{restaurant?.costForTwoString || restaurant?.costForTwoMessage}</span>
                    </p>
                </div>
            </Link>
        </div>
    )
}

export default RestaurantCard;