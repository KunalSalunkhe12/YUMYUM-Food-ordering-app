import { useState, useEffect } from 'react'

const useMenu = (id) => {

    const [restaurant, setRestaurant] = useState(null)
    const [isError, setIsError] = useState(false)

    const getRestaurantMenu = async () => {
        setIsError(false)
        try {
            const response = await fetch(`${process.env.REACT_APP_API_URL}/menu?id=${id}`)
            const json = await response.json()
            const ItemCategory = "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
            const NestedItemCategory = "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
            const menuCards = json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards
            const menu = menuCards.filter(menuCard => menuCard.card.card["@type"] === ItemCategory || menuCard.card.card["@type"] === NestedItemCategory).map(menuCard => {
                return menuCard.card.card
            })
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