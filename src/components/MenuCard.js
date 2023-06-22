import React, { useContext, useEffect } from "react"
import { CDN_IMG_URL } from "../constant";
import { CartContext } from "../../utils/context/CartContext";
import QuantityButton from "./QuantityButton";

const MenuCard = ({ item }) => {

    const { cartState, addToCart } = useContext(CartContext)

    useEffect(() => {
        localStorage.setItem("cartData", JSON.stringify(cartState))
        return () => {
            localStorage.setItem("cartData", JSON.stringify(cartState))
        }
    }, [cartState])


    return (
        <>
            <div className="flex justify-between items-center my-6 gap-6">
                <div className="leading-8">
                    <p className="font-medium text-sm md:text-base">{item?.name}</p>
                    <p className="text-sm md:text-base">₹{item?.price / 100 || item?.defaultPrice / 100}</p >
                    <p className="text-xs md:text-sm text-gray-500">{item?.description?.substring(0, 100)}</p>
                </div>
                <div className="flex flex-col gap-3 justify-center items-center">
                    <div className="w-20 sm:w-24 md:w-28 lg:w-32">
                        {
                            item?.imageId && <img className="rounded-md" src={CDN_IMG_URL + item?.imageId} alt="Menu Item Image" />
                        }
                    </div>
                    {
                        cartState.items[item.id] ?
                            <QuantityButton item={item} /> :
                            <button className="bg-primary text-base md:text-lg text-secondary px-3 py-1 rounded-lg font-semibold" onClick={() => addToCart(item)}>Add +</button>
                    }
                </div>
            </div>
            <hr />
        </>
    )
}

export default MenuCard;