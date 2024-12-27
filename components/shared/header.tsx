import Image from 'next/image'
import Link from 'next/link'

import {appName} from '@/lib/constants'
import Menu from './menu'


function Header() {
  return (
    <header className='w-full  border-b'>
      <div className='wrapper flex-between'>
        <div className='flex-start '>
          <Link
            href='/'
            className='flex-start ml-4'
          >
            <Image
              src='/images/logo.svg'
              alt={`${appName} logo`}
              width={48}
              height={48}
              priority={true}
            />
            <span className='hidden lg:block font-bold text-2xl ml-3'>
              {appName}
            </span>
          </Link>
        </div>

        {/* <div className='space-x-2'>
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
        </div> */}
        <Menu />

      </div>
    </header>
  )
}

export default Header
