import { useState, useEffect } from 'react'

const useMenu = (id) => {

    const [restaurant, setRestaurant] = useState(null)
    const [isError, setIsError] = useState(false)

    const getRestaurantMenu = async () => {
        setIsError(false)
        try {
            const response = await fetch(`${process.env.REACT_APP_API_URL}/api/menu?id=${id}`)
            const json = await response.json()
            setRestaurant(json)
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