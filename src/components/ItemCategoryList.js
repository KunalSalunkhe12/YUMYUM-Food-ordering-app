import React from 'react'
import MenuCard from './MenuCard'

const ItemCategoryList = ({ itemCategory }) => {
    return (
        <div>
            <h3 className='text-base md:text-xl font-semibold'>{itemCategory?.title}</h3>
            {itemCategory?.itemCards.map((item => {
                return <MenuCard key={item?.card?.info.id} item={item?.card?.info} />
            }))}
            <hr className='my-4 mx-auto w-3/2 h-3 bg-slate-100' />
        </div>
    )
}

export default ItemCategoryList