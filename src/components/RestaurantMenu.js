import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import Error from './Error';
import ShimmerCard from './Shimmer'
import MenuCategoryList from './MenuCategoryList';
import { CDN_IMG_URL, RESTAURANT_MENU_URL } from '../constant';
import { AiFillStar } from "react-icons/ai"
import useMenu from '../../utils/hooks/useMenu';


const RestaurantMenu = () => {
    const { id } = useParams()
    const { info, menu, isError } = useMenu(id)

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (isError) {
        return <Error />
    }

    return (
        menu ?
            <div className='w-3/4 mx-auto py-28 px-4'>
                <div className='flex justify-between items-center bg-primary text-white p-2'>
                    <div className='flex items-center gap-4'>
                        <div className='w-44'>
                            <img className="rounded-lg object-contain" src={CDN_IMG_URL + info?.cloudinaryImageId} alt="Restaurant Image" />
                        </div>
                        <div className='flex flex-col gap-1'>
                            <h2 className='text-2xl font-bold'>{info?.name}</h2>
                            <p className='text-sm text-gray-500'>{info?.cuisines?.join(" ")}</p>
                            <p className='text-sm text-gray-500'>{info?.areaName}</p>
                        </div>
                    </div>
                    <div className='text-primary bg-secondary p-4 rounded-md'>
                        <AiFillStar />
                        <p>{info?.avgRating}</p>
                    </div>
                </div >
                <hr />
                <div className='my-4'>
                    <p className='font-semibold'>{info?.costForTwoMessage}</p>
                </div>
                <hr />
                <div className='my-4'>
                    {
                        menu.map(item => {
                            return (
                                <MenuCategoryList key={item?.card?.card?.title} title={item?.card?.card?.title} itemCards={item?.card?.card?.itemCards} />
                            )
                        })
                    }

                </div>
            </div > : <ShimmerCard />
    )
}

export default RestaurantMenu;