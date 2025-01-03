import BrandDifferent from '@/components/BrandDifferent/BrandDifferent'
import CeramicsP2 from '@/components/CeramicsP2/CeramicsP2'
import H2Cards from '@/components/H2Cards/H2Cards'
import H2SignUp from '@/components/H2SignUp/H2SignUp'
import HomeP2Hero from '@/components/HomeP2Hero/HomeP2Hero'
import React from 'react'

function page() {
  return (
    <main>
      
      <HomeP2Hero/>
      <BrandDifferent/>
      {/* is me se ak heading remove ke ha is leya new component banaya he */}
      <CeramicsP2/>
      {/* is me do card he  */}
      <H2Cards/>
      {/* join club form */}
      <H2SignUp/>

    </main>
  )
}

export default page
