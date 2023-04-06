import React, { useState, useEffect } from "react"
import RestaurantCard from "./RestaurantCard"
import Error from "./Error"
import { BiSearchAlt2 } from "react-icons/bi"
import Shimmer from "./Shimmer"

const RestaurantList = () => {
    const [searchInput, setSearchInput] = useState("")
    const [restaurants, setRestaurants] = useState([])
    const [isError, setIsError] = useState(false)


    const getAllRestaurants = async () => {
        try {
            const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.3667296&lng=72.819814&page_type=DESKTOP_WEB_LISTING")
            const json = await response.json()
            setRestaurants(json?.data?.cards[2]?.data?.data?.cards)
        } catch (error) {
            console.log(error)
            setIsError(true)
        }

    }

    useEffect(() => {
        getAllRestaurants()
    }, [])


    const filteredRestaurants = restaurants.filter(restaurant => restaurant.data.name.toLowerCase().includes(searchInput.toLowerCase()))

    if (isError) return <Error />

    return (
        <>
            <div className="search-container bg-secondary p-6 flex justify-center gap-3">
                <div className="bg-primary w-full md:w-1/2 lg:w-1/3 rounded-md shadow-3xl py-2 px-3 flex items-center">
                    <input className="bg-primary text-secondary font-semibold w-full outline-none border-0" type="text" value={searchInput} placeholder="Search you favorite restaurants here...." onChange={e => setSearchInput(e.target.value)} />
                    <BiSearchAlt2 className="text-secondary text-xl" />
                </div>
            </div>
            <div className="px-16 pt-8 text-2xl font-semibold"><div className="border-b-2 p-1">{filteredRestaurants.length > 0 ? filteredRestaurants.length : 0} Restaurants</div></div>

            {
                restaurants.length > 0 ?
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-20 p-16">
                        {
                            filteredRestaurants.length > 0 ?
                                filteredRestaurants.map(restaurant => {
                                    return (
                                        <RestaurantCard restaurant={restaurant.data} key={restaurant.data.id} />
                                    )
                                }) : "No Restaurants Found"}
                    </div>
                    : <Shimmer />
            }
        </>
    )
}

export default RestaurantList