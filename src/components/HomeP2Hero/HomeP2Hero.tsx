import React from 'react'
import HeroContentHp2 from '../HeroContentHp2/HeroContentHp2'
import Image from 'next/image'
// import '../../styles/HeroP2.css'

// ya homepage2 ka hero page ha ja par sare components hay 

function HomeP2Hero() {
  return (
    <section className='Bg-heroP2  flex justify-end items-center pr-[65px]  max-[1000px]:pr-[45px] max-[710px]:pr-[30px]  max-[700px]:justify-center max-[485px]:pr-[20px] max-[450px]:pr-[0px] max-[450px]:bg-none max-[450px]:flex-col max-[450px]:justify-start  '>
      
      
    <HeroContentHp2/>

    <div className='hidden max-[450px]:flex'>
    <Image className='w-[444px]  '
    src={`/images/hero/fa9b27255272d76e665cce4314b4aedb.jpeg`}
    alt='hero Img'
    height={100}
    width={200}
    />
    </div>
    </section>
  )
}

export default HomeP2Hero
