import {PrismaClient} from '@prisma/client'
import colors from 'colors'

import data from './sample-data'

const main = async () => {
  const prisma = new PrismaClient()
  // delete all existing data
  await prisma.product.deleteMany()
  await prisma.account.deleteMany()
  await prisma.session.deleteMany()
  await prisma.verificationToken.deleteMany()
  await prisma.user.deleteMany()

  // create new data
  await prisma.product.createMany({
    data: data.products,
  })
  await prisma.user.createMany({
    data: data.users,
  })

  console.log(colors.green(`DB seeded with ${data.products.length} products successfully!`))
}
// run the main function via: bx tsx db/seed.ts
main()
