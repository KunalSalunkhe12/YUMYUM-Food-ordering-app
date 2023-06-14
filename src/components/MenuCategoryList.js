import React from 'react'
import MenuCard from './MenuCard'

const MenuCategoryList = ({ title, itemCards }) => {
    return (
        <div>
            <h2 className='text-xl font-bold'>{title}</h2>
            {itemCards.map((item => {
                return <MenuCard key={item?.card?.info.id} item={item?.card?.info} />
            }))}
            <hr className='my-4 mx-auto w-3/2 h-3 bg-slate-100' />
        </div>
    )
}

export default MenuCategoryList