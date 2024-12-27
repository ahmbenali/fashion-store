'use client'

import {cn} from '@/lib/utils'
import Image from 'next/image'
import {useState} from 'react'

function ProductImages({images}: {images: string[]}) {
  // const [current, setCurrent] = useState(0)
  const [currentImg, setCurrentImg] = useState(images[0])

  // style  thumbnail image
  const style = (img: string) => {
    return cn(
      'border cursor-pointer hover:border-orange-600',
      //  img === currentImg && 'border-orange-500'
      {'border-orange-500': img === currentImg}
    )
  }

  return (
    <div className='space-y-4'>
      <Image
        // src={images[current]}
        src={currentImg}
        alt='product image'
        width={1000}
        height={1000}
        priority
        className='min-h-[300px] object-cover object-center'
      />
      <div className='flex gap-2'>
        {images.map(img => (
          <div
            key={img}
            // onClick={() => setCurrent(index)}
            onClick={() => setCurrentImg(img)}
            className={style(img)}
          >
            <Image
              src={img}
              alt='thumbnail image'
              width={100}
              height={100}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductImages
