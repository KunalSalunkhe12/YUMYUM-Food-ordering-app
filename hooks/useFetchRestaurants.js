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
            const response = await fetch(`https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.3667296&lng=72.819814&offset=${offset}&sortBy=RELEVANCE&pageType=SEE_ALL&page_type=DESKTOP_SEE_ALL_LISTING`)
            const json = await response.json()
            if (json?.data?.cards) {
                setHasMore(true)
                setRestaurants(prevRestaurants => [...prevRestaurants, ...json?.data?.cards])
                setTotalRestaurants(json?.data?.totalSize)
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