import {Card, CardContent, CardHeader} from '@/components/ui/card'
import Image from 'next/image'
import Link from 'next/link'
import ProductPrice from './product-price'
import {Product} from '@/types'

function ProductCard(product: Product) {
  const {name, images, slug, brand, price, rating, stock} = product

  const priceElement = !stock ? (
    <p className='text-destructive'>Out of stock</p>
  ) : (
    <ProductPrice
      value={+price}
      className='text-red-500'
    />
  )

  return (
    <Card className='w-full max-w-sm  '>
      <CardHeader className='p-0 items-center'>
        {/* <CardTitle>{name}</CardTitle> */}
        {/* <CardDescription>{category}</CardDescription> */}
        <Link href={`/product/${slug}`}>
          <Image
            src={images[0]}
            alt={name}
            width={300}
            height={300}
            priority
          />
        </Link>
      </CardHeader>

      <CardContent className='p-4 grid gap-4'>
        <div className='text-xs'>{brand}</div>
        <Link href={`/product/${slug}`}>
          <h2 className='text-sm font-medium'>{name}</h2>
        </Link>
        <div className='flex-between gap-4'>
          <p>{+rating} Stars</p>
          {priceElement}
        </div>
      </CardContent>
    </Card>
  )
}

export default ProductCard
