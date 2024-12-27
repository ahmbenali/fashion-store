'use client'

import {Product} from '@/types'
import ProductCard from './product-card'

type Props = {
  products: Product[]
  title?: string
  // limit?: number
}

function ProductList({products, title}: Props) {
  // const limitedProducts: Product[] = limit ? products.slice(0, limit) : products

  return (
    <div className=''>
      <h2 className='h2-bold mb-4'>{title}</h2>
      {
        !products.length && (
          <div className='flex-center flex-col'>
            <p className='text-center'>No products found</p>
          </div>
        )
      }

      {
        products.length && (
          <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
            {
              products.map(product => (
                <ProductCard
                  key={product.id}
                  {...product}
                />
              ))
            }
          </div>
        )
      }
    </div>
  )
}

export default ProductList
