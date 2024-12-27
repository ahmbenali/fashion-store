'use client'

import Image from 'next/image'
import {useRouter} from 'next/navigation'

import {Button} from '@/components/ui/button'
import {appName} from '@/lib/constants'
import {HomeIcon} from 'lucide-react'

const Notfound = () => {
  const router = useRouter()

  return (
    <div className='flex-center flex-col min-h-screen'>
      <Image
        src='/images/logo.svg'
        width={48}
        height={48}
        alt={`${appName} logo`}
        priority={true}
        title='Logo'
      />
      <div className='p-6 w-1/3 rounded-lg shadow-md text-center'>
        <h1 className='h1-bold mb-4'>Not Found</h1>
        <p className='text-destructive'>Could not find requested page</p>
        <Button
          variant='outline'
          className='mt-4 ml-2'
          // onClick={() => (window.location.href = '/')}
          onClick={() => router.push('/')}
          title='Back To Home'
        >
          Back <HomeIcon />
        </Button>
      </div>
    </div>
  )
}

export default Notfound
