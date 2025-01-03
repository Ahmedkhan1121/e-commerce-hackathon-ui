
import AboutGlobalBrand from '@/components/AboutGlobalBrand/AboutGlobalBrand'
import BrandDifferent from '@/components/BrandDifferent/BrandDifferent'
import H2Cards from '@/components/H2Cards/H2Cards'
import HeroAbout from '@/components/HeroAbout/HeroAbout'
import SignUp from '@/components/SignUp/SignUp'
import React from 'react'

function page() {
  return (
    <main>
      {/* Hero */}
      <HeroAbout/> 

      <H2Cards/>

      <AboutGlobalBrand/>

      <BrandDifferent/>

       <SignUp/>
    </main>
  )
}

export default page
