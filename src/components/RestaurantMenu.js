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

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (isError) {
        return <Error />
    }

    return (
        menu ?
            <div className='w-3/4 mx-auto mt-24 px-4'>
                <div className='flex justify-between items-center bg-primary text-white p-2'>
                    <div className='flex items-center gap-4'>
                        <div className='w-44'>
                            {
                                info?.cloudinaryImageId ?
                                    <img className="rounded-lg object-contain" src={CDN_IMG_URL + info?.cloudinaryImageId} alt="Restaurant Image" /> :
                                    <img className="mx-auto w-1/2 rounded-t-lg" src={Logo} alt="Logo" />
                            }
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
                        menu.map(item => item.categories ? (<NestedItemCategoryList key={item.title} nestedCategory={item} />) : (<ItemCategoryList key={item.title} itemCategory={item} />))
                    }

                </div>
            </div > : <MenuShimmer />
    )
}

export default RestaurantMenu;