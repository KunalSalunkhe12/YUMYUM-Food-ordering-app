import { useState, useEffect } from 'react'
import { fetchRestaurants } from '../../api'

const useFetchRestaurants = () => {
    const [restaurants, setRestaurants] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)

    const getAllRestaurants = async () => {
        setIsLoading(true)
        setIsError(false)

        try {
            const response = await fetchRestaurants()
            setRestaurants(response.data)
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