import ProductCard from '@/components/ProductCard/ProductCard'
import ProductHero from '@/components/ProductHero/ProductHero'
import SelectBar from '@/components/SelectBar/SelectBar'
import React from 'react'

function page() {
  return (
    <main>
      <ProductHero/>
      <SelectBar/>
      < ProductCard/>
    </main>
  )
}

export default page
