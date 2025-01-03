import React from 'react'
import HeroAboutButton from '../HeroAboutButton/HeroAboutButton'

function HeroAboutContent() {
  return (
    <div className='flex justify-around  items-center h-[277px] max-[810px]:justify-between max-[810px]:px-[25px] max-[735px]:flex-col   max-[735px]:items-center max-[735px]:justify-center max-[735px]:pl-[20px] max-[450px]:px-[0px] max-[735px]:gap-10  max-[320px]:py-[30px]'>
      <div className='w-[418px] max-[450px]:w-[302px] max-[450px]:text-[12px]  max-[320px]:w-[240px]   '><h1 className='text-xl  '>A brand built on the love of craftmanship,
      quality and outstanding customer service</h1></div>
    <HeroAboutButton/>
    </div>
  )
}

export default HeroAboutContent
