import {clsx, type ClassValue} from 'clsx'
import {twMerge} from 'tailwind-merge'

const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs))

// convert prisma object into a regular (plain) JS object
// prettier-ignore
const convertPrismaObject = <T,>(value: T): T =>
  JSON.parse(JSON.stringify(value))

// format number with decimal places
const formatNumberWithDecimal = (value: number): string => {
  const [intPart, decPart] = value.toString().split('.')

  return decPart
    ? `${intPart}.${decPart.padEnd(2, '0')}`
    : ` ${intPart}.00`
}

export {
  cn,
  convertPrismaObject,
  formatNumberWithDecimal
}
