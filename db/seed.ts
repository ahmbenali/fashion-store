import {PrismaClient} from '@prisma/client'
import colors from 'colors'

import data from './sample-data'

const main = async () => {
  const prisma = new PrismaClient()
  // delete all existing data
  await prisma.product.deleteMany()

  // create new data
  await prisma.product.createMany({
    data: data.products,
  })

  console.log(colors.green(`DB seeded with ${data.products.length} products successfully!`))
}
// run the main function via: bx tsx db/seed.ts
main()
