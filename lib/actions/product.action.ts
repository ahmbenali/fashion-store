'use server'

import {convertPrismaObject} from '../utils'
import {productsLimit} from '../constants'
import {prisma} from '@/db/prisma'

// get latest products
const getLatestProducts = async () => {
  const products = await prisma.product.findMany({
    orderBy: {
      createdAt: 'desc',
    },
    take: productsLimit,
  })
  // revalidatePath('/')
  return convertPrismaObject(products)
}

// get product by slug
const getProductBySlug = async (slug: string) => {
  return await prisma.product.findFirst({
    where: {slug},
  })
}

export {getLatestProducts, getProductBySlug}
