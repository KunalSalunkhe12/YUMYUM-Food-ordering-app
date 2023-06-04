import React, { useState, useEffect } from "react"
import RestaurantCard from "./RestaurantCard"
import { RESTAURANT_LIST_URL } from "../constant"
import Error from "./Error"
import { BiSearchAlt2 } from "react-icons/bi"
import Shimmer from "./Shimmer"
import useCheckOnline from "../../utils/useCheckOnline"

const RestaurantList = () => {
    const [searchInput, setSearchInput] = useState("")
    const [restaurants, setRestaurants] = useState([])
    const [isError, setIsError] = useState(false)


    const getAllRestaurants = async () => {
        try {
            const response = await fetch(RESTAURANT_LIST_URL)
            const json = await response.json()
            console.log(json)
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

    const isOnline = useCheckOnline()
    if (!isOnline) return <h1>You are Currently Offline 🚩</h1>
    if (isError) return <Error />

    return (
        <>
            <div className="px-16 pt-8 text-2xl font-semibold">
                <div className="border-b-2 p-3 flex justify-between items-center">
                    <div>{filteredRestaurants.length > 0 ? filteredRestaurants.length : 0} Restaurants</div>
                    <div className="bg-primary w-full md:w-1/2 lg:w-1/3 rounded-md py-2 px-3 flex items-center">
                        <input className="bg-primary text-secondary text-lg font-semibold w-full outline-none border-0" type="text" value={searchInput} placeholder="Search you favorite restaurants here...." onChange={e => setSearchInput(e.target.value)} />
                        <BiSearchAlt2 className="text-secondary text-xl" />
                    </div>
                </div>
            </div>


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