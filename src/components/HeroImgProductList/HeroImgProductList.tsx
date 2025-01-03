import Image from 'next/image'
import React from 'react'

function HeroImgProductList({img}:{img:string}) {
  console.log(img)
  return (
    <div>
      <Image className='w-[600px] h-[641px]  max-[890px]:h-[600px] max-[850px]:h-[550px] max-[750px]:w-[500px] max-[750px]:h-[641px] max-[750px]:px-[20px] max-[750px]:py-[20px] max-[500px]:px-[0px] max-[500px]:pt-[0px] max-[441px]:h-[450px]  '
      // 46e4914903f11d10ddf03117c8cfe3b6.jpeg
      // src={`/images/hero/46e4914903f11d10ddf03117c8cfe3b6.jpeg`}
      src={img}
      alt='Hero Img'
      height={200}
      width={200}
      />
    </div>
  )
}

export default HeroImgProductList
