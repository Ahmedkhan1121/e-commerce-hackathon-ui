import Link from 'next/link'
import React from 'react'

function HeroAboutButton() {
  return (
    
      <button className='py-[18px] px-[26px] text-[#2A254B] bg-[#F9F9F9]'><Link href={`/product`}>View our products</Link></button>
  )
}

export default HeroAboutButton
