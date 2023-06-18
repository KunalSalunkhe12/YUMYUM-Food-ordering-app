import React, { useEffect, useState } from 'react'
import { BiSearchAlt2 } from "react-icons/bi"
import RestaurantCard from './RestaurantCard';
import SearchShimmer from './Shimmer/SearchShimmer';
import { API_URL } from '../constant';

const Search = () => {
    const [searchInput, setSearchInput] = useState('');
    const [suggestedRestaurants, setSuggestedRestaurants] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    const getSearchRestaurants = async () => {
        setIsLoading(true)
        try {
            const response = await fetch(`${API_URL}/search?searchInput=${searchInput}`)
            const json = await response.json()
            const restaurantsData = json?.data?.cards[0]?.groupedCard?.cardGroupMap?.RESTAURANT?.cards;
            setSuggestedRestaurants(() => restaurantsData ? restaurantsData : [])
            setIsLoading(false)
        } catch (error) {
            setIsLoading(false)
            console.log(error);
        }

    }

    useEffect(() => {
        getSearchRestaurants()
    }, [searchInput])

    console.log(suggestedRestaurants);

    return (
        <div className='pt-24'>
            <div className='mt-5'>
                <div className='bg-primary w-1/2 flex items-center m-auto p-2 rounded-lg'>
                    <input className="bg-primary w-full text-white text-lg outline-none" type="text" value={searchInput} onChange={e => setSearchInput(e.target.value)} placeholder='Search your Restaurants and Food..' />
                    <BiSearchAlt2 className='text-secondary text-lg' />
                </div>
                {isLoading && <SearchShimmer />}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-20 p-16">
                    {
                        suggestedRestaurants.length > 0 ? suggestedRestaurants.map((restaurant) => {
                            return <RestaurantCard key={restaurant?.card?.card?.info?.id} restaurant={restaurant?.card?.card?.info} />

                        }) : <p className='col-span-full place-self-center text-xl font-semibold'> No restaurants</p>
                    }
                </div>
            </div>
        </div>
    )
}

export default Search