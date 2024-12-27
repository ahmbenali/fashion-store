import {dbUrl} from '@/lib/constants'
import {Pool, neonConfig} from '@neondatabase/serverless'
import {PrismaNeon} from '@prisma/adapter-neon'
import {PrismaClient} from '@prisma/client'
import ws from 'ws'

// Sets up WebSocket connections, which enables Neon to use WebSocket communication.
neonConfig.webSocketConstructor = ws
// Creates a new connection pool using the provided connection string, allowing multiple concurrent connections.
const pool = new Pool({connectionString: dbUrl})

// Instantiates the Prisma adapter using the Neon connection pool to handle the connection between Prisma and Neon.
const adapter = new PrismaNeon(pool)

// Extends the PrismaClient with a custom result transformer to convert the price and rating fields from decimals to strings.
export const prisma = new PrismaClient({adapter}).$extends({
  result: {
    product: {
      price: {
        compute({price}) {
          return price.toString()
        },
      },
      rating: {
        compute({rating}) {
          return rating.toString()
        },
      },
    },
  },
})
