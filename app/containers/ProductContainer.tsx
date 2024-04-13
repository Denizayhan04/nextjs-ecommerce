"use client"
import React, { useEffect, useState } from 'react'
import CategorySelector from '../components/utils/CategorySelector'
import ProductCard from '../components/cards/ProductCard'
import axios from 'axios'
import { Product } from '@prisma/client'

const ProductContainer = () => {
  const [products, setProducts] = useState([]);
 
  useEffect(() => {
    axios.get('/api/get/')
      .then(response => {
        const data = response.data;
        console.log(data);
        setProducts(data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []); // Bu useEffect'in sadece bir kere çağrılmasını sağlar

  return (
    <div className="bg-gray-100 min-h-fit flex mt-4">
      <div className="hidden md:block md:min-w-56">
        <CategorySelector />
      </div>
      <div className=" bg-purple-400 flex flex-1 flex-wrap gap-4  lg:pl-6 ">
        {products.map((e:Product) => (
             <ProductCard key={e.id} id={e.id} name={e.name} description={e.description} image={e.image} price={e.price} category={e.category} />
         ))
         }

      </div>
    </div>
  )
}

export default ProductContainer