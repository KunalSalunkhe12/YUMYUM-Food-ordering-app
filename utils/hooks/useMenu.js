import { useState, useEffect } from 'react'

const useMenu = (id) => {

    const [restaurant, setRestaurant] = useState(null)
    const [isError, setIsError] = useState(false)

    const getRestaurantMenu = async () => {
        setIsError(false)
        try {
            const response = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.517929&lng=88.38341199999999&restaurantId=${id}`)
            const json = await response.json()

            const ItemCategory = "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
            const menuCards = json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards
            const menu = menuCards.filter(menuCard => menuCard.card.card["@type"] === ItemCategory)

            setRestaurant({
                info: json?.data?.cards[0]?.card?.card?.info,
                menu: menu
            })

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