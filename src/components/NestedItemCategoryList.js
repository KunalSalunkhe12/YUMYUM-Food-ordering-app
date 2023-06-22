import React from 'react'
import ItemCategoryList from './ItemCategoryList';

const NestedItemCategoryList = ({ nestedCategory }) => {


    return (
        <div>
            <h2 className='text-lg md:text-2xl font-bold my-4'>{nestedCategory?.title}</h2>
            {
                nestedCategory.categories.map(item => <ItemCategoryList key={item.title} itemCategory={item} />)
            }
        </div>
    )
}

export default NestedItemCategoryList