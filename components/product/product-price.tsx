import {cn} from '@/lib/utils'

type Props = {
  value: number
  className?: string
}

function ProductPrice({value, className}: Props) {
  // ensure two decimal places
  const price = value.toFixed(2) // string
  // get the integer part and the decimal part
  const [integerPart, decimalPart] = price.split('.')

  return (
    <p className={cn('text-2xl', className)}>
      <span className='text-xs align-super'>$</span>
      {integerPart}
      <span className='text-xs align-super'>{decimalPart}</span>
    </p>
  )
}

export default ProductPrice
