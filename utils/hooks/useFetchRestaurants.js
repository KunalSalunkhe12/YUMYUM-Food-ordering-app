import { useState, useEffect } from 'react'

const useFetchRestaurants = () => {
    const [restaurants, setRestaurants] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)
    // const [totalRestaurants, setTotalRestaurants] = useState()
    // const [hasMore, setHasMore] = useState(false)

    const getAllRestaurants = async () => {
        setIsLoading(true)
        setIsError(false)

        try {
            const response = await fetch(`${process.env.REACT_APP_API_URL}/restaurants`)
            const json = await response.json()

            const restaurantsCard = json?.data?.cards?.filter((card) => card.card.card.id === "restaurant_grid_listing")
            const restaurants = restaurantsCard[0].card.card.gridElements.infoWithStyle.restaurants
            setRestaurants(prevRestaurants => [...prevRestaurants, ...restaurants])
            // setTotalRestaurants(json?.data?.totalSize)
            // setHasMore(true)
        } catch (error) {
            setIsError(true)
            console.log(error);
        }
        finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        getAllRestaurants()
    }, [])


    return { restaurants, isLoading, isError }

}

export default useFetchRestaurants