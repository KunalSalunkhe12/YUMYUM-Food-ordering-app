import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import Error from './Error';
import MenuShimmer from './Shimmer/MenuShimmer';
import { CDN_IMG_URL } from '../constant';
import { AiFillStar } from "react-icons/ai"
import Logo from "../../assets/yumyum-background.svg"
import useMenu from '../../utils/hooks/useMenu';
import ItemCategoryList from './ItemCategoryList';
import NestedItemCategoryList from './NestedItemCategoryList';


const RestaurantMenu = () => {
    const { id } = useParams()
    const { info, menu, isError } = useMenu(id)
    console.log(info);
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (isError) {
        return <Error />
    }

    return (
        menu ?
            <div className='md:w-3/4 mx-auto my-24 px-3 md:px-6'>
                <div className='bg-black text-white flex items-center justify-between gap-4 p-2'>
                    <div className='flex gap-4 items-center'>
                        <div className='hidden md:block md:w-44'>
                            {
                                info?.cloudinaryImageId ?
                                    <img className="rounded-lg object-contain" src={CDN_IMG_URL + info?.cloudinaryImageId} alt="Restaurant Image" /> :
                                    <img className="mx-auto w-1/2 rounded-t-lg" src={Logo} alt="Logo" />
                            }
                        </div>
                        <div className='flex flex-col gap-1'>
                            <h2 className='text-base sm:text-lg md:text-xl lg:text-2xl font-bold'>{info?.name}</h2>
                            <p className='text-sm text-gray-500'>{info?.cuisines?.join(" ")}</p>
                            <p className='text-sm text-gray-500'>{info?.areaName}</p>
                        </div>
                    </div>
                    <div className='flex items-center justify-center text-primary bg-secondary p-2 rounded-md text-sm md:text-base'>
                        <AiFillStar />
                        <p>{info?.avgRating}</p>
                    </div>
                </div>
                <hr />
                <div className='flex justify-between my-4 text-sm md:text-base'>
                    <p className='font-semibold'>{info?.costForTwoMessage}</p>
                    <p className='font-semibold'>{info?.locality}</p>
                </div>
                <hr />
                <div className='my-4'>
                    {
                        menu.map(item => item.categories ? (<NestedItemCategoryList key={item.title} nestedCategory={item} />) : (<ItemCategoryList key={item.title} itemCategory={item} />))
                    }

                </div>
            </div > : <MenuShimmer />
    )
}

export default RestaurantMenu;