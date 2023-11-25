import React, { useEffect, useState } from 'react'
import { BiSearchAlt2 } from "react-icons/bi"
import useFetchRestaurants from '../../utils/hooks/useFetchRestaurants';
import RestaurantCard from './RestaurantCard';
import SearchShimmer from './Shimmer/SearchShimmer';
import pizzaImage from '../../assets/pizza.webp'
import cakeImage from '../../assets/cake.webp'
import burgerImage from '../../assets/burger.webp'
import biryaniImage from '../../assets/biryani.webp'
import chineseImage from '../../assets/chinese.webp'
import dessertImage from '../../assets/dessert.webp'
import icecreamImage from '../../assets/ice-cream.webp'

const Search = () => {
    const [searchInput, setSearchInput] = useState('');
    const { restaurants, isLoading, isError } = useFetchRestaurants()
    const [suggestedRestaurants, setSuggestedRestaurants] = useState([])


    const getSearchRestaurants = () => {
        const filteredRestaurants = restaurants.filter(restaurant => {
            const cuisinesMatch = restaurant.info.cuisines.some(cuisine => {
                return cuisine.toLowerCase().includes(searchInput.toLowerCase());
            });
            const restaurantNameMatch = restaurant.info.name.toLowerCase().includes(searchInput.toLowerCase());
            return cuisinesMatch || restaurantNameMatch;
        });
        setSuggestedRestaurants(filteredRestaurants);
    }

    useEffect(() => {
        getSearchRestaurants()
    }, [searchInput])


    if (isError) {
        return <h1>Error</h1>
    }

    return (
        <div className='my-24'>
            <div className='bg-primary w-4/5 md:w-1/2 flex items-center m-auto p-2 rounded-lg'>
                <input className="bg-primary w-full text-white text-sm md:text-lg outline-none" type="text" value={searchInput} onChange={e => setSearchInput(e.target.value)} placeholder='Search your Restaurants and Food..' />
                <BiSearchAlt2 className='text-secondary text-lg' />
            </div>
            <div className='flex gap-4 justify-between md:justify-center mt-5 md:mt-10 overflow-x-auto px-4'>
                <img className="w-16 md:w-20 cursor-pointer" onClick={() => setSearchInput("Biryani")} src={biryaniImage} alt="Biryani Image" />
                <img className="w-16 md:w-20 cursor-pointer" onClick={() => setSearchInput("Burger")} src={burgerImage} alt="Burger Image" />
                <img className="w-16 md:w-20 cursor-pointer" onClick={() => setSearchInput("Pizza")} src={pizzaImage} alt="Pizza Image" />
                <img className="w-16 md:w-20 cursor-pointer" onClick={() => setSearchInput("Cake")} src={cakeImage} alt="Cake Image" />
                <img className="w-16 md:w-20 cursor-pointer" onClick={() => setSearchInput("Chinese")} src={chineseImage} alt="Chinese Image" />
                <img className="w-16 md:w-20 cursor-pointer" onClick={() => setSearchInput("Dessert")} src={dessertImage} alt="Dessert Image" />
                <img className="w-16 md:w-20 cursor-pointer" onClick={() => setSearchInput("Ice cream")} src={icecreamImage} alt="Ice cream Image" />
            </div>
            {isLoading && <SearchShimmer />}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-20 p-8 md:p-16">
                {
                    suggestedRestaurants.length > 0 ? suggestedRestaurants.map((restaurant) => {
                        return <RestaurantCard key={restaurant?.info?.id} restaurant={restaurant?.info} />

                    }) : <p className='col-span-full place-self-center text-sm md:text-xl font-semibold'> No restaurants</p>
                }
            </div>
        </div>
    )
}

export default Search