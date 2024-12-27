import ProductList from '@/components/product/product-list'
import {getLatestProducts} from '@/lib/actions/product.action'
// import data from '@/db/sample-data'

import {Metadata} from 'next'

export const metadata: Metadata = {
  title: 'Home',
  description: 'Welcome to YoungStore',
}

// delay the rendering of the page to simulate a loading state
// export const revalidate = 3

/* const delay = (ms: number) => {
  return new Promise(resolve => setTimeout(resolve, ms))
} */

async function home() {
  // await delay(3000)

  const products = await getLatestProducts()

  return (
    <>
      <ProductList
        products={products}
        title='Featured Products'
        // limit={4} already fixed in the product.action.ts
      />
    </>
  )
}

export default home
