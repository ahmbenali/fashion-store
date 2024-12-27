import {Metadata} from 'next'
import Image from 'next/image'
import {redirect} from 'next/navigation'

import {auth} from '@/auth'
import {appName} from '@/lib/constants'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import Link from 'next/link'
import LoginForm from './login-form'

export const metadata: Metadata = {
  title: 'Sign In',
  description: 'Sign In to your account',
}

type Props = {
  searchParams: Promise<{callbackUrl: string}>
}

async function loginPage({searchParams}: Props) {
  const {callbackUrl} = await searchParams
  const session = await auth()

  // if user is logged in, redirect to callback url
  if (session) {
    // window.location.href = callbackUrl || '/'
    return redirect(callbackUrl || '/')
  }

  return (
    <div className='h-screen flex-center'>
      <Card className='w-full max-w-md '>
        <CardHeader className='space-y-4'>
          <Link
            href='/'
            className='flex-center'
          >
            <Image
              src={'/images/logo.svg'}
              alt={`${appName} logo`}
              width={100}
              height={100}
              priority
            />
          </Link>
          <CardTitle className='text-center'>Sign In</CardTitle>
          <CardDescription className='text-center'>
            Sign in to your account
          </CardDescription>
        </CardHeader>
        <CardContent className='space-y-4'>
          <LoginForm />
        </CardContent>
      </Card>
    </div>
  )
}

export default loginPage
