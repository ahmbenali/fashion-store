import Footer from '@/components/shared/footer'
import Header from '@/components/shared/header'
import {PropsWithChildren} from 'react'
import * as React from 'react'


function Layout({children}: PropsWithChildren) {
  return (
    <div className='flex flex-col h-screen'>
      <Header />
      <main className='flex-1 wrapper'>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
