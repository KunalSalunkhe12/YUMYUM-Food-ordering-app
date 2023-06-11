import React, { useState, useEffect } from "react"
import RestaurantCard from "./RestaurantCard"
import Error from "./Error"
import { BiSearchAlt2 } from "react-icons/bi"
import Shimmer from "./Shimmer"
import useCheckOnline from "../../utils/useCheckOnline"

const RestaurantList = () => {
    const [searchInput, setSearchInput] = useState("")
    const [restaurants, setRestaurants] = useState([])
    const [totalRestaurants, setTotalRestaurants] = useState(0)
    const [offset, setOffset] = useState(15)
    const [isError, setIsError] = useState(false)
    const [isLoading, setIsLoading] = useState(true);
    const [hasMore, setHasMore] = useState(true)
    const isOnline = useCheckOnline()

    const filteredRestaurants = restaurants?.filter(restaurant => restaurant?.data?.data?.name?.toLowerCase().includes(searchInput.trim().toLowerCase()))

    const getAllRestaurants = async () => {
        if (!hasMore) return
        try {
            const response = await fetch(`https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.3667296&lng=72.819814&offset=${offset}&sortBy=RELEVANCE&pageType=SEE_ALL&page_type=DESKTOP_SEE_ALL_LISTING`)
            const json = await response.json()
            setRestaurants((prevRestaurants) => [...prevRestaurants, ...json?.data?.cards])
            setTotalRestaurants(json?.data?.totalSize)
            setIsLoading(false)
            console.log(totalRestaurants)
            setHasMore(offset + 16 < json?.data?.totalSize)
        } catch (error) {
            console.log(error)
            setIsError(true)
        }
    }

    useEffect(() => {
        getAllRestaurants()
    }, [offset])

    //Pagination | Infinite Scrolling
    console.log("hasMore", hasMore)
    console.log();
    const handleScroll = () => {
        if (window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight) {

            setIsLoading(true)
            setOffset((prev) => prev + 16)
        }

    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll)

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])


    if (!isOnline) return <h1>You are Currently Offline 🚩</h1>
    if (isError) return <Error />

    console.log(restaurants);


    return (
        restaurants.length > 0 ?
            <>
                <div className="px-16 pt-8 text-2xl font-semibold">
                    <div className="border-b-2 p-3 flex justify-between items-center">
                        <div>{totalRestaurants} Restaurants</div>
                        <div className="bg-primary w-full md:w-1/2 lg:w-1/3 rounded-md py-2 px-3 flex items-center">
                            <input className="bg-primary text-secondary text-lg font-semibold w-full outline-none border-0" type="text" value={searchInput} placeholder="Search you favorite restaurants here...." onChange={e => setSearchInput(e.target.value)} />
                            <BiSearchAlt2 className="text-secondary text-xl" />
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-20 p-16">
                    {
                        filteredRestaurants.length > 0 ?
                            filteredRestaurants.map(restaurant => {
                                return (
                                    <RestaurantCard restaurant={restaurant?.data?.data} key={restaurant?.data?.data?.uuid} />
                                )
                            }) : "No Restaurants Found"}
                </div>
                {isLoading && <Shimmer />}
            </> :
            <Shimmer />
    )
}

export default RestaurantList