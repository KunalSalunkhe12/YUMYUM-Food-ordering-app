import React, { useState, useEffect, useRef, useCallback } from "react"
import RestaurantCard from "./RestaurantCard"
import Error from "./Error"
import { BiSearchAlt2 } from "react-icons/bi"
import Shimmer from "./Shimmer"
import useFetchRestaurants from "../../utils/hooks/useFetchRestaurants"
import ShimmerCard from "./ShimmerCard"

const RestaurantList = () => {
    const [searchInput, setSearchInput] = useState("")
    const [offset, setOffset] = useState(15)

    const { restaurants, totalRestaurants, isLoading, hasMore, isError } = useFetchRestaurants(offset)

    // const filteredRestaurants = restaurants?.filter(restaurant => restaurant?.data?.data?.name?.toLowerCase().includes(searchInput.trim().toLowerCase()))
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const loader = useRef(null)
    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            if (isLoading) return
            if (entries[0].isIntersecting && hasMore) {
                setOffset(prevOffset => prevOffset + 16)
            }
        })
        if (loader.current) observer.observe(loader.current)
        return () => {
            observer.disconnect()
        }
    }, [hasMore])


    if (isError) {
        return <Error />
    }

    return (
        restaurants.length > 0 ?
            <>
                <div className="px-16 pt-24 text-2xl font-semibold">
                    <div className="border-b-2 p-3 flex justify-between items-center">
                        <div>{totalRestaurants} Restaurants</div>
                        <div className="bg-primary w-full md:w-1/2 lg:w-1/3 rounded-md py-2 px-3 flex items-center">
                            <input className="bg-primary text-secondary text-lg font-semibold w-full outline-none border-0" type="text" value={searchInput} placeholder="Search you favourite restaurants here...." onChange={e => setSearchInput(e.target.value)} />
                            <BiSearchAlt2 className="text-secondary text-xl" />
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-20 p-16">
                    {
                        restaurants.map((restaurant) => {
                            return (
                                <RestaurantCard key={restaurant?.data?.data?.uuid} restaurant={restaurant?.data?.data} />
                            )
                        })
                    }
                    {isLoading && <ShimmerCard />}
                </div>
                <div className="invisible h-12" ref={loader}>Loader</div>
            </> :
            <Shimmer />
    )
}

export default RestaurantList