import React from 'react'
import HeroContent from '../HeroContent/HeroContent'
import HeroImg from '../HeroImg/HeroImg'




function Hero() {
  return (
    <section className=' flex justify-center  py-11  max-[1212px]:px-10 max-[950px]:px-5 max-[580px]:px-0 '>
      <HeroContent/>
      <HeroImg />
      
    </section>
  )
}

export default Hero
