import {z} from 'zod'
import {insertProductSchema} from './lib/validators'

type Product = z.infer<typeof insertProductSchema> & {
  id: string
  rating: string
  numReviews: number
  createdAt: Date
}

export type {Product}
