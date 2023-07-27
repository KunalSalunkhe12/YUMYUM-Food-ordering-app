import React, { useState, useEffect, useRef } from "react"
import RestaurantCard from "./RestaurantCard"
import Error from "./Error"
import HomeShimmer from "./Shimmer/HomeShimmer"
import useFetchRestaurants from "../../utils/hooks/useFetchRestaurants"
import ShimmerCard from "./Shimmer/ShimmerCard"

const RestaurantList = () => {
    // const [offset, setOffset] = useState(15)
    const { restaurants, totalRestaurants, isLoading, hasMore, isError } = useFetchRestaurants()

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // HAD TO REMOVE PAGINATION DUE TO API LIMITATIONS
    // SWIGGY'S API NO LONGER SENDS PAGE OFFSET IN RESPONSE 

    // const loader = useRef(null)
    // useEffect(() => {
    //     const observer = new IntersectionObserver(entries => {
    //         if (isLoading) return
    //         if (entries[0].isIntersecting && hasMore) {
    //             setOffset(prevOffset => prevOffset + 16)
    //         }
    //     })
    //     if (loader.current) observer.observe(loader.current)
    //     return () => {
    //         observer.disconnect()
    //     }
    // }, [hasMore])


    if (isError) {
        return <Error />
    }

    return (
        restaurants.length > 0 ?
            <>
                <div className="px-8 mt-16 md:px-16 md:mt-24 text-2xl font-semibold">
                    <div className="border-b-2 p-3">
                        <div>{totalRestaurants} Restaurants</div>
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-14 p-8 md:p-16">
                    {
                        restaurants.map((restaurant) => {
                            return (
                                <RestaurantCard key={restaurant?.info?.id} restaurant={restaurant?.info} />
                            )
                        })
                    }
                    {isLoading &&
                        <ShimmerCard />
                    }
                </div>
                {/* <div className="invisible h-12">Loader</div> */}
            </> :
            <HomeShimmer />
    )
}

export default RestaurantList