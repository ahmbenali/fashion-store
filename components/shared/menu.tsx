import {EllipsisVertical, ShoppingCart, UserIcon} from 'lucide-react'
import Link from 'next/link'

import {Button} from '../ui/button'
import ModeToggler from './mode-toggler'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'

function Menu() {
  return (
    <div className='flex justify-end gap-3'>
      {/* desktop menu */}
      <nav className='hidden md:flex gap-1 max-w-xs'>
        <ModeToggler />
        <Button
          asChild
          variant='ghost'
        >
          <Link href='/cart'>
            <ShoppingCart /> Cart
          </Link>
        </Button>
        <Button asChild>
          <Link href='/login'>
            <UserIcon /> Login
          </Link>
        </Button>
      </nav>

      {/* mobile menu */}
      <nav className='md:hidden'>
        <Sheet>
          <SheetTrigger className='align-middle'>
            <EllipsisVertical />
          </SheetTrigger>
          <SheetContent
            side='right'
            className='flex flex-col items-start'
          >
            <SheetHeader className='flex flex-col justify-between gap-5'>
              <SheetTitle>Menu</SheetTitle>
              <ModeToggler />
              <Button
                asChild
                variant='ghost'
              >
                <Link href='/cart'>
                  <ShoppingCart /> Cart
                </Link>
              </Button>
              <Button asChild>
                <Link
                  href='/login'
                  className=''
                >
                  <UserIcon />
                  Login
                </Link>
              </Button>
              <SheetDescription></SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </nav>
    </div>
  )
}

export default Menu
