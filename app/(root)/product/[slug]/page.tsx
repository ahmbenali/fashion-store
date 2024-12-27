import ProductImages from '@/components/product/product-images'
import ProductPrice from '@/components/product/product-price'
import {Badge} from '@/components/ui/badge'
import {Button} from '@/components/ui/button'
import {Card, CardContent} from '@/components/ui/card'
import {getProductBySlug} from '@/lib/actions/product.action'
import {notFound} from 'next/navigation'

type Props = {
  params: Promise<{slug: string}>
}

async function productDetailsPage({params}: Props) {
  const {slug} = await params
  const product = await getProductBySlug(slug)
  const {
    images,
    stock,
    price,
    numReviews,
    rating,
    name,
    brand,
    category,
    description,
  } = product || {}

  if (!product) notFound()

  return (
    <>
      <section>
        <div className='grid md:grid-cols-5'>
          {/* images column */}
          <div className='md:col-span-2 '>
            <ProductImages images={images!} />
          </div>
          {/* details column */}
          <div className='md:col-span-2 p-5'>
            <div className='flex flex-col gap-6'>
              <p>
                {brand} - {category}
              </p>
              <h1 className='h3-bold'>{name}</h1>
              <p>
                {rating} of {numReviews}
              </p>
              <div className='flex flex-col sm:flex-row sm:items-center gap-3'>
                <ProductPrice
                  value={+price!}
                  className='w-24 rounded-full bg-green-100 text-green-800 px-5 py-2'
                />
              </div>
            </div>
            <div className='mt-10'>
              <p className='font-semibold'>Description</p>
              <p>{description}</p>
            </div>
          </div>
          {/* actions column */}
          <div>
            <Card>
              <CardContent>
                <div className='mb-2 flex-between'>
                  <div>Price</div>
                  <div>
                    <ProductPrice value={+price!} />
                  </div>
                </div>
                <div className='mb-2 flex-between'>
                  <div>Status</div>
                  {stock && <Badge variant='outline'>In Stock</Badge>}
                  {!stock && <Badge variant='destructive'>Out of Stock</Badge>}
                </div>
                {stock && (
                  <div className='flex-center'>
                    <Button className='w-full'>Add To Cart</Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  )
}

export default productDetailsPage
