import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { CDN_IMG_URL, RESTAURANT_MENU_URL } from '../constant';
import ShimmerCard from './Shimmer'
import { AiFillStar } from "react-icons/ai"
import MenuCard from './MenuCard';


const RestaurantMenu = () => {
    const { id } = useParams()
    const [restaurantMenu, setRestaurantMenu] = useState([])
    const [restaurantDetails, setRestaurantDetails] = useState("")

    const getRestaurantMenu = async () => {
        const response = await fetch(RESTAURANT_MENU_URL + id)
        const json = await response.json()

        const menuItems1 = json?.data?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
            ?.card?.itemCards
        const menuItems2 = json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
            ?.card?.itemCards

        menuItems1 ? setRestaurantMenu(menuItems1) : setRestaurantMenu(menuItems2)
        setRestaurantDetails(json?.data?.cards[0]?.card?.card?.info)
    }

    useEffect(() => {
        getRestaurantMenu()
    }, [])


    return (
        restaurantDetails ?
            <div className='w-3/4 mx-auto my-10 p-4 bg-slate-50'>
                <div className='flex justify-between items-center my-4'>
                    <div className='flex items-center gap-4'>
                        <div className='w-44'>
                            <img className="rounded-lg object-contain" src={CDN_IMG_URL + restaurantDetails?.cloudinaryImageId} alt="Restaurant Image" />
                        </div>
                        <div className='flex flex-col gap-1'>
                            <h2 className='text-2xl font-bold'>{restaurantDetails?.name}</h2>
                            <p className='text-sm text-gray-500'>{restaurantDetails?.cuisines.join(" ")}</p>
                            <p className='text-sm text-gray-500'>{restaurantDetails?.areaName}</p>
                        </div>
                    </div>
                    <div className='text-secondary bg-black p-4 rounded-md'>
                        <AiFillStar />
                        <p>{restaurantDetails?.avgRating}</p>
                    </div>
                </div >
                <hr />
                <div className='my-4'>
                    <p className='font-semibold'>{restaurantDetails?.costForTwoMessage}</p>
                </div>
                <hr />
                <div className='my-4'>
                    <h3 className='text-lg font-semibold'>Recommended({restaurantMenu.length})</h3>
                    {
                        restaurantMenu.map(menu => {
                            return <MenuCard menu={menu?.card?.info} key={menu?.card?.info?.id} />
                        })
                    }

                </div>
            </div > : <ShimmerCard />
    )
}

export default RestaurantMenu;