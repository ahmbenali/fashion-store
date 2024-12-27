const appName = process.env.NEXT_PUBLIC_APP_NAME || 'Fashion Store'
const appDescription =
  process.env.NEXT_PUBLIC_APP_DESCRIPTION ||
  'A modern fashion store built with Next.js'
const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000'

const productsLimit = +process.env.LATEST_PRODUCTS_LIMIT! || 5

const dbUrl = process.env.DATABASE_URL!

export {appName, appDescription, serverUrl, productsLimit, dbUrl}
