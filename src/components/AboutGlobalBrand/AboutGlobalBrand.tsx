import React from 'react'
import AboutGlobalBrandContent from '../AboutGlobalBrandContent/AboutGlobalBrandContent'
import AboutGlobalBrandImg from '../AboutGlobalBrandImg/AboutGlobalBrandImg'

function AboutGlobalBrand() {
  return (
    <section className='flex h-screen max-[590px]:flex-col max-[590px]:mb-[180px] '>
        
    <AboutGlobalBrandImg/>

    <AboutGlobalBrandContent/>


</section>
  )
}

export default AboutGlobalBrand
