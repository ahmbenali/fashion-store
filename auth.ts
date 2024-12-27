import {prisma} from './db/prisma'
import {PrismaAdapter} from '@auth/prisma-adapter'
import CredentialsProvider from 'next-auth/providers/credentials'
import {compareSync} from 'bcrypt-ts-edge'
import NextAuth, {NextAuthConfig} from 'next-auth'

export const config = {
  pages: {
    signIn: '/login',
    error: '/login',
  },
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: {label: 'Email', type: 'text', placeholder: 'Email'},
        password: {
          label: 'Password',
          type: 'password',
          placeholder: 'Password',
        },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null

        // find user in db
        const user = await prisma.user.findFirst({
          where: {
            email: credentials.email,
          },
        })

        // check if user exists and password is correct
        if (user?.password) {
          const isMatch = compareSync(
            credentials.password as string,
            user.password
          )

          // If password is correct, return user
          if (isMatch) {
            return {
              id: user.id,
              name: user.name,
              email: user.email,
              role: user.role,
            }
          }
        }
        // If user does not exist or password does not match return null
        return null
      },
    }),
  ],
  callbacks: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async session({session, user, trigger, token}: any) {
      // set the user ID from the token
      session.user.id = token.sub!
      session.user.role = token.role!
      session.user.name = token.name!

      // if there is an update, set the user name
      if (trigger === 'update') {
        session.user.name = user.name
      }

      return session
    },
  },
} satisfies NextAuthConfig

export const {handlers, signIn, signOut, auth} = NextAuth(config)
