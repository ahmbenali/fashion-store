'use server'

import {isRedirectError} from 'next/dist/client/components/redirect-error'
import {loginFormSchema} from '../validators'
import {signIn, signOut} from '@/auth'

// login the user with email and password
const loginWithCredentials = async (prevState: unknown, formData: FormData) => {
  try {
    // extract user from validation schema
    // const user = loginFormSchema.parse(Object.fromEntries(formData))
    const user = loginFormSchema.parse({
      email: formData.get('email'),
      password: formData.get('password'),
    })

    await signIn('credentials', user)

    return {success: true, message: 'Login successful'}
  } catch (error) {
    if (isRedirectError(error)) throw error

    return {
      success: false,
      // message: (error as Error).message,
      message: 'Invalid email or password',
    }
  }
}

// logout the user
const logout = async () => {
  await signOut()
}

export {loginWithCredentials, logout}
