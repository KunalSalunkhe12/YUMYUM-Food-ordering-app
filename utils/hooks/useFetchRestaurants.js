import { useState, useEffect } from 'react'

const useFetchRestaurants = () => {
    const [restaurants, setRestaurants] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)

    const getAllRestaurants = async () => {
        setIsLoading(true)
        setIsError(false)

        try {
            const response = await fetch(`${process.env.REACT_APP_API_URL}/api/restaurants`)
            const json = await response.json()
            setRestaurants(json)
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