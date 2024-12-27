'use client'

import {Button} from '@/components/ui/button'
import {Input} from '@/components/ui/input'
import {Label} from '@/components/ui/label'
import {loginWithCredentials} from '@/lib/actions/user.action'
import {loginDefaultValues} from '@/lib/constants'
import Link from 'next/link'
import {useSearchParams} from 'next/navigation'
import {useActionState} from 'react'
import {useFormStatus} from 'react-dom'

function LoginForm() {
  const [data, action] = useActionState(loginWithCredentials, {
    success: false,
    message: '',
  })

  const searchParams = useSearchParams()

  const callbackUrl = searchParams.get('callbackUrl') || '/'

  const LoginButton = () => {
    const {pending} = useFormStatus()

    return (
      <Button
        className='w-full'
        type='submit'
        disabled={pending}
        variant='default'
      >
        {pending ? 'Logging in...' : 'Login'}
      </Button>
    )
  }

  return (
    <form
      className='space-y-4'
      action={action}
    >
      <input
        type='hidden'
        name='callbackUrl'
        value={callbackUrl}
      />
      <div className=''>
        <Label htmlFor='email'>Email</Label>
        <Input
          type='email'
          id='email'
          placeholder='Email'
          required
          name='email'
          autoComplete='email'
          defaultValue={loginDefaultValues.email}
        />
      </div>
      <div className='space-y-1'>
        <Label htmlFor='password'>Password</Label>
        <Input
          type='password'
          id='password'
          placeholder='Password'
          required
          name='password'
          autoComplete='password'
          defaultValue={loginDefaultValues.password}
        />
      </div>
      <div>
        <LoginButton />
      </div>

      {!data?.success && (
        <div className='text-destructive text-center'>{data.message}</div>
      )}

      <div className='text-sm text-center text-muted-foreground'>
        Don&apos;t have an account?{' '}
        <Link
          href='/register'
          target='_self'
          className='text-primary underline-offset-4 hover:underline'
        >
          Register
        </Link>
      </div>
    </form>
  )
}

export default LoginForm
