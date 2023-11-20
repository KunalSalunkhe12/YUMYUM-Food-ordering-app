import { useState, useEffect } from 'react'
import { fetchMenu } from '../../api'

const useMenu = (id) => {

    const [restaurant, setRestaurant] = useState(null)
    const [isError, setIsError] = useState(false)

    const getRestaurantMenu = async () => {
        setIsError(false)
        try {
            const response = await fetchMenu(id)
            setRestaurant(response.data)
        } catch (error) {
            setIsError(true)

        }

    }

    useEffect(() => {
        getRestaurantMenu()
    }, [])

    return { ...restaurant, isError }
}

export default useMenu