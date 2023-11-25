import RestaurantCard from "./RestaurantCard"
import Error from "./Error"
import HomeShimmer from "./Shimmer/HomeShimmer"
import useFetchRestaurants from "../../utils/hooks/useFetchRestaurants"
import ShimmerCard from "./Shimmer/ShimmerCard"

const RestaurantList = () => {
    const { restaurants, isLoading, isError } = useFetchRestaurants()

    if (isError) {
        return <Error />
    }

    return (
        restaurants.length > 0 ?
            <>
                <div className="px-8 mt-16 md:px-16 md:mt-24 text-2xl font-semibold">
                    <div className="border-b-2 p-3">
                        <div>{restaurants.length} Restaurants</div>
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
            </> :
            <HomeShimmer />
    )
}

export default RestaurantList