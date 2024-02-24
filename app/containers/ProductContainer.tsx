import React from 'react'
import CategorySelector from '../components/categories/CategorySelector'

const ProductContainer = () => {
  return (
    <div className="bg-gray-100 min-h-fit flex">
    <div className="hidden md:block md:min-w-56 bg-blue-500">
        <CategorySelector />
    </div>
    <div className=" bg-purple-400 flex-1">
s
    </div>
  </div>
    )
}

export default ProductContainer