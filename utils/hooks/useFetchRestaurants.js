import { useState, useEffect } from 'react'

const useFetchRestaurants = (offset) => {
    const [restaurants, setRestaurants] = useState([])
    const [totalRestaurants, setTotalRestaurants] = useState()
    const [isLoading, setIsLoading] = useState(true)
    const [hasMore, setHasMore] = useState(false)
    const [isError, setIsError] = useState(false)

    const getAllRestaurants = async () => {
        setIsLoading(true)
        setIsError(false)

        try {
            const response = await fetch(`${process.env.REACT_APP_API_URL}/restaurants?offset=${offset}`)
            const json = await response.json()
            if (json?.data?.cards) {
                const restaurants = json?.data?.cards.filter((card) => card.cardType === "restaurant")
                setRestaurants(prevRestaurants => [...prevRestaurants, ...restaurants])
                setTotalRestaurants(json?.data?.totalSize)
                setHasMore(true)
                setIsLoading(false)
            } else {
                setHasMore(false)
                setIsLoading(false)
            }

        } catch (error) {
            setIsError(true)
            console.log(error);
        }
    }

    useEffect(() => {
        getAllRestaurants()
    }, [offset])


    return { restaurants, totalRestaurants, isLoading, hasMore, isError }

}

export default useFetchRestaurants