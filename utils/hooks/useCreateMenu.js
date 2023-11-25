//It is a custom hook to fetch the menu of a restaurant from SWIGGY API and store it in the database
//IT is for DEVELOPMENT ONLY
//Ignore this file

import { useState, useEffect } from 'react'

const useCreateMenu = (id) => {

    const [restaurant, setRestaurant] = useState(null)
    const [isError, setIsError] = useState(false)

    const getRestaurantMenu = async () => {
        setIsError(false)
        try {
            const response = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.517929&lng=88.38341199999999&restaurantId=${id}`)
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

            fetch("http://localhost:3000/create-menu", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    id: id,
                    info: json?.data?.cards[0]?.card?.card?.info,
                    menu: menu
                })
            }).then(response => {
                console.log(response)
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

export default useCreateMenu