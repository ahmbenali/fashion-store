import Image from 'next/image'
import loader from '../assets/loader.gif'
import * as React from 'react'


function loading() {
  return (
    <div className='flex-center h-[100vh] w-[100vw]'>
      <Image
        src={loader}
        alt='Loading...'
        width={150}
        height={150}
      />
    </div>
  )
}

export default loading
