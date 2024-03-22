import React from 'react'
import CategorySelector from '../components/utils/CategorySelector'
import ProductCard from '../components/cards/ProductCard'

const ProductContainer = () => {
  return (
    <div className="bg-gray-100 min-h-fit flex mt-4">
    <div className="hidden md:block md:min-w-56">
        <CategorySelector />
    </div>
    <div className=" bg-purple-400 flex flex-1 flex-wrap gap-4  lg:pl-6 ">

          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
    </div>
  </div>
    )
}

export default ProductContainer